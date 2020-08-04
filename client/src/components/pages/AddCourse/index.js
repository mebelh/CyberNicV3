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
        <form className="addCourse" onSubmit={fetchCourse}>
            <div className="addCourse__left">
                <h2>Добавить курс:</h2>
                <label>
                    <span>Имя курса:</span>
                    <input
                        type="text"
                        name="courseName"
                        required
                        placeholder="Введите имя курса..."
                        onChange={({ target }) => {
                            onInfAdd("courseName", target.value);
                        }}
                    />
                </label>
                <label>
                    <span>Id курса:</span>
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
                <label>
                    <span>Ссылка на триал видео:</span>
                    <input
                        type="text"
                        required
                        placeholder="Введите ссылку..."
                        name="linkOnTrialVideo"
                        onChange={({ target }) => {
                            onInfAdd("linkOnTrialVideo", target.value);
                        }}
                    />
                </label>
                <label>
                    <span>Ссылка на фоновую картинку:</span>
                    <input
                        type="text"
                        required
                        placeholder="Введите ссылку..."
                        name="backgroundImageLink"
                        onChange={({ target }) => {
                            onInfAdd("backgroundImageLink", target.value);
                        }}
                    />
                </label>
                <label>
                    <span>Цвет имени курса:</span>
                    <input
                        type="color"
                        required
                        name="courseNameColor"
                        onChange={({ target }) => {
                            onInfAdd("courseNameColor", target.value);
                        }}
                    />
                </label>

                <div>
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
                </div>
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
        </form>
    );
}
