import React, { useState, useEffect, /*useCallback*/ } from "react";
import ReactPlayer from "react-player";
import "./style.scss";
import Loading from "components/Loading";

export default function Films() {
    const [film, setFilm] = useState({
        url: "",
        activeId: 0,
    });

    const [films, setFilms] = useState([]);

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

    const Films = () => (
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
    )

    const Spinner = () => (
        <div className="loading">
            <Loading />
        </div>
    )


    useEffect(async () => {
        const films = await fetch("/films/all", {
            method: "GET",
            headers: {
                "content-type": "application/json",
                Accept: "application/json",
            },
        });
        const filmsList = await films.json();
        setFilms(filmsList);
        setFilm({ url: filmsList[0].url, activeId: 0 });
    }, []);


    return !films.length ? <Spinner /> : <Films />
}
