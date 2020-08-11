import React from "react";

export default function Email({ onLoginChange = () => {} }) {
    return (
        <label>
            <span>Email</span>
            <input
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="Введите email"
                onChange={({ target }) => {
                    onLoginChange(target.value);
                }}
            />
        </label>
    );
}
