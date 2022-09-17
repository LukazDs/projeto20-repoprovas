import * as categoryRepository from "../repositories/categoryRepository";
import { Category } from "@prisma/client";

export async function findCategoryByName(name: string) {
  const categories: Category[] = await categoryRepository.findCategoryByName(
    name
  );

  if (!categories.length) {
    throw { code: "NotFound", message: "Categoria não encontrada!" };
  }

  return categories[0];
}
