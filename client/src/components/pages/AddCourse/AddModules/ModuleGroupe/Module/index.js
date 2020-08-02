import React, { useState, useEffect } from "react";
import Lectures from "./Lectures";
import Button from "components/Button";

import "./style.scss";

export default function Module({ onModuleChange, num }) {
    const [numOfLectures, setNumOfLectures] = useState(0);

    const [module, setModule] = useState({});

    const changeModule = (key, label) => {
        setModule({ ...module, [key]: label });
    };

    useEffect(() => {
        onModuleChange(module, num);
    }, [module]);

    useEffect(() => {
        if (numOfLectures <= 1) {
            setNumOfLectures(1);
        }
    }, [numOfLectures]);

    return (
        <div key={num}>
            <div className="Module">
                <div>
                    <span>Имя модуля:</span>
                    <input
                        type="text"
                        name="name"
                        required
                        value={module.name}
                        onChange={({ target }) => {
                            changeModule("name", target.value);
                        }}
                    />
                </div>
                <div>
                    <span>Продолжительность:</span>
                    <input
                        id="duration"
                        type="text"
                        required
                        name="duration"
                        value={module.duration}
                        onChange={({ target, ...e }) => {
                            changeModule("duration", target.value);
                        }}
                    />
                </div>

                <Button
                    label="Добавить видео"
                    bgc="#00587a"
                    onClick={() => setNumOfLectures(numOfLectures + 1)}
                />
                <Button
                    label="Убрать видео"
                    bgc="#803100"
                    onClick={() => setNumOfLectures(numOfLectures - 1)}
                />
            </div>
            <Lectures n={numOfLectures} changeModule={changeModule} />
        </div>
    );
}
