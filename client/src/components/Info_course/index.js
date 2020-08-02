import React from "react";

export default function InfoCourse({ shortDescription, description }) {
    return (
        <div className="info-course">
            <h2>Об это курсе</h2>
            <p>{shortDescription}</p>
            <h3>Описание:</h3>
            <div className="desc_long">{description}</div>
        </div>
    );
}
