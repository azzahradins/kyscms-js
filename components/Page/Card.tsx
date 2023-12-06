import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaPencilAlt } from 'react-icons/fa'

interface Props {
  children: React.ReactNode
  className?: string
}

interface IRenderImage {
  src: string
  alt: string
  actionButton?: React.ReactElement
}

function Card ({
  children,
  className = ''
}: Props): React.ReactElement {
  return (
    <div className={`w-full dark:border-gray-700 border border-gray-200 dark:border-none rounded-lg shadow  ${className}`}>
      <div className='bg-light-3 dark:bg-dark-2'>
        { children }
      </div>
    </div>
  )
}

Card.RenderImage = function CardImage ({ src, alt, actionButton }: IRenderImage): React.ReactElement {
  return (
    <div className="relative h-60 lg:h-80 w-full overflow-x-hidden">
      <Image
        alt={alt}
        fill={true}
        quality={100}
        className='object-cover rounded-t-md'
        // layout="fill"
        src={src}/>
      <div className='absolute bg-gradient-to-t from-light-3 dark:from-dark-2 to-transparent min-w-full min-h-full'></div>
      {actionButton}
    </div>
  )
}

Card.Header = function CardHeader ({ children, ...props }: Props): React.ReactElement {
  let component = children
  if (typeof children === 'string') {
    component = (
    <h5 className="text-2xl font-bold tracking-tight text-secondary dark:text-white">
      { children }
    </h5>)
  }
  return (
    <div className="mb-2 flex px-6 pt-6 items-center justify-between ">
      { component }
    </div>
  )
}

Card.Body = function CardBody ({ children, ...props }: Props): React.ReactElement {
  return (
    <div className="flow-root font-normal text-gray-700 dark:text-gray-400 px-6 pb-6">
      { children }
    </div>
  )
}

export default Card
