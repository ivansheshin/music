import MButton from "../shared/MButton";
import styles from './TheHeader.module.css'

export default function TheHeader() {
  return (
      <header className={styles.header}>
        <MButton title="Home"/>
      </header>
  )
}
