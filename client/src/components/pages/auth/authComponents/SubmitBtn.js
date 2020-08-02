import React from "react";

export default function SubmitBtn({ text }) {
    return (
        <button className="btn btn-info" type="submit">
            {text}
        </button>
    );
}
