import { Badge } from "flowbite-react"

export default function logic ({statusEmail}) {

    return <>
        {statusEmail == "YES" ? <Badge color="success" >{statusEmail}</Badge> : <Badge color="failure" >{statusEmail}</Badge>}
    </>
}