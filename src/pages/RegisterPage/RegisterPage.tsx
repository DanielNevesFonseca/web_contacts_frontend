import { Link } from "react-router-dom";
import { TemplatePage } from "../../components/TemplatePage/TemplatePage";
import { RegisterForm } from "../../components/forms/RegisterForm/RegisterForm";
import styles from "./styles.module.scss";

export const RegisterPage = () => {
  return (
    <TemplatePage>
      <section className={`${styles.mainSection}`}>
        <Link className="button btn-outline btn-sm" to={"/"}>Voltar para Login</Link>

        <div className={`${styles.textBox}`}>
          <h2 className={`title4`}>Cadastrar</h2>
          <p className="text-normal">
            Se cadastre e organize todos seus contatos em um só lugar
          </p>
        </div>

        <RegisterForm />

      </section>
    </TemplatePage>
  );
};
