import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z
    .string()
    .nonempty("Campo obrigatório!")
    .email("Digite um e-mail válido!"),
  password: z.string().nonempty("Campo obrigatório!"),
});

export type TLoginFormValues = z.infer<typeof LoginFormSchema>;