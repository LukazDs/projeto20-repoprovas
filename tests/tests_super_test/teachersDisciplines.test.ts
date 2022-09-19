import supertest from "supertest";
import { faker } from "@faker-js/faker";
import app from "../../src/app";
import { prisma } from "../../src/config/database";
import { IUser, IUserRequestBody } from "../../src/utils/sqlUserUtils";

const userSignUp: IUserRequestBody = {
  email: faker.internet.email(),
  password: "teste1234",
  confirmedPassword: "teste1234",
};

const userSignIn: IUser = {
  email: userSignUp.email,
  password: "teste1234",
};

describe("Testa rota GET /disciplines/:disciplineId/tests/teachers", () => {
  it("Deve retornar status 200, em caso de token válido e disciplineId existente", async () => {
    await supertest(app).post("/signup").send(userSignUp);

    const { token } = await (
      await supertest(app).post("/signin").send(userSignIn)
    ).body;

    const result = await supertest(app)
      .get("/disciplines/4/tests/teachers")
      .set("Authorization", token);

    expect(result.status).toBe(200);
  });
  it("Deve retornar status 404, em caso de token válido e disciplineId não existente", async () => {
    await supertest(app).post("/signup").send(userSignUp);

    const { token } = await (
      await supertest(app).post("/signin").send(userSignIn)
    ).body;

    const result = await supertest(app)
      .get("/disciplines/0/tests/teachers")
      .set("Authorization", token);

    expect(result.status).toBe(404);
  });
  it("Deve retornar status 401, em caso de token inválido", async () => {
    const result = await supertest(app)
      .get("/disciplines/1/tests/teachers")
      .set("Authorization", "token test");

    expect(result.status).toBe(401);
  });
  it("Deve retornar status 400, em caso de token vazio", async () => {
    const result = await supertest(app)
      .get("/disciplines/1/tests/teachers")
      .set("Authorization", "");

    expect(result.status).toBe(400);
  });
});

describe("Testa rota GET /teachers/:teacherId/tests/disciplines", () => {
  it("Deve retornar status 200, em caso de token válido e teacherId existente", async () => {
    await supertest(app).post("/signup").send(userSignUp);

    const { token } = await (
      await supertest(app).post("/signin").send(userSignIn)
    ).body;

    const result = await supertest(app)
      .get("/teachers/1/tests/disciplines")
      .set("Authorization", token);

    expect(result.status).toBe(200);
  });
  it("Deve retornar status 404, em caso de token válido e teacherId não existente", async () => {
    await supertest(app).post("/signup").send(userSignUp);

    const { token } = await (
      await supertest(app).post("/signin").send(userSignIn)
    ).body;

    const result = await supertest(app)
      .get("/teachers/0/tests/disciplines")
      .set("Authorization", token);

    expect(result.status).toBe(404);
  });
  it("Deve retornar status 401, em caso de token inválido", async () => {
    const result = await supertest(app)
      .get("/teachers/1/tests/disciplines")
      .set("Authorization", "token test");

    expect(result.status).toBe(401);
  });
  it("Deve retornar status 400, em caso de token vazio", async () => {
    const result = await supertest(app)
      .get("/teachers/1/tests/disciplines")
      .set("Authorization", "");

    expect(result.status).toBe(400);
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});
