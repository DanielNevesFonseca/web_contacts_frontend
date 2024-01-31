import { ContactsList } from "../../components/ContactsList/ContactsList";
import { TemplatePage } from "../../components/TemplatePage/TemplatePage";
import styles from "./styles.module.scss";
export const DashboardPage = () => {
  return (
    <TemplatePage>
      <section className={`${styles.mainSection}`}>
        <div className={`${styles.infoUser}`}>
          <h5 className="title5">Seja Bem Vindo ao WebContacts NomeDoUser!</h5>
        </div>

        <div className={`${styles.contactSection}`}>
          <div className={`${styles.contactHeader}`}>
            <h5 className="title5">Seus Contatos</h5>
            <input
              className="input"
              type="text"
              placeholder="Pesquise seu contato por nome"
            />
            <button className="button btn-outline btn-sm">+ Criar</button>
          </div>
          
          {/* // componente de list de contatos */}
          <ContactsList />
        
        </div>
      </section>
    </TemplatePage>
  );
};
