import React, { useState, useEffect } from "react";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function SideMenu({ modules, onVideoChange }) {
  const [currentVideo, setCurrentVideo] = useState(-1);



  const Lecture = ({ el, index }) => {
    let cls = "list-group-item lecture";
    cls += (index === currentVideo ? " active" : "")

    return (
      <li
        id={index}
        className={cls}
        key={index}
        onClick={(e) => {
          onVideoChange(el.link);
          setCurrentVideo(index)
        }}
      >
        <div className="lecture">
          <span className="lecture__name">{el.name}</span>
          <span className="lecture__duration">{el.duration}</span>
        </div>
      </li>
    )
  }



  const AddLectureInModule = ({ lectures }) => {
    return lectures.map((el, index) => (
      <Lecture el={el} index={index} />
    ));
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
    </div>
  );
}
