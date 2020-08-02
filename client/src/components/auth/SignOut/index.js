import React, { useContext } from "react";

import { Context } from "../../../context";

export default function SignOut() {
    const { setUser } = useContext(Context);

    setUser("");
    window.location.replace("/auth/login");

    return <div className=""></div>;
}
