import React from "react";
import "./style.scss";

export default function SignBtn({
    label,
    href,
    bgc = "#000",
    type = "button",
    onClick = () => {
        console.log("Click!");
    },
}) {
    const style = {
        backgroundColor: bgc,
    };
    return (
        <a href={href} className="SignBtn" onClick={onClick}>
            <button className="btn" style={style} type={type}>
                {label}
            </button>
        </a>
    );
}
