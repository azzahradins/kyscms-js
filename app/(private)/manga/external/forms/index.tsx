'use client'

import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form';
import SearchContentExternalForm from './SearchContent'
import { zodResolver } from '@hookform/resolvers/zod';
import { searchContentValidation } from '@/validations/external/SearchContentValidation';

interface Props {
  children: React.ReactNode,
  step: number
  className?: string
}

interface elementConfig {
  lastStep: number,
  element: React.ReactNode[]
}

export default function MangaExternalForm(): React.ReactElement {
  const [stepConfig, setStepConfiguration] = useState<elementConfig>({
    lastStep: 1,
    element: [null]
  })
  
  const methods = useForm({
    shouldUnregister: false,
    resolver: zodResolver(searchContentValidation)
  })

  return (
    <FormProvider {...methods}>
      <MangaExternalForm.form step={1}>
        <SearchContentExternalForm stepConfiguration={stepConfig} setStepConfiguration={setStepConfiguration} />
      </MangaExternalForm.form>
      {stepConfig.element}
    </FormProvider>
  )
}

MangaExternalForm.form = function FormWrapper({ children, className, step }: Props): React.ReactElement {
  return (
    <div className={`px-4 py-2 flex flex-col ${className} border-b border-dark-3 bottom-10 shadow-lg`}>
      <small>Step {step}</small>
      {children}
    </div>
  )
}
