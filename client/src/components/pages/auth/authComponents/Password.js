import React from "react";

export default function Password({ onPasswordChange = () => {} }) {
    return (
        <label htmlFor="password">
            <span>Пароль</span>
            <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Введите пароль"
                onChange={({ target }) => {
                    onPasswordChange(target.value);
                }}
            />
        </label>
    );
}
