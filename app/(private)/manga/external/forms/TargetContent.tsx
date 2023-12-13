import { Button, InputFieldFb as InputField, SelectInput } from "@/components/Forms";
import { useFormContext } from "react-hook-form";

{/* If link were content with chapters (ex: https://kiryuu.id/legend-of-the-northern-blade-chapter-172/) */}
export default function TargetContentExternalForm({ stepConfiguration }: any): React.ReactElement {
  const { handleSubmit } = useFormContext()

  const onSubmitData = (data: any) => {
    console.log(data)
  }

  return <>
    <h3 className='font-semibold'>Target Content Upload</h3>
    <SelectInput
      name='content'
      label="Choose content"
      options={[{ value: 'abdi', label: 'Abdi' }, { value: 'ente', label: 'Ente' }, { value: 'draft', label: 'Draft' }, { value: 'completed', label: 'Completed' }]}
    />
    <InputField
      name='chapter'
      label="Chapter No."
      placeholder='Insert chapters'/>
    <Button type='button' text='Choose' onClick={handleSubmit(onSubmitData)} className='mb-2 w-fit self-end' />
  </>
}