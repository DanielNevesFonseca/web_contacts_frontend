import { zodResolver } from "@hookform/resolvers/zod";
import {
  TUpdateContactValues,
  UpdateContactSchema,
} from "./UpdateContactSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./styles.module.scss";
import { InputBox } from "../../forms/InputBox/InputBox";
import CloseIcon from "../../../assets/icons/close_X_icon.svg";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext/UserContext";

export const UpdateContactModal = () => {
  const { setEditContactInfo, editContactInfo, updateContact } =
    useContext(UserContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TUpdateContactValues>({
    resolver: zodResolver(UpdateContactSchema),
    values: {
      email: editContactInfo?.email,
      fullname: editContactInfo?.fullname,
      phone_number: editContactInfo?.phone_number,
    },
  });

  const submit: SubmitHandler<TUpdateContactValues> = async (formData) => {
    updateContact(formData);
    reset();
    setEditContactInfo(null)
  };

  return (
    <div className={`${styles.modalContainer}`} role="dialog">
      <div className={`${styles.modalController}`}>
        <div>
          <h4 className="title4">Editar Contato</h4>
          <button
            onClick={() => {
              setEditContactInfo(null);
            }}
          >
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
            editar
          </button>
        </form>
      </div>
    </div>
  );
};
