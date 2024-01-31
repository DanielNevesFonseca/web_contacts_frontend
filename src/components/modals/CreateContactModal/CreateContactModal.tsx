import { SubmitHandler, useForm } from "react-hook-form";
import CloseIcon from "../../../assets/icons/close_X_icon.svg";
import { InputBox } from "../../forms/InputBox/InputBox";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CreateContactSchema,
  TCreateContactValues,
} from "./CreateContactSchema";

import styles from "./styles.module.scss"
import { useContext, useState } from "react";
import { UserContext } from "../../../providers/UserContext/UserContext";

export const CreateContactModal = () => {

  const {setIsCreateModalOpen, createContact} = useContext(UserContext)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TCreateContactValues>({
    resolver: zodResolver(CreateContactSchema),
  });

  const submit: SubmitHandler<TCreateContactValues> = async (formData) => {
    createContact(formData);
    setIsCreateModalOpen(false)
    reset()
  };

  return (
    <div className={`${styles.modalContainer}`} role="dialog">
      <div className={`${styles.modalController}`}>
        <div>
          <h4 className="title4">Criar Contato</h4>
          <button onClick={() => setIsCreateModalOpen(false)}>
            <img src={CloseIcon} alt="Ícone x de fechar" />
          </button>
        </div>
        
        <form className="form" onSubmit={handleSubmit(submit)}>
          <InputBox
            {...register("fullname")}
            label="Nome"
            type="text"
            autoComplete="off"
            placeholder="Nome Completo"
            id="createModalInputFullname"
            error={errors.fullname}
          />
          
          <InputBox
            {...register("email")}
            label="E-mail"
            type="text"
            autoComplete="off"
            placeholder="E-mail"
            id="createModalInputEmail"
            error={errors.email}
          />
          
          <InputBox
            {...register("phone_number")}
            label="Telefone"
            type="text"
            autoComplete="off"
            placeholder="Telefone"
            id="createModalInputPhoneNumber"
            error={errors.phone_number}
          />
          
          <button type="submit" className="button btn-default">
            Criar
          </button>
        
        </form>
      
      </div>
    
    </div>
  );
};
