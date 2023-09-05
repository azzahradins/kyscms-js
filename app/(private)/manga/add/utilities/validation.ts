import { z } from 'zod'

const addContentValidation = z.object({
  title: z.string().min(1, { message: 'Email is required' }),
  alt: z.string().optional()
})
