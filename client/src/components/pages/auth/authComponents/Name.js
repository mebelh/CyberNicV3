import React from "react";

export default function Name() {
    return (
        <label>
            {/* <span>Имя:</span>
            <input type="text" placeholder="Ваше имя..." name="name" /> */}

            <span for="inputName">Имя</span>
            <input
                type="text"
                class="form-control"
                name="name"
                placeholder="Введите ваше имя"
            />
        </label>
    );
}
