import React, { useState, useEffect, useCallback } from "react";
import ReactPlayer from "react-player";
import "./style.scss";

export default function Films() {
    const [film, setFilm] = useState({
        url: "https://www.youtube.com/watch?v=8m5i54QPNx4",
        activeId: 0,
    });

    const [films, setFilms] = useState([
        {
            label: "",
            url: "",
        },
    ]);

    const onFilmChange = (url, activeId) => {
        setFilm({ url, activeId });
    };

    const filmsListUpdate = () => {
        return films.map((f, index) => {
            const { label, url } = f;
            let clazz = "list-group-item";
            if (film.activeId === index) clazz += " active";

            return (
                <li
                    className={clazz}
                    onClick={() => {
                        onFilmChange(url, index);
                    }}
                >
                    {label}
                </li>
            );
        });
    };

    const getFilms = useCallback(async () => {
        const films = await fetch("/films/all", {
            method: "GET",
            headers: {
                "content-type": "application/json",
                Accept: "application/json",
            },
        });
        const filmsList = await films.json();
        setFilms(filmsList);
    }, []);

    getFilms();

    return (
        <div className="films">
            <ReactPlayer
                className="films__player"
                url={film.url}
                height="400px"
                width="100%"
                controls={true}
            />

            <ul class="films__list list-group">{filmsListUpdate()}</ul>
        </div>
    );
}
