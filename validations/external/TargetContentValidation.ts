import { string, z } from "zod"

export const targetContentValidation = z.object({
  chapter: string().min(1, 'at least define chappter number')
});
