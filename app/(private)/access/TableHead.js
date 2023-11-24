import { Table } from "flowbite-react"

export default function HeadTable ({ Head }) {
    return <>
      <Table.Head>
        {Head.map((ex) => {
            return (
                <Table.HeadCell >{ex}</Table.HeadCell>
            )
        })}
      </Table.Head>
        

      </>
}