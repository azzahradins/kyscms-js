import { type ReactElement, type ReactNode } from 'react'

interface TabProps {
  children: ReactNode
}

interface Props {
  key: string
  title: string
  children: ReactNode
  icon?: ReactNode
}

function Tabs ({ children }: TabProps): React.ReactElement {
  return (
    <div>
      <div className="border-b border-gray-200 dark:border-gray-700 my-3">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          { children }
        </ul>
      </div>
      <div>
        {/* <Tabs.Body /> */}
      </div>
    </div>
  )
}

Tabs.Item = function TabsItem ({
  key,
  title,
  icon
}: Props): React.ReactElement {
  return (
    <li className="mr-2" key={key}>
      <a href="#" aria-current="page" className="inline-flex text-lg items-center justify-center px-4 py-2.5 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
          {icon !== null ? <span className='mr-2'> {icon} </span> : ''} {title}
      </a>
    </li>
  )
}

Tabs.Body = function TabsBody ({
  children
}: TabProps): ReactElement {
  return (
    <p>lalalalae</p>
  )
}

export default Tabs
