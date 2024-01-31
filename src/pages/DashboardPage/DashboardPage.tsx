import { useContext, useEffect } from "react";
import { ContactsList } from "../../components/ContactsList/ContactsList";
import { TemplatePage } from "../../components/TemplatePage/TemplatePage";
import styles from "./styles.module.scss";
import { UserContext } from "../../providers/UserContext/UserContext";
import { CreateContactModal } from "../../components/modals/CreateContactModal/CreateContactModal";
export const DashboardPage = () => {
  const { getUserData, userData, isCreateModalOpen, setIsCreateModalOpen } =
    useContext(UserContext);

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <TemplatePage>
      <section className={`${styles.mainSection}`}>
        <div className={`${styles.infoUser}`}>
          <h5 className="title5">
            Seja Bem Vindo ao WebContacts <span>{userData?.fullname}</span>
          </h5>
        </div>

        <div className={`${styles.contactSection}`}>
          <div className={`${styles.contactHeader}`}>
            <h5 className="title5">Seus Contatos</h5>
            <input
              className="input"
              type="text"
              placeholder="Pesquise seu contato por nome"
            />
            <button
              onClick={() => setIsCreateModalOpen(true)}
              className="button btn-outline btn-sm"
            >
              + Criar
            </button>
          </div>

          <ContactsList />
        </div>
      </section>

      {isCreateModalOpen ? <CreateContactModal /> : null}
    </TemplatePage>
  );
};
