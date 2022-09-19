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
