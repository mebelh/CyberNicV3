import React from "react";
// import { FaYoutube } from "react-icons/fa";
// import { FaBookReader } from "react-icons/fa";
// import { FaUserGraduate } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faBookReader } from "@fortawesome/free-solid-svg-icons";

import "./style.scss";
export default function Advantages() {
    return (
        <div className="advantages">
            <div className="advantages__item">
                <FontAwesomeIcon
                    icon={faUserGraduate}
                    className="advantages__icon"
                />
                <p>Полезный курс лекций по защите </p>
            </div>
            <div className="advantages__item">
                <FontAwesomeIcon
                    icon={faYoutube}
                    className="advantages__icon"
                />{" "}
                <p>Сотни научно-популярных фильмов </p>
            </div>
            <div className="advantages__item">
                <FontAwesomeIcon
                    icon={faBookReader}
                    className="advantages__icon"
                />{" "}
                <p>Большая библиотека учебных пособий </p>
            </div>
        </div>
    );
}
