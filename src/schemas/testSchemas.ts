import joi from "joi";
import { ITestReqBody } from "../utils/sqlTestUtils";

const testSchema = joi.object<ITestReqBody>({
  name: joi.string().required(),
  pdfUrl: joi.string().uri().required(),
  displine: joi.string().required(),
  teacher: joi.string().required(),
  category: joi.string().required(),
});

export { testSchema };
