import React, { useState, useContext } from "react";
import "./style.scss";
import Email from "../authComponents/Email";
import Password from "../authComponents/Password";
import SubmitBtn from "../authComponents/SubmitBtn";

import { Context } from "../../../../context";
import { useHttp } from "hooks/http.hook";

export default function SignIn() {
    const { request } = useHttp();

    const { setUser } = useContext(Context);

    const [loginData, setLoginData] = useState({
        login: "",
        password: "",
    });

    const onLoginChange = (login) => {
        setLoginData({ ...loginData, login });
    };

    const onPasswordChange = (password) => {
        setLoginData({ ...loginData, password });
    };

    const checkLogin = async (e) => {
        e.preventDefault();
        try {
            request("/api/auth/login", "POST", loginData).then((d) => {
                console.log(d);
                if (!d.token) {
                    // Ошибка авторизации
                    return;
                }
                setUser(d)
                window.location.replace(document.referrer);
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
