import { SubmitHandler, useForm } from "react-hook-form";
import { TLoginFormValues, LoginFormSchema } from "./LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputBox } from "../InputBox/InputBox";
import { InputPasswordBox } from "../InputPasswordBox/InputPasswordBox";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext/UserContext";

export const LoginForm = () => {
  const { login } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginFormValues>({
    resolver: zodResolver(LoginFormSchema),
  });

  const submit: SubmitHandler<TLoginFormValues> = async (formData) => {
    login(formData);
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

      <button className="button btn-default" type="submit">
        Entrar
      </button>
    </form>
  );
};
