import { Modal as Md } from "flowbite-react"
import { ReactElement, useState } from "react"
import { Button } from "../Forms";

interface CommonProps {
  children: React.ReactNode | React.ReactNode[]
}

interface Controlled extends CommonProps {
  isOpen: boolean,
  toggleModal: (toggler: boolean) => void,
}

interface Uncontrolled extends CommonProps {
  text?: string
}

type Props = Controlled | Uncontrolled

function Modal(props: Props): ReactElement {
  const [modal, toggleModal] = useState(false)

  if ('isOpen' in props) {
    return <Structure
      isOpen={props.isOpen}
      toggleModal={props.toggleModal}
    > {props.children} </Structure>
  } else {
    return <>
      <Button
        text={props.text || "Open Modal"}
        type="button"
        onClick={() => { toggleModal(true) }}
      />
      <Structure
        isOpen={modal}
        toggleModal={toggleModal}
      > {props.children} </Structure>
    </>
  }

}

const Structure = ({ isOpen, toggleModal, children }: Controlled): ReactElement => {
  console.log(children);
    
  return <Md show={isOpen} onClose={() => toggleModal(false)} className="z-999">
    {children}
  </Md>
}

Modal.Header = (props : CommonProps): ReactElement => {
  return <Md.Header>{props.children}</Md.Header>
}

Modal.Body = (props: CommonProps): ReactElement => {
  return <Md.Body>{props.children}</Md.Body>
}

Modal.Footer = (props: CommonProps): ReactElement => {
  return <Md.Footer className="py-4">{props.children}</Md.Footer>
}

export default Modal