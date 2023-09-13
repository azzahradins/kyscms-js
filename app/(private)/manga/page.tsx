'use client'

// import Tabs from '@/components/Page/Tabs'
import { type CustomFlowbiteTheme, Tabs } from 'flowbite-react'
import { FaGlobe } from 'react-icons/fa'
import MangaListData from './list/MangaListData'
import { Title } from '@/components/Navigation/Title'

const customTheme: CustomFlowbiteTheme['tab'] = {
  tabpanel: 'hidden',
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
      <Title value='Content Database' className='mx-5 mt-4'/>
      <Tabs.Group
        theme={customTheme}
        aria-label=" Tabs"
        style="underline">
        <Tabs.Item
          active
          icon={FaGlobe}
          title="Published"/>
      </Tabs.Group>
      <div className='wrapper'>
        <MangaListData />
      </div>
    </main>
  )
}
