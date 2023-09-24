import { type IFileList } from '../chapterAddForm'

interface ISortImage {
  itemList?: IFileList[]
  handleRemove: (key: string) => void
}

export const SortImage = ({
  itemList,
  handleRemove
}: ISortImage): React.ReactElement => {
  return (
    <div className='flex flex-col gap-4'>
      {itemList?.map((val, index) => {
        return (
          <div key={val.id} className='p-4 border rounded-lg' onClick={() => { handleRemove(val.id) }}> {val.file.name} </div>
        )
      })}
    </div>
  )
}
