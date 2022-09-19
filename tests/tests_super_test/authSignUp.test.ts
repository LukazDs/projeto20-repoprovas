import supertest from "supertest";
import { faker } from "@faker-js/faker";
import app from "../../src/app";
import { IUserRequestBody } from "../../src/utils/sqlUserUtils";
import { prisma } from "../../src/config/database";

const userSignUp: IUserRequestBody = {
  email: faker.internet.email(),
  password: "teste1234",
  confirmedPassword: "teste1234",
};

describe("Testa POST /signup ", () => {
  it("Deve retornar 201, se cadastrado um usuário no formato correto", async () => {
    const result = await supertest(app).post("/signup").send(userSignUp);
    expect(result.status).toBe(201);
  });

  it("Deve retornar 401, ao tentar cadastrar um email que exista", async () => {
    await supertest(app).post("/signup").send(userSignUp);

    const result = await supertest(app).post("/signup").send(userSignUp);
    expect(result.status).toBe(401);
  });

  it("Deve retornar 422, ao tentar cadastrar um formato de corpo inválido", async () => {
    const result = await supertest(app)
      .post("/signup")
      .send({ teste: "teste" });
    expect(result.status).toBe(422);
  });
});

// describe("Testa GET /items ", () => {
//   it("Deve retornar status 200 e o body no formato de Array", async () => {
//     await supertest(app).post("/items").send(item1);
//     const result = await supertest(app).get("/items");
//     expect(result.status).toBe(200);
//   });
// });

// describe("Testa GET /items/:id", () => {
//   it("Deve retornar status 200 e um objeto igual a o item cadastrado", async () => {
//     await supertest(app).post("/items").send(item1);

//     const items = await prisma.items.findMany({ where: item1 });
//     const result = await supertest(app).get(`/items/${items[0].id}`);

//     expect(result.status).toBe(200);
//   });
//   it("Deve retornar status 404 caso não exista um item com esse id", async () => {
//     await supertest(app).post("/items").send(item1);

//     const items = await prisma.items.findMany({ where: item1 });
//     const result = await supertest(app).get(`/items/${items[0].id + 1}`);

//     expect(result.status).toBe(404);
//   });
// });

afterAll(async () => {
  await prisma.$disconnect();
});
