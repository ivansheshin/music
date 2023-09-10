type props = {
  title?: string;
}

export default function NewsCard({title}: props) {
  return (
      <article>
        <h2>{title}</h2>
      </article>
  )
}
