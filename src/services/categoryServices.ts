import * as categoryRepository from "../repositories/categoryRepository";
import { Category } from "@prisma/client";

export async function findCategories() {
  const categories: Category[] = await categoryRepository.findCategories();

  return categories;
}

export async function findCategoryById(id: number) {
  const categories: Category[] = await categoryRepository.findCategoryById(id);

  await checkArrayLength(categories);

  return categories;
}

export async function findCategoryByName(name: string) {
  const categories: Category[] = await categoryRepository.findCategoryByName(
    name
  );

  await checkArrayLength(categories);

  return categories[0];
}

async function checkArrayLength(categories: Category[]) {
  if (!categories.length) {
    throw { code: "NotFound", message: "Categoria não encontrada!" };
  }
}
