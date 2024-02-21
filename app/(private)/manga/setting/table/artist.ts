import { ITableData } from "@/components/Page/Table";

/**
 * Array for managing table list of Artist Data
 */
export const artistTableStructure: ITableData[] = [
  {
    keyField: true,
    data: 'id',
    title: 'Key',
    sortable: true,
  },
  {
    keyField: false,
    data: 'potrait',
    title: 'Picture',
    sortable: false,
  },
  {
    keyField: false,
    data: 'name',
    title: 'Artist Name',
    sortable: true,
  },
  {
    keyField: false,
    data: 'description',
    title: 'Description',
    sortable: false,
  },
  {
    keyField: false,
    data: 'deleted',
    title: 'Status',
    sortable: false,
  },
]