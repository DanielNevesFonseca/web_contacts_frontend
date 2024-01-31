import { useContext } from "react";
import { ContactsCard } from "./ContactsCard/ContactsCard";
import styles from "./styles.module.scss";
import { UserContext } from "../../providers/UserContext/UserContext";

export const ContactsList = () => {
  const {userData} = useContext(UserContext)

  return (
    <>
      { userData?.contacts.length == 0 || !userData?.contacts ? (
        <div className={`${styles.contactsList} ${styles.emptyMessage}`}>
          <h5 className="title5">Você ainda não possui nenhum contato cadastrado!</h5>
        </div>
      ) : (
        <ul className={`${styles.contactsList}`}>
          {userData?.contacts?.map((contact) => (
            <ContactsCard key={contact.id} contactData={contact} />
          ))}
        </ul>
      )}
    </>
  );
};
