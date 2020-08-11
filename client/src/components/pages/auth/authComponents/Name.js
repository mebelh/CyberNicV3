import React from "react";

export default function Name() {
    return (
        <label>
            <span>Имя</span>
            <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Введите ваше имя"
            />
        </label>
    );
}
