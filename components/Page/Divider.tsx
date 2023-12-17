
interface DividerProps {
  text: string | React.ReactElement
}

export default function Divider (Props: DividerProps): React.ReactElement {
  return (<div className="inline-flex items-center justify-center w-full">
    <hr className="w-full h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"/>
    <span className="absolute px-3 font-medium text-gray-900 -translate-x-1 bg-white dark:text-white dark:bg-dark-2">
      {Props.text}
    </span>
  </div>)
}
