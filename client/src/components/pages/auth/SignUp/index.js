import React from "react";
import "./style.scss";
import Email from "../authComponents/Email";
import Password from "../authComponents/Password";
import Name from "../authComponents/Name";
import SubmitBtn from "../authComponents/SubmitBtn";

export default function SignIn() {
    return (
        <div className="SignUp">
            <div className="formBgc">
                <form action="/auth/register" method="POST">
                    <Name />
                    <Email />
                    <Password />
                    <SubmitBtn text="Войти" />
                </form>
                <a href="http://localhost:3000/auth/login">Уже зарегистрированны? Войдите.</a>
            </div>
        </div>
    );
}
