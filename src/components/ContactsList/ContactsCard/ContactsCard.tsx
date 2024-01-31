import styles from "./styles.module.scss";
import TrashIcon from "../../../assets/icons/delete_trashcan_icon.svg";
import PencilIcon from "../../../assets/icons/edit_pencil_icon.svg"

export const ContactsCard = () => {
  return (
    <li className={`${styles.contactCard}`}>
      <div>
        <h5 className="title5">Daniel Neves</h5>
        <p>daniel@mail.com</p>
        <p>32999691769</p>
      </div>

      <div>
        <button>
          <img src={TrashIcon} alt="Ícone de lixeira" title="Excluir"/>
        </button>
        <button>
          <img src={PencilIcon} alt="Ícone de lápis" title="Editar"/>
        </button>
      </div>
    </li>
  );
};
