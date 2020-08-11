import React, { useState } from "react";
import "./style.scss";
import AddModules from "./AddModules";
import Button from "components/Button";
import { useHttp } from "hooks/http.hook";
export default function AddCourse() {
    const { reqest } = useHttp();

    const [course, setCourse] = useState({
        courseNameColor: "#ffffff",
    });

    const onInfAdd = (key, label) => {
        setCourse({ ...course, [key]: label });
    };

    const fetchCourse = async (e) => {
        e.preventDefault();
        reqest("/api/courses/add", "POST", course);
        // await fetch("/api/courses/add", {
        //     method: "POST",
        //     headers: {
        //         Accept: "application/json",
        //         "content-type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         ...course,
        //         token: JSON.parse(localStorage.getItem("user")).token,
        //     }),
        // });
    };

    return (
        <form onSubmit={fetchCourse}>
            <div className="addCourse container">
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
                        required
                        value={course.courseName}
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
                        required
                        value={course.link}
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
                        required
                        value={course.linkOnTrialVideo}
                        placeholder="Ссылка..."
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
                        required
                        value={course.backgroundImageLink}
                        placeholder="Ссылка..."
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
                        required
                        value={course.courseNameColor}
                        class="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        name="courseNameColor"
                        onChange={({ target }) => {
                            onInfAdd("courseNameColor", target.value);
                        }}
                    />
                </div>
                <div className="addCourse__textarea">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                                Короткое описание
                            </span>
                        </div>
                        <textarea
                            class="form-control"
                            required
                            aria-label="With textarea"
                            name="shortDescription"
                            onChange={({ target }) => {
                                onInfAdd("shortDescription", target.value);
                            }}
                        />
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Описание</span>
                        </div>
                        <textarea
                            class="form-control"
                            required
                            aria-label="With textarea"
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
            </div>
        </form>
    );
}
