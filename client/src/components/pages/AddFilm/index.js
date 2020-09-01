import React, {useState} from "react";

import "./style.scss";
import {useHttp} from "hooks/http.hook";

export default function AddFilm() {
    const {request} = useHttp();

    const [film, setFilm] = useState({url: "", label: ""});

    const onFilmEdit = (key, data) => {
        setFilm({...film, [key]: data});
    };

    const sendForm = async () => {
        await request("/api/films/add", "POST", film);

        // window.location.reload();
    };

    return (
        <div className="addFilm">
            <div className="addFilm__form">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Название:</span>
                    </div>
                    <input
                        className="form-control"
                        value={film.label}
                        name="label"
                        required
                        aria-label="With textarea"
                        onChange={({target}) => {
                            onFilmEdit("label", target.value);
                        }}
                    />
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span
                            className="input-group-text"
                            id="inputGroup-sizing-default"
                        >
                            Ссылка:
                        </span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        name="url"
                        required
                        value={film.url}
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        onChange={({target}) => {
                            onFilmEdit("url", target.value);
                        }}
                    />
                </div>
                <button className="btn btn-outline-success" onClick={sendForm}>
                    Добавить фильм
                </button>
            </div>
        </div>
    );
}
