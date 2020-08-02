import React, { useState, useContext } from "react";
import "./style.scss";
import Email from "../authComponents/Email";
import Password from "../authComponents/Password";
import SubmitBtn from "../authComponents/SubmitBtn";

import { Context } from "../../../../context";

// import Message from "./../../message";

export default function SignIn() {
    const { onUserLogin } = useContext(Context);

    const [user, setUser] = useState({
        login: "",
        password: "",
    });

    const onLoginChange = (login) => {
        setUser({ ...user, login });
    };

    const onPasswordChange = (password) => {
        setUser({ ...user, password });
    };

    const checkLogin = async (e) => {
        e.preventDefault();
        fetch("/auth/login/adm", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "content-type": "application/json",
            },
            body: JSON.stringify({ ...user }),
        }).then(async (res) => {
            const user = await res.json();
            onUserLogin(user);
            if (user.ok) {
                window.location.replace("/");
            }
        });
    };

    return (
        <div className="SignIn">
            <div className="formBgc">
                {/* <Message text="Hello" /> */}
                <form
                    action="http://localhost:3001/auth/login"
                    method="POST"
                    onSubmit={checkLogin}
                >
                    <Email onLoginChange={onLoginChange} />
                    <Password onPasswordChange={onPasswordChange} />
                    <SubmitBtn text="Войти" />
                </form>
            </div>
        </div>
    );
}
