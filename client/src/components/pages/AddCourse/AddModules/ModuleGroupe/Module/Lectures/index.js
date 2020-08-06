import React, { useState, useEffect } from "react";
import Lecture from "./Lecture";

export default function Lectures({ n, changeModule }) {
    let arr = [];

    const [lectures, setLectures] = useState([]);

    const onLacturesChange = (id, lecture) => {
        setLectures([
            ...lectures.slice(0, id),
            lecture,
            ...lectures.slice(id + 1),
        ]);
    };

    useEffect(() => {
        changeModule("lectures", lectures);
    }, [lectures]);

    for (let i = 0; i < n; i++) {
        arr.push(
            <Lecture num={i} onLacturesChange={onLacturesChange} key={i} />
        );
    }

    return arr;
}
