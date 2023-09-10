interface IProps {
  title?: string;
}

export default function MButton({title}: IProps) {
  return (
      <button type="button">
        {title}
      </button>
  )
}
