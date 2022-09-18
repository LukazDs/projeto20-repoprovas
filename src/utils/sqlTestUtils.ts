import { Tests } from "@prisma/client";

export type ITest = Omit<Tests, "id">;

export type ITestReqBody = {
  name: string;
  pdfUrl: string;
  disciplineId: number;
  teacherId: number;
  categoryId: number;
};
