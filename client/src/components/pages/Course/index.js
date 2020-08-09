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

    const user = JSON.parse(localStorage.getItem("user"));

    const [lecture, setLecture] = useState({});

    const { reqest } = useHttp();

    useEffect(() => {
        reqest(`/api/courses/${courseId}/${user.login}`, "GET").then((c) => {
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
        <div className="Course">
            <div className="Course__view">
                <ReactPlayer
                    className="Course__view-ReactPlayer react-player"
                    url={lecture.link}
                    width="100%"
                    height="400px"
                    controls={true}
                />
                <InfoCourse
                    className="Info_course"
                    shortDescription={course.shortDescription}
                    description={course.description}
                />
            </div>
            <SideMenu
                className="SideMenu"
                modules={course.modules}
                onVideoChange={onVideoChange}
                idActiveLecture={lecture.idActiveLecture}
            />
        </div>
    );
}
