import { useContext, useEffect } from "react";
import Logo from "../../assets/icons/Logo.svg";
import WhiteLogo from "../../assets/icons/WhiteLogo.svg";
import styles from "./styles.module.scss";
import { UserContext } from "../../providers/UserContext/UserContext";

export const Header = () => {
  const urlPath = window.location.pathname;

  useEffect(() => {
    console.log(urlPath);
    
  }, [])

  const { logout } = useContext(UserContext);

  return (
    <>
      {urlPath !== "/dashboard" ? (
        <header className={`${styles.header}`}>
          <img src={Logo} alt="Logo da WebContacts" />
        </header>
      ) : (
        <header className={`${styles.headerDashboard}`}>
          <img src={WhiteLogo} alt="Logo da WebContacts" />
          <button
            onClick={() => logout()}
            className="button btn-outline btn-sm"
          >
            Sair
          </button>
        </header>
      )}
    </>
  );
};
