import { Modal as Md } from "flowbite-react"
import { ReactElement, useEffect, useState } from "react"
import { Button } from "../Forms";

interface CommonProps {
  children?: React.ReactNode
}

interface Controlled extends CommonProps{
  isOpen: boolean,
  toggleModal: (toggler: boolean) => void,
}

interface Uncontrolled extends CommonProps{
  text?: string
}

type Props = Controlled | Uncontrolled

function Modal(props: Props): ReactElement {
  const [modal, toggleModal] = useState(false)

  if('isOpen' in props){
    return <Structure 
      isOpen={props.isOpen} 
      toggleModal={props.toggleModal}
    />
  } else {
    return <>
      <Button
        text={props.text || "Open Modal"}
        type="button"
        onClick={()=>{toggleModal(true)}} 
      />
      <Structure 
        isOpen={modal} 
        toggleModal={toggleModal}
      />
    </>
  }
  
}

const Structure = ({isOpen, toggleModal}: Controlled): ReactElement => {
  return <Md show={isOpen} onClose={() => toggleModal(false)}>
    <Md.Header>Terms of Service</Md.Header>
    <Md.Body>
      <div className="space-y-6">
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
          companies around the world are updating their terms of service agreements to comply.
        </p>
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
          to ensure a common set of data rights in the European Union. It requires organizations to notify users as
          soon as possible of high-risk data breaches that could personally affect them.
        </p>
      </div>
    </Md.Body>
    <Md.Footer>
      <Button text="Close" type="button" onClick={() => toggleModal(false)} />
      <Button text="Yes" type="button" variant="primary" onClick={() => toggleModal(false)} />
    </Md.Footer>
  </Md>
}

Modal.Header = (header: string | ReactElement) => {
  return header
}

export default Modal