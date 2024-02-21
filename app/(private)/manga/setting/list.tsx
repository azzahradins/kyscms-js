import Table from "@/components/Page/Table"
import { artistTableStructure, categoryTableStructure, genreTableStructure } from "./table"

export default function ListSetting(): React.ReactElement {
  return (
    <div>
      <Table column={artistTableStructure}/>
    </div>
  )
}