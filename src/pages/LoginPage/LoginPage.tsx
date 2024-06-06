import { Link } from "react-router-dom";
import { TemplatePage } from "../../components/TemplatePage/TemplatePage";
import { LoginForm } from "../../components/forms/LoginForm/LoginForm";
import styles from "./styles.module.scss";

export const LoginPage = () => {
  return (
    <TemplatePage>
      <section className={`${styles.mainSection}`}>
        <div>
          <div className={`${styles.textBox}`}>
            <h2 className={`title4`}>Entrar</h2>
            <p className="text-normal">Faça login e cadastre seus contatos.</p>
          </div>

          <LoginForm />

          <div className={`${styles.registerText}`}>
            <span className="text-sm-normal">
              Ainda não tem uma conta? <Link to="/register">Cadastre-se</Link>
            </span>
          </div>
        </div>
      </section>
    </TemplatePage>
  );
};
