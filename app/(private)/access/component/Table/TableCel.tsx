'use client';

import { Table } from 'flowbite-react'
import { SetStatus } from './SetStatus'
import { SetButton } from './Button'


interface Properties {
  Data: {
    Role: string
    Name: string
    Join: string
    Online: string
    Email: string
    Status: string
    Button?: string
  }
}

export const TableCell = (Prop: Properties): React.ReactElement => {
  return (
    <>
      {Prop.Data.map((daftar: any, index: number) => {
        return (
          <Table.Row key={index}>
            <Table.Cell>{index + 1}</Table.Cell>
            <Table.Cell>{daftar.Role}</Table.Cell>
            <Table.Cell>{daftar.Name}</Table.Cell>
            <Table.Cell>{daftar.Join}</Table.Cell>
            <Table.Cell>{daftar.Online}</Table.Cell>
            <Table.Cell>
              <SetStatus
                Data={daftar.Email}
                YES="Verified"
                YesStatus="info"
                YESClass="flex justify-center"
                NO="Unverivied"
                NoStatus="warning"
                NoClass="flex justify-center text-red-600"
              ></SetStatus>
            </Table.Cell>
            <Table.Cell>
              <SetStatus
                Data={daftar.Status}
                YES="Active"
                YesStatus="success"
                YESClass="flex justify-center"
                NO="Suspended"
                NoStatus="failure"
                NoClass="flex justify-center"
              ></SetStatus>
            </Table.Cell>
            <Table.Cell>
              <SetButton
                ButtonType={daftar.Role}
                Status={daftar.Status}
              ></SetButton>
            </Table.Cell>
          </Table.Row>
        );
      })}
    </>
  );
};
