import React from "react";

export default function Password({ onPasswordChange = () => {} }) {
    return (
        <label htmlFor="password">
            <span>Пароль:</span>

            <input
                type="password"
                class="form-control"
                placeholder="Ваш пароль"
                onChange={({ target }) => {
                    onPasswordChange(target.value);
                }}
            />
        </label>
    );
}
