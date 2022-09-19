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

describe("Testa GET /disciplines", () => {
  it("Deve retornar status 200, em caso de token válido", async () => {
    await supertest(app).post("/signup").send(userSignUp);

    const { token } = await (
      await supertest(app).post("/signin").send(userSignIn)
    ).body;

    const result = await supertest(app)
      .get("/disciplines")
      .set("Authorization", token);

    expect(result.status).toBe(200);
  });
  it("Deve retornar 400 quando token for enviado vazio", async () => {
    const result = await supertest(app)
      .get("/disciplines")
      .set("Authorization", "");

    expect(result.status).toBe(400);
  });
  it("Deve retornar 401 quando token for inválido", async () => {
    const result = await supertest(app)
      .get("/disciplines")
      .set("Authorization", "token teste");

    expect(result.status).toBe(401);
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});
