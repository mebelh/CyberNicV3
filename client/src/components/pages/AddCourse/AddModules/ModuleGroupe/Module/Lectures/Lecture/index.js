import React, { useState, useEffect } from "react";
import "./style.scss";

export default function Lecture({ onLacturesChange, num }) {
    const [lecture, setLecture] = useState({});

    const onLectureChange = (key, label) => {
        setLecture({ ...lecture, [key]: label });
    };

    useEffect(() => {
        onLacturesChange(num, lecture);
    }, [lecture]);

    return (
        <div key={num} className="Lecture">
            <div>
                <span>Имя лекции:</span>
                <input
                    value={lecture.name}
                    type="text"
                    required
                    onChange={({ target }) => {
                        onLectureChange("name", target.value);
                    }}
                />
            </div>
            <div>
                <span>Продолжительность:</span>
                <input
                    value={lecture.duration}
                    type="text"
                    required
                    onChange={({ target }) => {
                        onLectureChange("duration", target.value);
                    }}
                />
            </div>
            <div>
                <span>Ссылка:</span>
                <input
                    value={lecture.link}
                    type="text"
                    required
                    onChange={({ target }) => {
                        onLectureChange("link", target.value);
                    }}
                />
            </div>
        </div>
    );
}
