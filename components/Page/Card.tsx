interface Props {
  children: React.ReactNode
  title?: string
  className?: string
}

function Card ({
  children,
  title,
  className = ''
}: Props): React.ReactElement {
  return (
    <div className={`${className} w-full p-6 bg-light-3 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}>
      { children }
    </div>
  )
}

Card.Header = function CardHeader ({ children, ...props }: Props): React.ReactElement {
  let component = children
  if (typeof children === 'string') {
    component = (
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      { children }
    </h5>)
  }
  return (
    <div className="mb-2 flex items-center justify-between">
      { component }
    </div>
  )
}

Card.Body = function CardBody ({ children, ...props }: Props): React.ReactElement {
  return (
    <div className="flow-root font-normal text-gray-700 dark:text-gray-400">
      { children }
    </div>
  )
}

export default Card
