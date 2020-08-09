import React from "react";

export default function Email({ onLoginChange = () => {} }) {
    return (
        <label>
            <span>Email:</span>
            <input
                type="text"
                placeholder="Введите email"
                name="login"
                onChange={({ target }) => {
                    onLoginChange(target.value);
                }}
            />
        </label>
    );
}
