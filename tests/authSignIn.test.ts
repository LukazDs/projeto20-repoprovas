import supertest from "supertest";
import { faker } from "@faker-js/faker";
import app from "../src/app";
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

describe("Testa POST /signin ", () => {
  it("Deve retornar 201, se logado um usuário no formato correto", async () => {
    await supertest(app).post("/signup").send(userSignUp);

    const result = await supertest(app).post("/signin").send(userSignIn);
    expect(result.status).toBe(201);
  });

  // it("Deve retornar 401, ao tentar cadastrar um email que exista", async () => {
  //   await supertest(app).post("/signup").send(user);

  //   const result = await supertest(app).post("/signup").send(user);
  //   expect(result.status).toBe(401);
  // });

  // it("Deve retornar 422, ao tentar cadastrar um formato de corpo inválido", async () => {
  //   const result = await supertest(app)
  //     .post("/signup")
  //     .send({ teste: "teste" });
  //   expect(result.status).toBe(422);
  // });
});
