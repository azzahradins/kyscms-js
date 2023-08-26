import classNames from 'classnames'
import { Sidebar as Sb } from 'flowbite-react'
import { FaHome, FaUser, FaDoorClosed, FaServer, FaBook } from 'react-icons/fa'
import { useSidebarContext } from '@/hooks/SidebarContext'

function Sidebar (): React.ReactElement {
  const { isOpenOnSmallScreens: isSidebarOpenOnSmallScreens } = useSidebarContext()
  return (
    <div>
      <Sb aria-label="Sidebar Default"
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
                href="#"
                icon={FaHome}>
                Dashboard
              </Sb.Item>
              <Sb.Collapse
                icon={FaBook}
                label="Manga">
                <Sb.Item href="#">
                  List
                </Sb.Item>
                <Sb.Item href="#">
                  Upload
                </Sb.Item>
                <Sb.Item href="#">
                  Mirror Upload
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
