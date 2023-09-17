import React from 'react'
import classNames from 'classnames'
import { type ReactNode } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface Props {
  children: React.ReactNode[]
  icon?: ReactNode
}

interface ITabItemProps {
  key: string
  title: string
  component: React.ReactElement
  href: string
}

export const Tabs = ({ children }: Props): React.ReactElement => {
  const [activeTab, setActiveTab] = React.useState(0)
  return (
    <div>
      <div className="border border-gray-200 dark:border-none dark:bg-dark-2 mb-3 p-4 flex flex-row gap-8 rounded-lg">
        {React.Children.map(children, (child: any, index) => (
          <Link
            href={child?.props.href}
            className='relative px-3 py-0.5 cursor-pointer'
            onClick={() => { setActiveTab(index) }}>
            {activeTab === index && (
              <motion.span
                layoutId="bubble"
                className="absolute w-full h-full right-0 top-0 z-10 bg-primary opacity-30"
                style={{ borderRadius: 9999, opacity: 0.3 }}
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            {child?.props.title}
          </Link>
        ))}
      </div>

      <div className=" dark:bg-dark-2 mb-3 p-4 flex flex-row gap-8 rounded-lg">
        {React.Children.map(children, (child: any, index) => {
          if (index === activeTab) {
            return child?.props.component
          }
        })}
      </div>
    </div>
  )
}

Tabs.Item = function TabItem ({ key, title, component }: ITabItemProps): React.ReactElement {
  if (key === undefined && title === undefined && component === undefined) {
    throw new Error('Must input valid key for the component')
  }
  return <></>
}

Tabs.displayName = 'Tabs Actual'

export default Tabs
