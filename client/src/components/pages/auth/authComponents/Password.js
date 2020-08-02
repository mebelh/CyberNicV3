import React from "react";

export default function Password({ onPasswordChange = () => {} }) {
    return (
        <label htmlFor="password">
            <span>Password:</span>
            <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={({ target }) => {
                    onPasswordChange(target.value);
                }}
            />
        </label>
    );
}
