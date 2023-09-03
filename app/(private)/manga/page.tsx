'use client'

// import Tabs from '@/components/Page/Tabs'
import { type CustomFlowbiteTheme, Tabs } from 'flowbite-react'
import { FaGlobe } from 'react-icons/fa'
import MangaListData from './MangaListData'

const customTheme: CustomFlowbiteTheme['tab'] = {
  tabpanel: 'wrapper',
  tablist: {
    base: 'flex text-center px-4.5',
    tabitem: {
      base: 'flex items-center justify-center p-4 rounded-t-lg font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500',
      styles: {
        default: {
          active: {
            on: 'bg-gray text-cyan-600 dark:bg-gray-800 dark:text-cyan-500'
          }
        }
      }
    }
  }
}

export default function MangaList (): React.ReactElement {
  return (
    <main>
      <h2 className='wrapper text-dark-1 dark:text-bodydark2 hidden lg:block'>Manga Database</h2>
      <Tabs.Group
        theme={customTheme}
        aria-label=" Tabs"
        style="underline">
        <Tabs.Item
          active
          icon={FaGlobe}
          title="Published">
            <MangaListData />
        </Tabs.Item>
      </Tabs.Group>

      {/* <TabsComponent>
        <Tabs.Item
          key={'onGoing'}
          title='On Going'
          icon={<FaWalking/>}>
            asdhfksfd
        </Tabs.Item>
        <Tabs.Item
          key={'Published'}
          title='Published'
          icon={<FaGlobe/>}>
            <p>published de</p>
        </Tabs.Item>
      </Tabs> */}
    </main>
  )
}
