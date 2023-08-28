import { useSidebarContext } from '@/hooks/SidebarContext'
import { Navbar as Nv } from 'flowbite-react'
import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar (): React.ReactElement {
  const { isOpenOnSmallScreens, isPageWithSidebar, setOpenOnSmallScreens } = useSidebarContext()

  return <header className="sticky top-0 lg:hidden">
  <Nv fluid rounded className='bg-light-1'>
    {isPageWithSidebar && (
      <button
        aria-controls="sidebar"
        aria-expanded="true"
        className="mr-2 cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:ring-gray-700 lg:hidden"
        onClick={() => { setOpenOnSmallScreens(!isOpenOnSmallScreens) }}
      >
        {isOpenOnSmallScreens ? (<FaTimes/>) : (<FaBars/>)}
      </button>
    )}
    #Page Name#
  </Nv>
  </header>
}

export default Navbar
