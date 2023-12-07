import { Badge } from 'flowbite-react'
import React from 'react'

interface Properties {
  Data: string
  YES: string
  NO: string
  YesStatus: string
  YESClass: string
  NoStatus: string
  NoClass: string
}

export const SetStatus = (Prop: Properties): React.ReactElement<Properties> => {
  console.log(Prop.Data)
  return (
<>
  {Prop.Data === 'YES' ? <Badge className={Prop.YESClass} color={Prop.YesStatus}>{Prop.YES}</Badge> : <Badge className='flex justify-center' color={Prop.NoStatus}>{Prop.NO}</Badge>}
</>)
}
