import React, { useState, useEffect, useCallback } from "react";
import ReactPlayer from "react-player";
import "./style.scss";
import Loading from "components/Loading";
import { useHttp } from "hooks/http.hook";

export default function Films() {
    const { reqest } = useHttp();

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
                    key={index}
                    onClick={() => {
                        onFilmChange(url, index);
                    }}
                >
                    {label}
                </li>
            );
        });
    };

    useEffect(() => {
        reqest("/api/films/all", "GET").then((f) => {
            setFilms(f);
            setFilm({ url: f[0].url, activeId: 0 });
        });
    }, []);

    return !films.length ? (
        <div className="loading">
            <Loading />
        </div>
    ) : (
        <div className="films-wrapper">
            <div className="films container">
                <ReactPlayer
                    className="films__player"
                    url={film.url}
                    height="400px"
                    width="100%"
                    controls={true}
                />

                <ul className="films__list list-group">{filmsListUpdate()}</ul>
            </div>
        </div>
    );
}
