import React, { useContext } from "react";
import "./style.scss";

import { Context } from "./../../../context";

export default function Subheader() {
    const { user } = useContext(Context);
    console.log(user);
    if (user.isAdmin) {
        return (
            <div className="adminHeader">
                <a href="/admin/users">Пользователи</a>
                <a href="/admin/addCourse">Добавить курс</a>
                <a href="/admin/addfilm">Добавить фильм</a>
            </div>
        );
    } else {
        return <></>;
    }
}
