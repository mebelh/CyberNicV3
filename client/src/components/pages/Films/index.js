import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "./style.scss";

export default function Films() {
    const [film, setFilm] = useState({
        url: "",
        activeId: "",
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

    useEffect(async () => {
        const films = await fetch("/films/all", {
            headers: {
                "content-type": "application/json",
            },
        });
        console.log(await films.json());
        films.length && setFilms(films);
    }, []);

    return (
        <div className="films">
            <ReactPlayer
                className="films__player"
                url={film.url}
                height="400px"
                width="100%"
                controls={true}
            />

            <ul class="films__list list-group">
                {films.map((f, index) => {
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
                })}

                <li class="list-group-item active">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Morbi leo risus</li>
                <li class="list-group-item">Porta ac consectetur ac</li>
                <li class="list-group-item">Vestibulum at eros</li>
            </ul>
        </div>
    );
}
