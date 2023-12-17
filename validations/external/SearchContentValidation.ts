import { string, z } from "zod"

export const searchContentValidation = z.object({
  url: string().min(3, 'Minimal length of URL or Title is 3 characters')
});
