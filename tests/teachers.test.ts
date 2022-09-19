import supertest from "supertest";
import { faker } from "@faker-js/faker";
import app from "../src/app";
import { prisma } from "../src/config/database";
import { IUser, IUserRequestBody } from "../src/utils/sqlUserUtils";

const userSignUp: IUserRequestBody = {
  email: faker.internet.email(),
  password: "teste1234",
  confirmedPassword: "teste1234",
};

const userSignIn: IUser = {
  email: userSignUp.email,
  password: "teste1234",
};

describe("Testa GET /teachers/:id", () => {
  it("Deve retornar status 200, em caso de token válido e id existente", async () => {
    await supertest(app).post("/signup").send(userSignUp);

    const { token } = await (
      await supertest(app).post("/signin").send(userSignIn)
    ).body;

    const result = await supertest(app)
      .get("/teachers/1")
      .set("Authorization", token);

    expect(result.status).toBe(200);
  });
  it("Deve retornar status 404, em caso de token válido e id não existente", async () => {
    await supertest(app).post("/signup").send(userSignUp);

    const { token } = await (
      await supertest(app).post("/signin").send(userSignIn)
    ).body;

    const result = await supertest(app)
      .get("/teachers/0")
      .set("Authorization", token);

    expect(result.status).toBe(404);
  });
  it("Deve retornar status 401, em caso de token inválido", async () => {
    const result = await supertest(app)
      .get("/teachers/1")
      .set("Authorization", "token test");

    expect(result.status).toBe(401);
  });
  it("Deve retornar status 400, em caso de token vazio", async () => {
    const result = await supertest(app)
      .get("/teachers/1")
      .set("Authorization", "");

    expect(result.status).toBe(400);
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});
