import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import InfoCourse from "components/Info_course";

import SideMenu from "components/SideMenu";

import "./style.scss";
import Loading from "components/Loading";
import { useHttp } from "hooks/http.hook";

export default function Course({ match }) {
    const courseId = match.params.id;

    const [course, setCourse] = useState("");

    const [lecture, setLecture] = useState({});

    const { reqest } = useHttp();

    useEffect(() => {
        reqest(`/api/courses/${courseId}`, "GET").then((c) => {
            setCourse(c);
            setLecture({ link: c.linkOnTrialVideo, idActiveLecture: 0 });
        });
    }, []);

    const onVideoChange = (link, idActiveLecture) => {
        if (link) {
            setLecture({ link, idActiveLecture });
        }
    };

    return !course ? (
        <div className="loading">
            <Loading />
        </div>
    ) : (
        <div className="Course container">
            <ReactPlayer
                className="Course__view-ReactPlayer react-player"
                url={lecture.link}
                width="100%"
                controls={true}
            />
            <SideMenu
                className="SideMenu"
                modules={course.modules}
                onVideoChange={onVideoChange}
                idActiveLecture={lecture.idActiveLecture}
            />{" "}
            <InfoCourse
                className="Info_course"
                shortDescription={course.shortDescription}
                description={course.description}
            />
        </div>
    );
}
