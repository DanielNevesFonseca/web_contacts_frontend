import { z } from "zod";

export const UpdateContactSchema = z.object({
  fullname: z
    .string()
    .nonempty("Insira um nome de usuário!")
    .min(3, "Insira um nome com mais de 3 caracteres!")
    .max(150, "Insira um nome com menos de 150 caracteres!")
    .optional(),
  email: z
    .string()
    .nonempty("Insira um email!")
    .email("Insira um email válido!")
    .max(255, "Insira um nome com menos de 255 caracteres!")
    .optional(),
  phone_number: z
    .string({ invalid_type_error: "Insira apenas números!" })
    .min(11, "Insira um número de telefone com 11 dígitos.")
    .max(11, "Insira um número de telefone com 11 dígitos.")
    .optional(),
});

export type TUpdateContactValues = z.infer<typeof UpdateContactSchema>;
