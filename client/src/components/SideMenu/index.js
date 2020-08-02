import React from "react";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function SideMenu({ modules, onVideoChange }) {
    const AddLectureInModule = ({ lectures }) => {
        return lectures.map((el) => (
            <div className="list-group">
                <li
                    className="list-group-item"
                    onClick={() => {
                        onVideoChange(el.link);
                    }}
                >
                    <div className="lecture">
                        <div className="lecture__name">{el.name}</div>
                        <div className="lecture__duration">{el.duration}</div>
                    </div>
                </li>
            </div>
        ));
    };

    const AddModulesInSideMenu = ({ modules = [] }) => {
        return (
            <div class="accordion" id="accordionExample">
                {modules.map((e, index) => (
                    <div className="card">
                        <div className="card-header" id={`heading${index}`}>
                            <h2 className="mb-0">
                                <button
                                    className="btn btn-link btn-block text-left"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target={`#collapse${index}`}
                                    aria-expanded="true"
                                    aria-controls={`#collapse${index}`}
                                >
                                    {e.name}
                                </button>
                            </h2>
                        </div>

                        <div
                            id={`collapse${index}`}
                            className="collapse show"
                            aria-labelledby={`headin${index}`}
                            data-parent="#accordionExample"
                        >
                            <AddLectureInModule
                                lectures={e.lectures}
                                key={index}
                            />
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="sideMenu">
            <AddModulesInSideMenu modules={modules} />
        </div>
    );
}
