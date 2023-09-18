interface Props {
  type: 'submit' | 'button' | 'reset'
  text: string
  className?: string
  onClick?: (e: any) => void
  variant?: 'gray' | 'primary' | 'warning' | 'danger' | 'disabled'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  style?: 'pills' | ''
}

export const Button = ({
  type,
  text,
  onClick = () => {},
  variant = 'primary',
  size = 'md',
  className = '',
  style = ''
}: Props): React.ReactElement<Props> => {
  const btnSize = `btn-${size}`
  const pills = style ? 'rounded-full' : 'rounded-lg'
  return (
    <button
      className={`${pills} rounded-full btn-${variant} ${btnSize} ${className}`}
      onClick={onClick}
      type={type}>{text}</button>
  )
}
