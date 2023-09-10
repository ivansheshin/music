import MButton from "../shared/MButton";
import styles from './TheHeader.module.css'

export default function TheHeader() {
  return (
      <header className={styles.header}>
        <span className={styles['logo-text']}>music</span>
        <MButton title="Home"/>
      </header>
  )
}
