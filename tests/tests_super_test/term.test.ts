import { faker } from "@faker-js/faker";
import supertest from "supertest";
import app from "../../src/app";
import { IUser, IUserRequestBody } from "../../src/utils/sqlUserUtils";
import { prisma } from "../../src/config/database";

const userSignUp: IUserRequestBody = {
  email: faker.internet.email(),
  password: "teste1234",
  confirmedPassword: "teste1234",
};

const userSignIn: IUser = {
  email: userSignUp.email,
  password: "teste1234",
};

describe("Testa rota GET /terms", () => {
  it("Deve retornar status 200 quando o token enviado for válido", async () => {
    await supertest(app).post("/signup").send(userSignUp);

    const { token } = await (
      await supertest(app).post("/signin").send(userSignIn)
    ).body;

    const result = await supertest(app)
      .get("/terms")
      .set("Authorization", token);

    expect(result.status).toBe(200);
  });
  it("Deve retornar 400 quando token for enviado vazio", async () => {
    const result = await supertest(app).get("/terms").set("Authorization", "");

    expect(result.status).toBe(400);
  });
  it("Deve retornar 401 quando token for inválido", async () => {
    const result = await supertest(app)
      .get("/terms")
      .set("Authorization", "token test");

    expect(result.status).toBe(401);
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});
