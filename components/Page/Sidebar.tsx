import { Sidebar as Sb } from 'flowbite-react'
import { FaHome, FaUser, FaDoorClosed, FaServer, FaBook } from 'react-icons/fa'

function Sidebar (): React.ReactElement {
  return (<Sb aria-label="Default sidebar example">
    <Sb.Items>
      <Sb.ItemGroup>
        <Sb.Item
          href="#"
          icon={FaHome}>
          Dashboard
        </Sb.Item>
        <Sb.Collapse
          icon={FaBook}
          label="Manga">
          <Sb.Item href="#">
            List
          </Sb.Item>
          <Sb.Item href="#">
            Upload
          </Sb.Item>
          <Sb.Item href="#">
            Mirror Upload
          </Sb.Item>
          <Sb.Item href="#">
            Setting Content Data
          </Sb.Item>
        </Sb.Collapse>
        <Sb.Item
          href="#"
          icon={FaServer}>
          Storage Server
        </Sb.Item>
        <Sb.Item
          href="#"
          icon={FaUser}>
          User Management
        </Sb.Item>
        <Sb.Item
          href="#"
          icon={FaDoorClosed}>
          Logout
        </Sb.Item>
      </Sb.ItemGroup>
    </Sb.Items>
  </Sb>)
}

export default Sidebar
