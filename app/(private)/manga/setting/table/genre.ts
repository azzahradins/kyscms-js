import { ITableData } from "@/components/Page/Table";

/**
 * Array for managing table list of Genre Data
 */
export const genreTableStructure: ITableData[] = [
  {
    keyField: true,
    data: 'id',
    title: 'Key',
    sortable: true,
  },
  {
    keyField: false,
    data: 'name',
    title: 'Genre Name',
    sortable: true,
  },
  {
    keyField: false,
    data: 'deleted',
    title: 'Status',
    sortable: false,
  },
]