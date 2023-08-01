
interface Props {
  type: 'submit' | 'button' | 'reset'
  text: string
  onClick?: (e: any) => void
  variant?: 'primary' | 'secondary' | 'disabled'
}

function Button ({
  type,
  text,
  onClick = () => {},
  variant = 'primary'
}: Props): React.FunctionComponentElement<Props> {
  return (
    <button
      className={`btn-${variant}`}
      onClick={onClick}
      type={type}>{text}</button>
  )
}

export default Button
