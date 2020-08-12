import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./style.scss";
import Loading from "components/Loading";

import { useHttp } from "hooks/http.hook";

export default function CourseList() {
    // Получение списка курсов

    const [courses, setCourses] = useState([]);

    const { reqest } = useHttp();

    useEffect(() => {
        reqest("/api/courses/all", "GET").then((d) => setCourses(d));
    }, []);

    // Пока список курсов пуст рисуем спинер, потом возвращаем список курсов

    return !courses.length ? (
        <div className="loading">
            <Loading />
        </div>
    ) : (
        <>
            {" "}
            <h3 style={{ fontSize: "50px", textAlign: "center" }}>
                Список курсов:
            </h3>
            <div className="course-list container">
                {courses.map((e, index) => {
                    return (
                        <Link to={`/course/${e.link}`} key={index}>
                            <div className="course">
                                <div
                                    className="course__img"
                                    style={{
                                        backgroundImage: `url(${
                                            e.backgroundImageLink || ""
                                        })`,
                                    }}
                                ></div>
                                <p
                                    style={{
                                        color: e.courseNameColor,
                                    }}
                                >
                                    {e.courseName}
                                </p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </>
    );
}
