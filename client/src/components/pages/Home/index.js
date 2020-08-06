import React from "react";
import Poster from "../../Poster";
import Advantages from "../../Advantages";
import CourseList from "../../CourseList";
import "./adaptive.scss";

export default function Home() {
    return (
        <div className="Home">
            <Poster />
            <Advantages />
            <CourseList />
        </div>
    );
}
