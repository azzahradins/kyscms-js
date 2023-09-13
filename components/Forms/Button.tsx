interface Props {
  type: 'submit' | 'button' | 'reset'
  text: string
  className?: string
  onClick?: (e: any) => void
  variant?: 'primary' | 'secondary' | 'disabled'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

export const Button = ({
  type,
  text,
  onClick = () => {},
  variant = 'primary',
  size = 'md',
  className = ''
}: Props): React.ReactElement<Props> => {
  return (
    <button
      className={`${className} btn-${variant} btn-${size}`}
      onClick={onClick}
      type={type}>{text}</button>
  )
}
