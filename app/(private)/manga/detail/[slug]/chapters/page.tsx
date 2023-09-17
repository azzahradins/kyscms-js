'use client'

import { type CustomFlowbiteTheme, Timeline } from 'flowbite-react'

const timeline: CustomFlowbiteTheme['timeline'] = {
  item: {
    root: {
      vertical: 'mb-5 ml-6'
    }
  }
}

export default function MangaDetailChapters (): React.ReactElement {
  return (
    <Timeline theme={timeline}>
      <Timeline.Item className='mb-6'>
        <Timeline.Point/>
        <Timeline.Content>
          <Timeline.Time>
            Newest
          </Timeline.Time>
          <Timeline.Title>
            <p>Chapter 301 <span className='text-sm font-light'>Uploader: Ivan</span></p>
          </Timeline.Title>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item className='mb-6'>
        <Timeline.Point/>
        <Timeline.Content>
          <Timeline.Time>
            Mid
          </Timeline.Time>
          <Timeline.Title>
            Chapter 300
          </Timeline.Title>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item className='mb-6'>
        <Timeline.Point/>
        <Timeline.Content>
          <Timeline.Time>
            Oldest
          </Timeline.Time>
          <Timeline.Title>
            Chapter 299
          </Timeline.Title>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  )
}
