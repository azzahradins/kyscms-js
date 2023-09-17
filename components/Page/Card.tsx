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
    <div className={`w-full bg-light-3 border border-gray-200 dark:border-none rounded-lg shadow dark:bg-dark-2 dark:border-gray-700 ${className}`}>
      { children }
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
      {actionButton}
      <div className='absolute bg-gradient-to-t from-light-3 dark:from-dark-2 to-transparent min-w-full min-h-full'></div>
      <motion.button
        className='absolute opacity-90 bg-dark-2 rounded-l-lg px-3 py-1 top-2 -right-28 overflow-hidden inline-flex justify-center text-sm gap-2'
        whileHover={{
          right: 0,
          opacity: 100,
          transition: { duration: 0.6 }
        }}>
        <FaPencilAlt className='self-center'/> Edit Information
      </motion.button>
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
    <div className="mb-2 flex px-6 pt-6 items-center justify-between">
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
