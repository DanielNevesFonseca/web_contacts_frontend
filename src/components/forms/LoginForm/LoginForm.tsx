import { SubmitHandler, useForm } from "react-hook-form";
import { TLoginFormValues, LoginFormSchema } from "./LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputBox } from "../InputBox/InputBox";
import { InputPasswordBox } from "../InputPasswordBox/InputPasswordBox";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginFormValues>({
    resolver: zodResolver(LoginFormSchema),
  });

  const submit: SubmitHandler<TLoginFormValues> = async (formData) => {
    console.log(formData);
  };

  return (
    <form className="form" onSubmit={handleSubmit(submit)}>
      <InputBox
        {...register("email")}
        type="text"
        error={errors.email}
        placeholder="E-mail"
        autoComplete="off"
        id="loginInputEmail"
        label="E-mail"
      />

      <InputPasswordBox
        {...register("password")}
        error={errors.password}
        placeholder="Senha"
        autoComplete="off"
        id="loginInputPassword"
        label="Senha"
      />

      <button className="button btn-default" type="submit">Entrar</button>
    </form>
  );
};
