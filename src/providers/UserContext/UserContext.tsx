import { createContext, useState } from "react";
import { IUserContext, IUserProviderProps } from "./@types";
import { webContactsLocalAPI } from "../../services/webcontactLocalAPI";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { TLoginFormValues } from "../../components/forms/LoginForm/LoginSchema";
import { TRegisterFormValues } from "../../components/forms/RegisterForm/RegisterFormSchema";
import { IContactObj, IUserObj } from "../../interfaces/user.interfaces";
import { TCreateContactValues } from "../../components/modals/CreateContactModal/CreateContactSchema";
import { TUpdateContactValues } from "../../components/modals/UpdateContactModal/UpdateContactSchema";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [searchUser, setSearchUser] = useState("");

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [removeContactInfo, setRemoveContactInfo] =
    useState<IContactObj | null>(null);
  const [editContactInfo, setEditContactInfo] = useState<IContactObj | null>(
    null
  );

  const [userData, setUserData] = useState<IUserObj | null>(null);
  const [userContacts, setUserContacts] = useState<IContactObj[]>([]);

  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem("@WEB-CONTACTS:TOKEN");
    sessionStorage.removeItem("@WEB-CONTACTS:USER-ID");
    toast.warn("Saindo da sessão...");

    setTimeout(() => {
      navigate("/");
    }, 1200);
  };

  const login = async (formData: TLoginFormValues) => {
    try {
      const { data } = await webContactsLocalAPI.post("/login", formData);
      sessionStorage.setItem("@WEB-CONTACTS:TOKEN", JSON.stringify(data.token));
      sessionStorage.setItem(
        "@WEB-CONTACTS:USER-ID",
        JSON.stringify(data.userId)
      );

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
      await webContactsLocalAPI.post("/users", formData);

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
            Authorization: `Bearer ${JSON.parse(recoverToken!)}`,
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
            Authorization: `Bearer ${JSON.parse(recoverToken!)}`,
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

  const removeContact = async (contactId: string) => {
    const recoverUserId = sessionStorage.getItem("@WEB-CONTACTS:USER-ID");
    const recoverToken = sessionStorage.getItem("@WEB-CONTACTS:TOKEN");

    try {
      await webContactsLocalAPI.delete(
        `/users/${recoverUserId}/contacts/${JSON.parse(contactId!)}`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(recoverToken!)}`,
          },
        }
      );

      const newList = userContacts.filter(
        (contact) => contact.id != parseInt(contactId)
      );
      setUserContacts(newList);

      toast.success(`Contato de ${removeContactInfo?.fullname!} remvovido!`);
    } catch (error) {
      toast.error("Não foi possível deletar o contato!");
    }
  };

  const updateContact = async (formData: TUpdateContactValues) => {
    const recoverUserId = sessionStorage.getItem("@WEB-CONTACTS:USER-ID");
    const recoverToken = sessionStorage.getItem("@WEB-CONTACTS:TOKEN");

    try {
      const { data } = await webContactsLocalAPI.patch(
        `/users/${recoverUserId}/contacts/${editContactInfo?.id!}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(recoverToken!)}`,
          },
        }
      );
      const newList = [...userContacts, data];
      setUserContacts(newList);
      toast.success(`Contato de ${data.fullname} editado!`);
    } catch (error) {
      toast.error("Não foi possível editar o contato!");
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
        createContact,
        removeContactInfo,
        setRemoveContactInfo,
        removeContact,
        editContactInfo,
        setEditContactInfo,
        updateContact,
        setSearchUser,
        searchUser,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
