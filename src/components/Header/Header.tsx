import Logo from "../../assets/icons/Logo.svg"
import styles from "./styles.module.scss"

export const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <img src={Logo} alt="Logo da WebContacts" />
    </header>
  )
}