import supertest from "supertest";
import { faker } from "@faker-js/faker";
import app from "../src/app";
import { IUserRequestBody } from "../src/utils/sqlUserUtils";
import { ITestReqBody } from "../src/utils/sqlTestUtils";
import { prisma } from "../src/config/database";

const test: ITestReqBody = {
  name: faker.name.fullName(),
  pdfUrl: faker.internet.url(),
  disciplineId: 4,
  teacherId: 1,
  categoryId: 1,
};

console.log(faker.internet.email());

const user: IUserRequestBody = {
  email: faker.internet.email(),
  password: "teste1234",
  confirmedPassword: "teste1234",
};

describe("Testa POST /signup ", () => {
  it("Deve retornar 201, se cadastrado um usuário no formato correto", async () => {
    const result = await supertest(app).post("/signup").send(user);
    expect(result.status).toBe(201);
  });

  it("Deve retornar 401, ao tentar cadastrar um email que exista", async () => {
    await supertest(app).post("/signup").send(user);

    const result = await supertest(app).post("/signup").send(user);
    expect(result.status).toBe(401);
  });

  it("Deve retornar 422, ao tentar cadastrar um formato de corpo inválido", async () => {
    const result = await supertest(app)
      .post("/signup")
      .send({ teste: "teste" });
    expect(result.status).toBe(422);
  });
});
