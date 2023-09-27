import { FaBars, FaTimes } from 'react-icons/fa'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { type IFileList } from '../page'
import { type SetStateAction } from 'react'

interface ISortImage {
  fileList: IFileList[]
  setFileList: React.Dispatch<SetStateAction<IFileList[]>>
}

export const SortImage = ({
  fileList,
  setFileList
}: ISortImage): React.ReactElement => {
  const removeImage = (key: string): void => {
    const newList = fileList.filter((val) => val.id !== key)
    setFileList(newList)
  }

  const handleOnDragEnd = (result: any): any => {
    console.log(result.destination)

    if (result.destination === null) return

    const items = Array.from(fileList)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    setFileList(items)
  }

  return (
    <div className='p-4 dark:bg-gradient-to-b dark:from-dark-2 dark:to-transparent rounded-lg'>
      <div className='mb-2'>
        <span className='inline-flex gap-2'> <FaBars className='self-center'/> Sort File </span>
      </div>
      <div>
        {(fileList != null) && fileList.length > 0
          ? <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId='imageList'>
                {(provided) => (
                  <div className='flex flex-col' {...provided.droppableProps} ref={provided.innerRef}>
                    <span>Drag and drop each page to sort files</span>
                    { fileList?.map((val, index) => {
                      return <Draggable key={val.id} draggableId={val.id} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            key={val.id}
                            className='p-4 mt-2 rounded-lg flex flex-row items-center justify-between bg-gradient-to-tr from-dark-1 to-gray-700 shadow-lg'
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}>
                            <span>{val.file.name}</span>
                            <FaTimes onClick={() => { removeImage(val.id) }} className='text-red-400 hover:text-red-500'/>
                          </div>
                        )}
                      </Draggable>
                    })}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          : <div className='text-center'>
              No file uploaded yet.
            </div>
        }
      </div>
    </div>
  )
}
