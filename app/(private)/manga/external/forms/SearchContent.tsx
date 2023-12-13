import { Button, InputFieldFb as InputField } from "@/components/Forms";
import { isValidHttpUrl } from "@/config/utils";
import { useFormContext } from 'react-hook-form';
import MangaExternalForm from ".";
import ListSearchExternalForm from "./ListSearch";
import OverviewContent from "./OverviewContent";
import TargetContentExternalForm from "./TargetContent";

export default function  SearchContentExternalForm({ stepConfiguration, setStepConfiguration }: any): React.ReactElement {
  const { handleSubmit } = useFormContext()

  const onSubmitData = (data: any) => {
    if (isValidHttpUrl(data.url)) {
      // Hit endpoint needed
      // Example 1: Overview content
      setStepConfiguration({
        lastStep: 2,
        element: [<MangaExternalForm.form step={2}>
          <TargetContentExternalForm />
        </MangaExternalForm.form>]
      })
    } else {
      setStepConfiguration({
        lastStep: 2,
        element: [<MangaExternalForm.form step={2}>
          <ListSearchExternalForm />
        </MangaExternalForm.form>]
      })
    }
  }

  const onCancelData = (data: any) => {
    const element = stepConfiguration.element
    element.pop()

    setStepConfiguration({
      lastStep: 1,
      element: [null]
    })
  }

  return <>
    <h3 className='font-semibold'>Search Content</h3>
    <span> You can search content using keywords OR link to content available.</span>
    <InputField
      name='url'
      placeholder='Url / Title'
      className='mb-2' 
      disable={stepConfiguration.lastStep > 1}
      />
    <div className="inline-flex self-end gap-2">
      {stepConfiguration.lastStep === 1 ?
        <Button type='button' text='Search' onClick={handleSubmit(onSubmitData)} className='mb-2 w-fit self-end' />
        :
        <Button type='button' text='Cancel' variant="danger" onClick={onCancelData} className='mb-2 w-fit self-end' />
      }
    </div>
  </>
}