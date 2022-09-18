import { Category } from "@prisma/client";
import { prisma } from "../config/database";

export async function findCategoryByName(name: string) {
  const categories: Category[] = await prisma.category.findMany({
    where: { name },
  });

  return categories;
}

export async function findCategories() {
  const categories: Category[] = await prisma.category.findMany();

  return categories;
}
