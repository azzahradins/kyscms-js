import { Button } from '@/components/Forms'

interface IEmailVerification {
  email: string
  fullname: string
}

export default function EmailVerification ({ email, fullname }: IEmailVerification): JSX.Element {
  return (<div className='flex flex-col gap-5 spacing text-center'>
    <div>
      <h2>
        Email Verification
      </h2>
    </div>
    <p> Hello {fullname}, before proceed to our system please verify your registered email at: </p>
    <p className='text-success'> {email} </p>
    <div>
      <label>
        Didn&apos;t receive your email yet?
      </label>
      <div className='mt-2'>
        <Button
          text='Resend Email'
          type='button'
          size='sm'
        />
      </div>
    </div>
  </div>)
}
