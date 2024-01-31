import { TLoginFormValues } from "../../components/forms/LoginForm/LoginSchema";
import { TRegisterFormValues } from "../../components/forms/RegisterForm/RegisterFormSchema";
import { TCreateContactValues } from "../../components/modals/CreateContactModal/CreateContactSchema";
import { IContactObj, IUserObj } from "../../interfaces/user.interfaces";

export interface IUserProviderProps {
  children: React.ReactNode;
}

export interface IUserContext {
  login: (formData: TLoginFormValues) => Promise<void>;
  registerUser: (formData: TRegisterFormValues) => Promise<void>;
  getUserData: () => Promise<void>;
  userData: null | IUserObj;
  isCreateModalOpen: boolean;
  setIsCreateModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  userContacts: IContactObj[] | [];
  setUserContacts: React.Dispatch<React.SetStateAction<IContactObj[] | []>>;
  createContact: (formData: TCreateContactValues) => Promise<void>;
}
