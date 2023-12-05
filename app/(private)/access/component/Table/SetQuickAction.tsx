import { Badge } from 'flowbite-react'
import React from 'react'

export const Logic = ({ Property, YES, NO }: any): React.ReactElement => {
  return (
<>
  {Property === 'YES' ? <Badge color="success">{YES}</Badge> : <Badge color="failure">{NO}</Badge>}
</>)
}