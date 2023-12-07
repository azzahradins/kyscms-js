import { Table } from 'flowbite-react'

interface Properties {
  Data: string[]
}

export const TableHeads = (Prop: Properties): React.ReactElement => {
  return <>
  <Table.Head>
  {Prop.Data.map((ex) => {
    return (
  <Table.HeadCell key={ex} >{ex}</Table.HeadCell>
    )
  })}
  </Table.Head>
  </>
}
