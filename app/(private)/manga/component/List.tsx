import Link from 'next/link'
import { FaDatabase, FaRegNewspaper, FaUser } from 'react-icons/fa'

function List (): React.ReactElement {
  return (
    <div className='w-full border rounded-lg px-9 py-6 bg-gray-50 border-gray-200 dark:border-gray-600 shadow dark:shadow-inner mb-4'>
      <Link href='manga/detail/slug'>
        <h3 className="text-xl">#80149 - <span className="font-semibold text-bodydark3"> Absolute Necromancer </span> <span className="font-light text-sm"> (alt-title) </span> </h3>
      </Link>
      <div className="flex py-3 border-b gap-4 border-gray-200 dark:border-gray-500 pb-3 text-md font-semibold text-bodydark2">
        <span className="inline-flex">
          <FaRegNewspaper className="self-center w-4 h-3"/> <p className="ml-1.5"> Manga/Manhwa </p>
        </span>
        <span className="inline-flex">
          <FaUser className="self-center w-4 h-3"/> <p className="ml-1.5"> Username </p>
        </span>
        <span className="inline-flex">
          <FaDatabase className="self-center w-4 h-3"/> <p className="ml-1.5"> Wordpress/Drive </p>
        </span>
      </div>
      <div className="pt-3 text-sm">
        Updated 2 months ago
      </div>
    </div>
  )
}

export default List
