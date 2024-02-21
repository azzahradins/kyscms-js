import { ITableData } from "@/components/Page/Table";

/**
 * Array for managing table list of Category Data
 */
export const categoryTableStructure: ITableData[] = [
  {
    keyField: true,
    data: 'id',
    title: 'Key',
    sortable: true,
  },
  {
    keyField: false,
    data: 'name',
    title: 'Category Name',
    sortable: true,
  },
  {
    keyField: false,
    data: 'flagIco',
    title: 'Flag Icon',
    sortable: false,
  },
  {
    keyField: false,
    data: 'deleted',
    title: 'Status',
    sortable: false,
  },
]