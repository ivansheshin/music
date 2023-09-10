type props = {
  title?: string;
}

export default function MButton({title}: props) {
  return (
      <button type="button" title={title}>
        {title}
      </button>
  )
}
