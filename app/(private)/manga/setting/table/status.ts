import { ITableData } from "@/components/Page/Table";

/**
 * Array for managing table list of Status Data
 */
export const statusTableStructure: ITableData[] = [
  {
    keyField: true,
    data: 'id',
    title: 'Key',
    sortable: true,
  },
  {
    keyField: false,
    data: 'name',
    title: 'Status Name',
    sortable: true,
  },
  {
    keyField: false,
    data: 'deleted',
    title: 'Status',
    sortable: false,
  },
]