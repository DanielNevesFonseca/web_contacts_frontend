import { useContext } from "react";
import CloseIcon from "../../../assets/icons/close_X_icon.svg";
import styles from "./styles.module.scss";
import { UserContext } from "../../../providers/UserContext/UserContext";

export const DeleteContactModal = () => {
  const { setRemoveContactInfo, removeContactInfo, removeContact } =
    useContext(UserContext);

  return (
    <div className={`${styles.modalContainer}`} role="dialog">
      <div className={`${styles.modalController}`}>
        <div>
          <h5 className="title5">
            Realmente deseja remover o contato: {removeContactInfo?.fullname}?
          </h5>

          <button
            onClick={() => {
              setRemoveContactInfo(null);
            }}
          >
            <img src={CloseIcon} alt="Ícone x de fechar" />
          </button>
        </div>
        <button
          onClick={() =>
            removeContact(removeContactInfo?.id!).then(() =>
              setRemoveContactInfo(null)
            )
          }
          className="button"
        >
          Remover
        </button>
      </div>
    </div>
  );
};
