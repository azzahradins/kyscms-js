import { Button } from "@/components/Forms";
import { LoremIpsum } from "@/example-data/strings";
import { useFormContext } from "react-hook-form";

interface IDetailChapter {
  header: string,
  content: string
}

/* If link were content only no chapters (ex: https://kiryuu.id/manga/legend-of-the-northern-blade/)*/
export default function OverviewContent(): React.ReactElement {
  const { handleSubmit } = useFormContext()

  const onSubmitData = () => {

  }

  return <div>
    <h3 className='font-semibold'>Content Information</h3>
    <DetailChapter
      header="Title"
      content='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' />
    <hr className="my-2 border-primaryDk opacity-50"/>
    <div className="inline-flex align-middle">
      <div>This content already existed on database</div>
      <Button
        type='button'
        text='Next'
        onClick={handleSubmit(onSubmitData)}
        className='mb-2 w-fit self-end' />
    </div>
  </div>
}

const DetailChapter = ({ header, content }: IDetailChapter): React.ReactElement => {
  return <div className="inline-flex w-full gap-4 overflow-hidden">
    <p className="w-12">{header}</p>
    <h3 className="flex-1 line-clamp-4">{content}</h3>
  </div>
}
