import React from "react";
import "./UsersSearch.scss";

export default function UsersSearch({ onSearchFilterChange }) {
    return (
        <div className="UserSearch">
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span
                        className="input-group-text"
                        id="inputGroup-sizing-default"
                    >
                        Поиск
                    </span>
                </div>
                <input
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    onChange={({ target }) => {
                        onSearchFilterChange(target.value);
                    }}
                />
            </div>
        </div>
    );
}
