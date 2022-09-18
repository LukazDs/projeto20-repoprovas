import joi from "joi";
import { ITestReqBody } from "../utils/sqlTestUtils";

const testSchema = joi.object<ITestReqBody>({
  name: joi.string().required(),
  pdfUrl: joi.string().uri().required(),
  disciplineId: joi.number().required(),
  teacherId: joi.number().required(),
  categoryId: joi.number().required(),
});

export { testSchema };
