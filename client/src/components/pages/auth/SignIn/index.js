import React, { useState, useContext } from "react";
import "./style.scss";
import Email from "../authComponents/Email";
import Password from "../authComponents/Password";
import SubmitBtn from "../authComponents/SubmitBtn";

import { Context } from "../../../../context";
import { useHttp } from "hooks/http.hook";

export default function SignIn() {
    const { request } = useHttp();

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

        try {
            request("/api/auth/login", "POST", user).then((d) => {
                console.log(d);
                if (!d.token) {
                    // Ошибка авторизации
                    return;
                }
                onUserLogin(d);
                window.location.replace("/");
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="SignIn">
            <div className="formBgc">
                {/* <Message text="Hello" /> */}
                <form
                    action="/api/auth/login"
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
