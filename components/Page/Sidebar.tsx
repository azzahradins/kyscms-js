import classNames from 'classnames'
import { type CustomFlowbiteTheme, Sidebar as Sb } from 'flowbite-react'
import { FaHome, FaUser, FaDoorClosed, FaServer, FaBook } from 'react-icons/fa'
import { useSidebarContext } from '@/hooks/SidebarContext'
import { usePathname } from 'next/navigation'
import DarkModeSwitcher from '../Utilities/DarkModeSwitcher'

const customSideBar: CustomFlowbiteTheme['sidebar'] = {
  root: {
    inner: 'h-full overflow-y-auto text-prplDBG dark:text-prplBG overflow-x-hidden bg-sidebar-bg dark:bg-sidebarD-bg py-4 px-3 border-r border-sidebar-border hover:bg-sidebar-hover hover:dark:bg-cardD-Hover justify-between flex flex-col'
  },
  collapse: {
    button: 'group flex w-full items-center rounded-lg p-2 text-base font-normal text-red-900 transition duration-75 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-700',
  },
  item: {
    active: 'bg-gray-100 dark:bg-gray-700',
    base: 'mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-red-700'
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
                <Sb.Item href="#">
                  Mirror Source
                </Sb.Item>
                <Sb.Item href="#">
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
