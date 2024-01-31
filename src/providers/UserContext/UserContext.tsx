import { createContext, useState } from "react";
import { IUserContext, IUserProviderProps } from "./@types";
import { webContactsLocalAPI } from "../../services/webcontactLocalAPI";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { TLoginFormValues } from "../../components/forms/LoginForm/LoginSchema";
import { TRegisterFormValues } from "../../components/forms/RegisterForm/RegisterFormSchema";
import { IContactObj, IUserObj } from "../../interfaces/user.interfaces";
import { TCreateContactValues } from "../../components/modals/CreateContactModal/CreateContactSchema";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const [userData, setUserData] = useState<IUserObj | null>(null);
  const [userContacts, setUserContacts] = useState<IContactObj[]>([]);

  const navigate = useNavigate();

  const login = async (formData: TLoginFormValues) => {
    try {
      const { data } = await webContactsLocalAPI.post("/login", formData);
      sessionStorage.setItem("@WEB-CONTACTS:TOKEN", data.token);
      sessionStorage.setItem("@WEB-CONTACTS:USER-ID", data.userId);

      toast.success("Login bem sucedido!");

      setTimeout(() => {
        navigate("/dashboard");
      }, 1200);
    } catch (error) {
      toast.error("Email e/ou senha incorretos!");
    }
  };

  const registerUser = async (formData: TRegisterFormValues) => {
    try {
      const { data } = await webContactsLocalAPI.post("/users", formData);
      console.log(data);

      toast.success("Cadastro bem sucedido!");

      setTimeout(() => {
        navigate("/");
      }, 1200);
    } catch (error) {
      toast.error("Email e/ou senha incorretos!");
    }
  };

  const getUserData = async () => {
    const recoverUserId = sessionStorage.getItem("@WEB-CONTACTS:USER-ID");
    const recoverToken = sessionStorage.getItem("@WEB-CONTACTS:TOKEN");

    try {
      const { data } = await webContactsLocalAPI.get(
        `/users/${recoverUserId}`,
        {
          headers: {
            Authorization: `Bearer ${recoverToken}`,
          },
        }
      );
      setUserData(data);
      setUserContacts(data.contacts);
    } catch (error) {
      toast.error("Não consegui pegar os dados do usuário!");
    }
  };

  const createContact = async (formData: TCreateContactValues) => {
    const recoverUserId = sessionStorage.getItem("@WEB-CONTACTS:USER-ID");
    const recoverToken = sessionStorage.getItem("@WEB-CONTACTS:TOKEN");

    try {
      const { data } = await webContactsLocalAPI.post(
        `/users/${recoverUserId}/contacts`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${recoverToken}`,
          },
        }
      );
      const newList = [...userContacts, data];
      setUserContacts(newList);
      toast.success(`Contato de ${data.fullname} cadastrado!`);
    } catch (error) {
      toast.error("Não foi possível cadastrar o contato!");
    }
  };

  return (
    <UserContext.Provider
      value={{
        login,
        registerUser,
        getUserData,
        userData,
        userContacts,
        setUserContacts,
        isCreateModalOpen,
        setIsCreateModalOpen,
        createContact
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
