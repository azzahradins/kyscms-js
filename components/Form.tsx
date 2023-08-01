import { type ReactNode, type FC } from 'react'
import { FormProvider } from 'react-hook-form'

interface IFormProps {
  defaultValues?: any
  children?: ReactNode
  buttonLabel?: string
  onSubmit?: any
  className?: string
  methods: any
}

export const Form: FC<IFormProps> = ({
  defaultValues,
  buttonLabel = 'Submit',
  children,
  onSubmit,
  className,
  methods,
  ...rest
}) => {
  return (
    <FormProvider {...methods}>
      <form className={className} method='post' onSubmit={methods.handleSubmit(onSubmit)} {...rest}>
        {children}
      </form>
    </FormProvider>
  )
}
