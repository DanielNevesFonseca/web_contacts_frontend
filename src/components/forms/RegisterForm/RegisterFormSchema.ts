import { z } from "zod";

export const RegisterFormSchema = z
  .object({
    fullname: z
      .string()
      .nonempty("Insira um nome de usuário!")
      .min(3, "Insira um nome com mais de 3 caracteres!")
      .max(150, "Insira um nome com menos de 150 caracteres!"),
    email: z
      .string()
      .nonempty("Insira um email!")
      .email("Insira um email válido!")
      .max(255, "Insira um nome com menos de 255 caracteres!"),
    phone_number: z
      .string({invalid_type_error: "Insira apenas números!"})
      .min(11, "Insira um número de telefone com 11 dígitos.")
      .max(11, "Insira um número de telefone com 11 dígitos."),
    password: z
      .string()
      .nonempty("Insira um senha!")
      .min(8, "É necessário que a senha contenha pelo menos oito caracteres!")
      .max(255, "Insira um nome com menos de 255 caracteres!")
      .regex(
        /(?=.*?[A-Z])/,
        "É necessário que a senha contenha pelo menos uma letra maiúscula!"
      )
      .regex(
        /(?=.*?[a-z])/,
        "É necessário que a senha contenha pelo menos uma letra minúscula!"
      )
      .regex(
        /(?=.*?[0-9])/,
        "É necessário que a senha contenha pelo menos um número!"
      )
      .regex(
        /(?=.*?[\W])/,
        "É necessário que a senha contenha pelo menos um símbolo especial!"
      ),
    confirm_password: z.string().nonempty("Confirme a sua senha!"),
  })
  .refine(({ password, confirm_password }) => password === confirm_password, {
    message: "As senhas não coincidem!",
    path: ["confirm_password"],
  });

export type TRegisterFormValues = z.infer<typeof RegisterFormSchema>;
