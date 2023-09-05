interface ITitle {
  value: string
  className?: string
}

export const Title: React.FC<ITitle> = ({
  value,
  className
}: ITitle) => {
  return (
    <h2 className={`${className ?? ''} hidden lg:block mb-2`}>
      {value}
    </h2>
  )
}
