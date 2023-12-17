import { searchContentValidation } from "./SearchContentValidation";
import { targetContentValidation } from "./TargetContentValidation";

export const getExternalResolver = (schema = searchContentValidation, step: number): any => {
  switch (step) {
    case 2:
      return schema.refine(() => targetContentValidation)
    default:
      return schema
  }
};