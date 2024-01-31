import styles from "./styles.module.scss";
import TrashIcon from "../../../assets/icons/delete_trashcan_icon.svg";
import PencilIcon from "../../../assets/icons/edit_pencil_icon.svg";
import { IContactObj } from "../../../interfaces/user.interfaces";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext/UserContext";

interface IContactCardProps {
  contactData: IContactObj | null;
}

export const ContactsCard = ({ contactData }: IContactCardProps) => {
  const { setRemoveContactInfo } = useContext(UserContext);

  return (
    <li className={`${styles.contactCard}`}>
      <div>
        <h5 className="title5">{contactData?.fullname}</h5>
        <p>{contactData?.email}</p>
        <p>{contactData?.phone_number}</p>
      </div>

      <div>
        <button
          onClick={() => {
            setRemoveContactInfo(contactData);
            console.log(contactData);
          }}
        >
          <img src={TrashIcon} alt="Ícone de lixeira" title="Excluir" />
        </button>
        <button>
          <img src={PencilIcon} alt="Ícone de lápis" title="Editar" />
        </button>
      </div>
    </li>
  );
};
