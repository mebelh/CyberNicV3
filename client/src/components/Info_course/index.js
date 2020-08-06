import React from "react";

import "./style.scss";

export default function InfoCourse({ shortDescription, description }) {
    return (
        <div className="info-course">
            <h2>{shortDescription}</h2>
            <h4>Содержание курса:</h4>
            <div className="desc_long">
                {`${description}`.split("\n").map((p, index) => (
                    <p key={index}>{p}</p>
                ))}
            </div>
        </div>
    );
}
