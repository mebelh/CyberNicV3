import React, {useContext} from "react";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {Context} from "../../context";

export default function SideMenu({ modules, onVideoChange, idActiveLecture, match }) {
    const {user} = useContext(Context)
    const isAdmin = user.isAdmin
    const courseId = match.params.id
    const AddLectureInModule = ({ lectures }) => {
        return (
            <div className="list-group">
                {lectures.map((el, index) => {
                    let clazz = `list-group-item${
                        idActiveLecture === index ? " active" : ""
                    }`;
                    return (
                        <li
                            className={clazz}
                            onClick={() => {
                                onVideoChange(el.link, index);
                            }}
                            key={index}
                        >
                            <div className="lecture">
                                <div className="lecture__name">{el.name}</div>
                                <div className="lecture__duration">
                                    {el.duration}
                                </div>
                            </div>
                        </li>
                    );
                })}
            </div>
        );
    };

    const AddModulesInSideMenu = ({ modules = [] }) => {
        return (
            <div className="accordion" id="accordionExample">
                {modules.map((e, index) => (
                    <div className="card" key={index}>
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
            {isAdmin && <a className="btn btn-success sideMenu__modify_button" href={`/course/${courseId}/edit`}>Редактировать курс</a>}
        </div>
    );
}
