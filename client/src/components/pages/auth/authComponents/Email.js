import React from "react";

export default function Email({ onLoginChange = () => {} }) {
    return (
        <label>
            <span>Email</span>
            <input
                type="email"
                name='login'
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
