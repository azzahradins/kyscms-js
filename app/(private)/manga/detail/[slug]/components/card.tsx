import Card from '@/components/Page/Card'
import { LoremIpsum } from '@/example-data/strings'
import { type ReactElement } from 'react'

export const CardDetail = (): ReactElement => {
  return <Card className='w-full lg:max-w-70'>
    <Card.RenderImage
      src='https://wp.verover.my.id/wp-content/uploads/contents/a-gate-opened-on-my-first-day-as-a-politician/_cover.jpg'
      alt='stay away from my image'/>
    <Card.Header>
      #Content Title
    </Card.Header>
    <Card.Body>
      <div className='flex flex-col gap-2'>
        <span className='font-light'>Content Type</span>
        <p className='line-clamp-4'><span className='text-green-200 font-semibold'>Description</span>: {LoremIpsum}</p>
        <div>
          <p><span className='text-indigo-300 font-semibold'>Genre</span>: Genre List, Genre List, Genre List, Genre List, Genre List</p>
        </div>
        <div className='grid grid-cols-2'>
          <div>
            <p className='text-blue-300 font-semibold'>Artist</p>
            <ul>
              <li>Artist 2</li>
              <li>Artist 3</li>
            </ul>
          </div>
          <div>
            <p className='text-blue-300 font-semibold'>Publisher</p>
            <ul>
              <li>Artist 2</li>
            </ul>
          </div>
        </div>
      </div>
    </Card.Body>
  </Card>
}
