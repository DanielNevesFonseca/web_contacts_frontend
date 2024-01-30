import styles from "./styles.module.scss"

export const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <p className="text-normal">&copy; 2024 WebContacts</p>
    </footer>
  )
}