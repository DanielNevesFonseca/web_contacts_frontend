import { SubmitHandler, useForm } from "react-hook-form";
import { InputBox } from "../InputBox/InputBox";
import { RegisterFormSchema, TRegisterFormValues } from "./RegisterFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputPasswordBox } from "../InputPasswordBox/InputPasswordBox";
import { number } from "zod";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterFormValues>({
    resolver: zodResolver(RegisterFormSchema),
  });

  const submit: SubmitHandler<TRegisterFormValues> = async (formData) => {
    console.log(formData);
  };

  return (
    <form className="form" onSubmit={handleSubmit(submit)}>
      <InputBox
        {...register("fullname")}
        type="text"
        error={errors.fullname}
        placeholder="Seu nome"
        autoComplete="off"
        id="registerInputFullname"
        label="Nome Completo"
      />
      <InputBox
        {...register("email")}
        type="text"
        error={errors.email}
        placeholder="Seu melhor email"
        autoComplete="off"
        id="registerInputEmail"
        label="E-mail"
      />
      <InputBox
        {...register("phone_number", {})}
        type="text"
        error={errors.phone_number}
        placeholder="Ex: DDD + 98888-8888"
        autoComplete="off"
        id="registerInputPhone"
        label="Telefone"
      />
      <InputPasswordBox
        {...register("password")}
        error={errors.password}
        placeholder="Senha"
        autoComplete="off"
        id="registerInputPassword"
        label="Senha"
      />
      <InputPasswordBox
        {...register("confirm_password")}
        error={errors.confirm_password}
        placeholder="Confirme sua senha"
        autoComplete="off"
        id="registerInputConfirmPassword"
        label="Confirmar Senha"
      />

      <button type="submit" className="button btn-default">
        Cadastrar
      </button>
    </form>
  );
};
