import { ContactsCard } from "./ContactsCard/ContactsCard";
import styles from "./styles.module.scss";

export const ContactsList = () => {
  const list: string[] = [
    "notEmpty",
    "notEmpty",
    "notEmpty",
    "notEmpty",
    "notEmpty",
    "notEmpty",
    "notEmpty",
    "notEmpty",
    "notEmpty",
    "notEmpty",
    "notEmpty",
    "notEmpty",
    "notEmpty",
    "notEmpty",
    "notEmpty",
    "notEmpty",
  ];

  return (
    <>
      { list.length == 0 || !list ? (
        <div className={`${styles.contactsList} ${styles.emptyMessage}`}>
          <h5 className="title5">Você ainda não possui nenhum contato cadastrado!</h5>
        </div>
      ) : (
        <ul className={`${styles.contactsList}`}>
          {list?.map((contact) => (
            <ContactsCard />
          ))}
        </ul>
      )}
    </>
  );
};
