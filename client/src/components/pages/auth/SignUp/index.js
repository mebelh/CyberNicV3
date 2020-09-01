import React, {useState} from "react";
import "./style.scss";
import Email from "../authComponents/Email";
import Password from "../authComponents/Password";
import Name from "../authComponents/Name";
import SubmitBtn from "../authComponents/SubmitBtn";

export default function SignUp() {
    return (
        <div className="SignUp">
            <div className="formBgc">
                <form action="/api/auth/register" method="POST">
                    <Name />
                    <Email />
                    <Password />
                    <SubmitBtn text="Зарегистрироваться" />
                </form>
            </div>
        </div>
    );
}
