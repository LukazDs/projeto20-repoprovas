import { faker } from "@faker-js/faker";
import supertest from "supertest";
import app from "../../src/app";
import { IUser, IUserRequestBody } from "../../src/utils/sqlUserUtils";
import { prisma } from "../../src/config/database";
import { ITestReqBody } from "../../src/utils/sqlTestUtils";

const userSignUp: IUserRequestBody = {
  email: faker.internet.email(),
  password: "teste1234",
  confirmedPassword: "teste1234",
};

const userSignIn: IUser = {
  email: userSignUp.email,
  password: "teste1234",
};

const test: ITestReqBody = {
  name: faker.lorem.words(3),
  pdfUrl: faker.internet.url(),
  teacherId: 1,
  disciplineId: 1,
  categoryId: 1,
};

describe("Testa rota GET /tests", () => {
  it("Deve retornar status 201 quando o token e o corpo da requisição enviado for válido", async () => {
    await supertest(app).post("/signup").send(userSignUp);

    const { token } = await (
      await supertest(app).post("/signin").send(userSignIn)
    ).body;

    const result = await supertest(app)
      .post("/tests")
      .send(test)
      .set("Authorization", token);

    expect(result.status).toBe(201);
  });
  it("Deve retornar status 422 quando o token é válido, porém o corpo da requisição enviado for inválido", async () => {
    await supertest(app).post("/signup").send(userSignUp);

    const { token } = await (
      await supertest(app).post("/signin").send(userSignIn)
    ).body;

    const result = await supertest(app)
      .post("/tests")
      .send({ test: "test" })
      .set("Authorization", token);

    expect(result.status).toBe(422);
  });
  it("Deve retornar status 404 quando o token é válido, porém teacherId incoerente", async () => {
    await supertest(app).post("/signup").send(userSignUp);

    const { token } = await (
      await supertest(app).post("/signin").send(userSignIn)
    ).body;

    test.teacherId = 6;

    const result = await supertest(app)
      .post("/tests")
      .send(test)
      .set("Authorization", token);

    expect(result.status).toBe(404);
  });
  it("Deve retornar status 404 quando o token é válido, porém disciplienId incoerente", async () => {
    await supertest(app).post("/signup").send(userSignUp);

    const { token } = await (
      await supertest(app).post("/signin").send(userSignIn)
    ).body;

    test.disciplineId = 6;

    const result = await supertest(app)
      .post("/tests")
      .send(test)
      .set("Authorization", token);

    expect(result.status).toBe(404);
  });
  it("Deve retornar 400 quando token for enviado vazio", async () => {
    const result = await supertest(app)
      .post("/tests")
      .send(test)
      .set("Authorization", "");

    expect(result.status).toBe(400);
  });
  it("Deve retornar 401 quando token for inválido", async () => {
    const result = await supertest(app)
      .post("/tests")
      .send(test)
      .set("Authorization", "token test");

    expect(result.status).toBe(401);
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});
