import { Link } from "react-router-dom";
import Logo from "../../assets/icons/Logo.svg";
import WhiteLogo from "../../assets/icons/WhiteLogo.svg"
import styles from "./styles.module.scss";

export const Header = () => {
  const urlPath = window.location.href
  
  return (
    <>
      {urlPath !== "http://localhost:5173/dashboard" ? (

        <header className={`${styles.header}`}>
          <img src={Logo} alt="Logo da WebContacts" />
        </header>
      ) : (
        <header className={`${styles.headerDashboard}`}>
          <img src={WhiteLogo} alt="Logo da WebContacts" />
          <Link className="button btn-outline btn-sm" to={"/"}>Sair</Link>
        </header>
      )}
    </>
  );
};
