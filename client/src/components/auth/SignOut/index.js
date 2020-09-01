import React, { useContext } from "react"

import { Context } from "../../../context"

export default function SignOut() {
    const { setUser } = useContext(Context)
    setUser("")
    setTimeout(()=>{
        window.location.replace("/auth/login")
    }, 300)

    return <div className=""></div>
}
