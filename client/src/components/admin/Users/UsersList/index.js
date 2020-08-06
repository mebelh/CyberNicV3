import React from "react";
import "./style.scss";

export default function UsersList({ users, toggleUserStatus }) {
    let arr = [];

    users.forEach((el) => {
        arr.push(
            <li className="list-group-item">
                <span>{el.name}</span>
                <span>{el.login}</span>
                <span>{(el.isPremium && "Премиум") || "Прохожий"}</span>
                <button
                    className="btn btn-info"
                    onClick={() => {
                        toggleUserStatus(el.login);
                        window.location.reload();
                    }}
                >
                    Изменить
                </button>
            </li>
        );
    });

    return arr;
}
