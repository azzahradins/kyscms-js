import { FaDiceD20, FaFolderOpen, FaSpa, FaUser } from "react-icons/fa";
import CardComponent from "./component/card";

export default function OptionSetting(): React.ReactElement {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
      <CardComponent
        title="Author & Artist"
        Icon={FaUser} />
      <CardComponent
        title="Category"
        Icon={FaFolderOpen} />
      <CardComponent
        title="Genre"
        Icon={FaDiceD20} />
      <CardComponent
        title="Content Status"
        Icon={FaSpa} />
    </div>
  )
}