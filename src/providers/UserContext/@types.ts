import { TLoginFormValues } from "../../components/forms/LoginForm/LoginSchema";
import { TRegisterFormValues } from "../../components/forms/RegisterForm/RegisterFormSchema";
import { IUserObj } from "../../interfaces/user.interfaces";

export interface IUserProviderProps {
  children: React.ReactNode;
}

export interface IUserContext {
  login: (formData: TLoginFormValues) => Promise<void>;
  registerUser: (formData: TRegisterFormValues) => Promise<void>;
  getUserData: () => Promise<void>
  userData: null | IUserObj
}
