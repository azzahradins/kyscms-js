import { Table } from "flowbite-react"
import { Badge } from "flowbite-react"
import StatusLogic  from "./Logic/StatusLogic"

export default function BodyTable ({ Body, Index }) {
    return <>
        {Body.map((ex,index) => {
            return (
                <Table.Row>
                    <Table.Cell>{index+1}</Table.Cell>
                    <Table.Cell>{ex.Role}</Table.Cell>
                    <Table.Cell>{ex.Name}</Table.Cell>
                    <Table.Cell>{ex.Join}</Table.Cell>
                    <Table.Cell>{ex.Online}</Table.Cell>
                    <Table.Cell><StatusLogic statusEmail={ex.Email}></StatusLogic></Table.Cell>
                    <Table.Cell><StatusLogic statusEmail={ex.Status}></StatusLogic></Table.Cell>
                </Table.Row>
            )}
        )} 
      </>
}