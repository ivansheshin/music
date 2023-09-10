import styles from './NewsCard.module.css';

type props = {
  data: {
    title?: string;
  }
}

export default function NewsCard({data}: props) {
  return (
      <article className={styles.card}>
        <h2>{data.title}</h2>
      </article>
  )
}
