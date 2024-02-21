import classNames from 'classnames'
import { type CustomFlowbiteTheme, Sidebar as Sb } from 'flowbite-react'
import { FaHome, FaUser, FaDoorClosed, FaServer, FaBook } from 'react-icons/fa'
import { useSidebarContext } from '@/hooks/SidebarContext'
import { usePathname } from 'next/navigation'
import DarkModeSwitcher from '../Utilities/DarkModeSwitcher'

const customSideBar: CustomFlowbiteTheme['sidebar'] = {
  root: {
    inner: 'h-full overflow-y-auto overflow-x-hidden bg-light-1 py-4 px-3 dark:bg-gray-800 border-r border-light-2 dark:border-dark-2 justify-between flex flex-col'
  },
  item: {
    base: "flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-red-100 dark:text-white dark:hover:bg-gray-700",
    active: "bg-gray-100 dark:bg-red-700",
  }
}

function Sidebar (): React.ReactElement {
  const { isOpenOnSmallScreens: isSidebarOpenOnSmallScreens } = useSidebarContext()
  const router = usePathname().split('/')

  return (
    <div className='h-full'>
      <Sb aria-label="Sidebar Default"
          theme={customSideBar}
          className={classNames(
            'fixed overflow-auto top-0 h-screen z-[999] lg:sticky lg:!block',
            'transition-all duration-300 h-screen fixed',
            {
              '-left-80': !isSidebarOpenOnSmallScreens,
              'left-0': isSidebarOpenOnSmallScreens
            }
          )}>
          <Sb.Items>
            <Sb.ItemGroup>
              <Sb.Item
                href="/dashboard"
                active={router[1] === 'dashboard'}
                icon={FaHome}>
                Dashboard
              </Sb.Item>
              <Sb.Collapse
                icon={FaBook}
                label="Content"
                open={router[1] === 'manga'}>
                <Sb.Item
                  active={(router[1] === 'manga' && router.length <= 2) && true }
                  href="/manga">                    
                  Database
                </Sb.Item>
                <Sb.Item 
                  active={router[2] === 'quickupload' ? true : undefined}
                  href="/manga/quickupload">
                  Chapter Upload
                </Sb.Item>
                <Sb.Item 
                  active={router[2] === 'external' ? true : undefined}
                  href="/manga/external">
                  Mirror Source
                </Sb.Item>
                <Sb.Item 
                  active={router[2] === 'setting' ? true : undefined}
                  href="/manga/setting">
                  Setting Content Data
                </Sb.Item>
              </Sb.Collapse>
              <Sb.Item
                href="#"
                icon={FaServer}>
                Storage Server
              </Sb.Item>
              <Sb.Item
                href="#"
                icon={FaUser}>
                User Management
              </Sb.Item>
              <Sb.Item
                href="google.com"
                icon={FaDoorClosed}>
                Logout
              </Sb.Item>
            </Sb.ItemGroup>
          </Sb.Items>
          <div className='self-end'>
            <DarkModeSwitcher/>
          </div>
      </Sb>
      <div id="backdropSidebar"
        className={classNames(
          'overflow-auto top-0 fixed w-screen h-screen z-[99] bg-gray-900',
          'transition-all duration-300 h-screen fixed',
          {
            hidden: !isSidebarOpenOnSmallScreens,
            'bg-opacity-0': !isSidebarOpenOnSmallScreens,
            'bg-opacity-70': isSidebarOpenOnSmallScreens
          }
        )}/>
    </div>
  )
}

export default Sidebar
