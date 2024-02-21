export interface ITableData {
  keyField: boolean,
  data: string,
  title: string,
  sortable: boolean,
}

interface IProps {
  column: Array<ITableData>
}

function Table(props: IProps): React.ReactElement {
  const sort = <a href="#">
    <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
    </svg>
  </a>

  const tableHead = (col: ITableData) => col.keyField ? (
    <th scope="col" className="px-6 py-3" key={col.data}> {header(col)} </th>
  ) : <td scope="col" className="px-6 py-3" key={col.data}> {header(col)} </td>
  
  const header = (col: {title: string, sortable: boolean}) => (
    <div className="flex items-center">
      {col.title}
      {col.sortable && sort}
    </div>
  )

  return (
    <div className="shadow-md rounded-lg overflow-x-scroll md:overflow-hidden">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {props.column.map(col => tableHead(col))}
            <td scope="col" className="px-6 py-3">
              Action
            </td>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-dark-2 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              17"
            </th>
            <td className="px-6 py-4">
              Silver
            </td>
            <td className="px-6 py-4">
              Silver
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table
