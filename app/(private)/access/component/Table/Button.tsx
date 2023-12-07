import { Button } from 'flowbite-react'

interface Properties {
  ButtonType: string
  Status?: string
}

export const SetButton = ({
  ButtonType,
  Status
}: Properties): React.ReactElement<Properties> => {
  if (ButtonType === 'User' && Status === 'YES') {
    return (
<div className='flex flex-row gap-x-2'>
    <Button color="gray"> Detail </Button>
    <Button color="failure">Suspend</Button>
  </div>
    )
  } else if (ButtonType === 'User' && Status === 'NO') {
    return (
    <div className='flex flex-row gap-x-2'>
    <Button color="gray"> Detail </Button>
    <Button color="success">Lift Suspend</Button>
  </div>
    )
  } else if (ButtonType === 'Admin') {
    return (
  <div className='flex flex-row gap-x-2'>
  <Button color="gray"> Detail </Button>
  <Button color="failure"> Revoke Access </Button>
</div>
    )
  } else {
    return (
  <div className='flex flex-row gap-x-2'>
    <Button color="gray"> Detail </Button>
  </div>
    )
  }
}
