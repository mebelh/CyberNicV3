import React from "react";

export default function Email({ onLoginChange = () => {} }) {
    return (
        <label>
            <span>Email:</span>
            <input
                type="text"
                placeholder="Enter email"
                name="login"
                onChange={({ target }) => {
                    onLoginChange(target.value);
                }}
            />
        </label>
    );
}
