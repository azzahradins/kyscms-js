
interface Props {
  type: 'submit' | 'button' | 'reset'
  text: string
  onClick?: (e: any) => void
  variant?: 'primary' | 'secondary' | 'disabled'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

export const Button = ({
  type,
  text,
  onClick = () => {},
  variant = 'primary',
  size = 'md'
}: Props): React.FunctionComponentElement<Props> => {
  return (
    <button
      className={`btn-${variant} btn-${size}`}
      onClick={onClick}
      type={type}>{text}</button>
  )
}
