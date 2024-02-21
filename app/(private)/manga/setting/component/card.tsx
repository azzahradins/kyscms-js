import { IconType } from "react-icons";
import { FaUser } from "react-icons/fa";

interface ICardComponent {
  title: string;
  Icon: IconType
}

export default function CardComponent({ title, Icon }: ICardComponent): React.ReactElement {
  return (
    <div className="relative cursor-pointer border border-gray-700 p-2 rounded overflow-clip bg-white/5 hover:bg-primaryDk/10 hover:ease-linear transition-colors delay-50">
      <h3 className="mt-20">{title}</h3>
      {Icon && <Icon size={150} className="opacity-5 absolute bottom-0 top-2 right-0 -z-9" />}
    </div>
  )
}