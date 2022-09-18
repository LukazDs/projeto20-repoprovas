import supertest from "supertest";
import app from "../src/app";
import { prisma } from "../src/config/database";

const item1 = {
  title: "Teste2",
  url: "https://teste.com",
  description: "testando app",
  amount: 33,
};

beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE items;`;
});

describe("Testa POST /items ", () => {
  it("Deve retornar 201, se cadastrado um item no formato correto", async () => {
    const result = await supertest(app).post("/items").send(item1);
    expect(result.status).toBe(201);
  });

  it("Deve retornar 409, ao tentar cadastrar um item que exista", async () => {
    await supertest(app).post("/items").send(item1);
    const result = await supertest(app).post("/items").send(item1);
    expect(result.status).toBe(409);
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
