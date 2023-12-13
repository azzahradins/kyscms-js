import Link from 'next/link'
import { FaDatabase, FaRegNewspaper, FaUser } from 'react-icons/fa'

function List (): React.ReactElement {
  return (
    <div className='w-full overflow-hidden border rounded-lg px-4 py-3 lg:px-9 lg:py-6 border-gray-200 bg-card-accent dark:bg-cardD-accent hover:bg-card-Hover hover:dark:bg-cardD-Hover shadow dark:shadow-inner mb-4'>
      <Link href='manga/detail/slug'>
        <h3 className="text-lg lg:text-xl">#80149 - <span className="font-semibold text-prplprimary dark:text-prplDPrimary"> Absolute Necromancer </span> <span className="font-light text-sm"> (alt-title) </span> </h3>
      </Link>
      <div className="flex py-3 border-b gap-4 border-gray-200 dark:border-gray-500 pb-3 text-md dark:text-bodydark">
        <span className="inline-flex">
          <FaRegNewspaper className="self-center w-4 h-3"/> <p className="ml-1.5 text-prplprimary dark:text-prplDPrimary"> Manga </p>
        </span>
        <span className="inline-flex">
          <FaUser className="self-center w-4 h-3"/> <p className="ml-1.5 text-prplprimary dark:text-prplDPrimary"> Username </p>
        </span>
        <span className="hidden lg:inline-flex">
          <FaDatabase className="self-center w-4 h-3"/> <p className="ml-1.5 text-prplprimary dark:text-prplDPrimary"> Wordpress/Drive </p>
        </span>
      </div>
      <div className="pt-3 text-sm text-li text-prplprimary dark:text-prplDPrimary">
        Updated 2 months ago
      </div>
    </div>
  )
}

export default List
