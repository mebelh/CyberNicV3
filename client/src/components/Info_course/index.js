import React from "react";

import "./style.scss";

export default function InfoCourse({ shortDescription, description }) {
    return (
        <div className="info-course">
            <h2>{shortDescription}</h2>
            <h3>Содержание курса:</h3>
            <div className="desc_long">
                {`${description}`.split("\n").map((p) => (
                    <p>{p}</p>
                ))}
            </div>
        </div>
    );
}
