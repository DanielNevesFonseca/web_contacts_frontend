import { Link } from "react-router-dom";
import { TemplatePage } from "../../components/TemplatePage/TemplatePage";
import { LoginForm } from "../../components/forms/LoginForm/LoginForm";

export const LoginPage = () => {
  return (
    <TemplatePage>
      <section>
        <h2>Entrar</h2>
        <p>Faça login e cadastre seus contatos.</p>
      </section>

      <LoginForm />
      
      <div>
        <span>
          Ainda não tem uma conta? <Link to="/register">Cadastre-se</Link>
        </span>
      </div>
    </TemplatePage>
  );
};
