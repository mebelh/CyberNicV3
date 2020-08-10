import React from "react";

export default function Email({ onLoginChange = () => {} }) {
    return (
        <label>
            {/* <span>Email:</span>
            <input
                type="text"
                placeholder="Введите email"
                name="login"
                onChange={({ target }) => {
                    onLoginChange(target.value);
                }}
            /> */}
            <span for="inputEmail">Email</span>
            <input
                type="email"
                class="form-control"
                id="inputEmail"
                placeholder="Введите email"
                onChange={({ target }) => {
                    onLoginChange(target.value);
                }}
            />
        </label>
    );
}
