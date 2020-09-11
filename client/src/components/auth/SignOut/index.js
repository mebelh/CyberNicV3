import { useContext } from "react"

import { Context } from "../../../context"

export default function SignOut() {
    const { logOut } = useContext(Context)

    setTimeout(()=>{
        logOut()
    }, 1000)

    return true
}
