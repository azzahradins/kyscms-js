/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import type { PropsWithChildren } from 'react'
import { createContext, useContext, useEffect, useState } from 'react'

interface SidebarContextProps {
  isPageWithSidebar: boolean
  isOpenOnSmallScreens: boolean
  setOpenOnSmallScreens: (to: boolean) => void
}

const SidebarContext = createContext<SidebarContextProps>({
  isPageWithSidebar: false,
  isOpenOnSmallScreens: false,
  setOpenOnSmallScreens: () => undefined
})

export function SidebarProvider ({
  children
}: PropsWithChildren<Record<string, unknown>>): any {
  const location = isBrowser() ? window.location.pathname : '/'
  const [isOpen, setOpen] = useState(false)

  // Close Sidebar on page change on mobile
  useEffect(() => {
    if (isSmallScreen()) {
      setOpen(false)
    }
  }, [location])

  // Close Sidebar on mobile tap inside main content
  useEffect(() => {
    function handleMobileTapInsideMain (event: MouseEvent): any {
      const main = document.querySelector('#backdropSidebar')
      const isClickInsideMain = main?.contains(event.target as Node)

      if (isClickInsideMain ?? false) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleMobileTapInsideMain)
    return () => {
      document.removeEventListener('mousedown', handleMobileTapInsideMain)
    }
  }, [])

  return (
    <SidebarContext.Provider
      value={{
        isOpenOnSmallScreens: isOpen,
        isPageWithSidebar: true,
        setOpenOnSmallScreens: setOpen
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

function isBrowser (): boolean {
  return typeof window !== 'undefined'
}

function isSmallScreen (): boolean {
  return isBrowser() && window.innerWidth < 768
}

export function useSidebarContext (): SidebarContextProps {
  const context = useContext(SidebarContext)

  if (!context) {
    throw new Error(
      'useSidebarContext should be used within the SidebarContext provider!'
    )
  }

  return context
}
