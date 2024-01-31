import { useContext } from "react";
import { ContactsCard } from "./ContactsCard/ContactsCard";
import styles from "./styles.module.scss";
import { UserContext } from "../../providers/UserContext/UserContext";

export const ContactsList = () => {
  const { userContacts } = useContext(UserContext);

  return (
    <>
      {userContacts?.length == 0 || !userContacts ? (
        <div className={`${styles.contactsList} ${styles.emptyMessage}`}>
          <h5 className="title5">
            Você ainda não possui nenhum contato cadastrado!
          </h5>
        </div>
      ) : (
        <ul className={`${styles.contactsList}`}>
          {userContacts?.map((contact) => (
            <ContactsCard key={contact.id} contactData={contact} />
          ))}
        </ul>
      )}
    </>
  );
};
