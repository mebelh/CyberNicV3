import React from "react";
import "./message.scss";

export default function Message({ text, danger }) {
    const style = {
        backgroundColor: danger ? "#5e2a00" : "#005e42",
    };
    return (
        <div className="message" style={style}>
            <p>{text}</p>
        </div>
    );
}
