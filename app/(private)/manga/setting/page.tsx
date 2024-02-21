import { FaDiceD20, FaFolderOpen, FaSpa, FaUser } from "react-icons/fa";
import ListSetting from "./list";
import OptionSetting from "./option";

export default function SettingContentData(): React.ReactElement {
  return (
    <section className="flex flex-col w-screen md:w-full">
      <h2 className="mx-4 mt-4">Setting Content Data</h2>
      {/* <OptionSetting /> */}
      <section className="wrapper">
        <ListSetting />

      </section>
    </section>
  )
}