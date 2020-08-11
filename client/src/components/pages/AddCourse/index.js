import React, { useState } from "react";
import "./style.scss";
import AddModules from "./AddModules";
import Button from "components/Button";
export default function AddCourse() {
    const [course, setCourse] = useState({});

    const onInfAdd = (key, label) => {
        setCourse({ ...course, [key]: label });
    };

    const fetchCourse = async (e) => {
        await fetch("/courses/add", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "content-type": "application/json",
            },
            body: JSON.stringify({
                ...course,
                token: JSON.parse(localStorage.getItem("user")).token,
            }),
        });
    };

    return (
        <form onSubmit={fetchCourse}>
            <div className="addCourse container">
                {/* <div className="addCourse__left"> */}
                <h2>Добавить курс</h2>

                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span
                            class="input-group-text"
                            id="inputGroup-sizing-default"
                        >
                            Название
                        </span>
                    </div>
                    <input
                        type="text"
                        class="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        onChange={({ target }) => {
                            onInfAdd("courseName", target.value);
                        }}
                    />
                </div>

                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span
                            class="input-group-text"
                            id="inputGroup-sizing-default"
                        >
                            ID
                        </span>
                    </div>
                    <input
                        type="text"
                        class="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        placeholder="Будущая ссылка на курс"
                        onChange={({ target }) => {
                            onInfAdd("link", target.value);
                        }}
                    />
                </div>

                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span
                            class="input-group-text"
                            id="inputGroup-sizing-default"
                        >
                            Триал видео
                        </span>
                    </div>
                    <input
                        type="text"
                        class="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        name="linkOnTrialVideo"
                        onChange={({ target }) => {
                            onInfAdd("linkOnTrialVideo", target.value);
                        }}
                    />
                </div>

                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span
                            class="input-group-text"
                            id="inputGroup-sizing-default"
                        >
                            Фоновая картинка
                        </span>
                    </div>
                    <input
                        type="text"
                        class="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        name="backgroundImageLink"
                        onChange={({ target }) => {
                            onInfAdd("backgroundImageLink", target.value);
                        }}
                    />
                </div>

                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span
                            class="input-group-text"
                            id="inputGroup-sizing-default"
                        >
                            Цвет названия
                        </span>
                    </div>
                    <input
                        type="color"
                        value="#ffffff"
                        class="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        name="courseNameColor"
                        onChange={({ target }) => {
                            onInfAdd("courseNameColor", target.value);
                        }}
                    />
                </div>

                <div>
                    <span>Имя курса</span>
                    <input
                        type="text"
                        name="courseName"
                        required
                        placeholder="Введите имя курса..."
                        onChange={({ target }) => {
                            onInfAdd("courseName", target.value);
                        }}
                    />
                </div>
                <label>
                    <span>Id курса</span>
                    <input
                        type="text"
                        required
                        placeholder="Введите id курса..."
                        name="id"
                        onChange={({ target }) => {
                            onInfAdd("link", target.value);
                        }}
                    />
                </label>
                <div>
                    <span>Ссылка на триал видео</span>
                    <input
                        type="text"
                        required
                        placeholder="Введите ссылку..."
                        name="linkOnTrialVideo"
                        onChange={({ target }) => {
                            onInfAdd("linkOnTrialVideo", target.value);
                        }}
                    />
                </div>
                <div>
                    <span>Ссылка на фоновую картинку</span>
                    <input
                        type="text"
                        required
                        placeholder="Введите ссылку..."
                        name="backgroundImageLink"
                        onChange={({ target }) => {
                            onInfAdd("backgroundImageLink", target.value);
                        }}
                    />
                </div>
                <div>
                    <span>Цвет имени курса</span>
                    <input
                        type="color"
                        required
                        name="courseNameColor"
                        onChange={({ target }) => {
                            onInfAdd("courseNameColor", target.value);
                        }}
                    />
                </div>

                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">With textarea</span>
                    </div>
                    <textarea
                        class="form-control"
                        aria-label="With textarea"
                    ></textarea>
                </div>

                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">With textarea</span>
                    </div>
                    <textarea
                        class="form-control"
                        aria-label="With textarea"
                    ></textarea>
                </div>

                <label>
                    <textarea
                        placeholder="Короткое описание курса"
                        rows="8"
                        cols="80"
                        required
                        name="shortDescription"
                        onChange={({ target }) => {
                            onInfAdd("shortDescription", target.value);
                        }}
                    />
                </label>
                <div>
                    <textarea
                        placeholder="Описание каждого модуля"
                        rows="12"
                        required
                        cols="80"
                        name="description"
                        onChange={({ target }) => {
                            onInfAdd("description", target.value);
                        }}
                    />
                </div>
            </div>

            <div className="addCourse__right">
                <AddModules onInfAdd={onInfAdd} />
                <Button
                    className="addCourse__right__btn"
                    label="Добавить курс"
                    bgc="#16ba58"
                    type="submit"
                />
            </div>
            {/* </div> */}
        </form>
    );
}
