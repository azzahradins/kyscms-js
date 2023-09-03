import { Table as Tb } from 'flowbite-react'
function Table (): React.ReactElement {
  return (
    <Tb>
      <Tb.Head>
        <Tb.HeadCell>
          ID
        </Tb.HeadCell>
        <Tb.HeadCell>
          Cover
        </Tb.HeadCell>
        <Tb.HeadCell>
          Title
        </Tb.HeadCell>
        <Tb.HeadCell>
          Category
        </Tb.HeadCell>
        <Tb.HeadCell>
          Last Chapter
        </Tb.HeadCell>
        <Tb.HeadCell>
          Release Year
        </Tb.HeadCell>
        <Tb.HeadCell>
          Action
        </Tb.HeadCell>
      </Tb.Head>
    </Tb>
  )
}

export default Table
