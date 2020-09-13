import React, {useEffect, useState} from "react"
import {useHttp} from "../../../hooks/http.hook"
import Loading from "../../Loading"
import './style.scss'
import {EditInput, EditLecture, EditModule} from "./input"

export default function EditCourse({match}) {
    const courseId = match.params.id

    const {request} = useHttp()

    const [course, setCourse] = useState({})
    const [changes, setChanges] = useState({})

    useEffect(()=>{
        console.log(changes)
    }, [changes])

    useEffect(() => {
        request(`/api/courses/${courseId}`, "GET").then((c) => {
            c.ok = true
            setCourse(c)
        })
    }, [])

    const names = {
        courseName: 'Имя курса',
        link: 'Ссылка на курс',
        backgroundImageLink: 'Ссылка на фоновую картинку',
        linkOnTrialVideo: 'Ссылка на триал видео',
        shortDescription: 'Короткое описание',
        description: 'Описание',
    }
    const moduleKeys = {
        name: 'Название модуля',
        duration: 'Продолжительность'
    }

    const lectureKeys = {
        name: 'Название',
        duration: 'Продолжительность',
        link: 'Ссылка'
    }

    function clone(val, alt = []){
        return JSON.parse(JSON.stringify(val || alt))
    }

    function saveChanges() {
        request(`/api/courses/edit/${courseId}`, 'POST', changes)
        window.location.replace(`/course/${changes.link || courseId}`)
    }

    function changeModule(key, label, index) {
        const mod = [...course['modules']]
        mod[index] = {
            ...mod[index],
            [key]: label
        }
        setChanges({
            ...changes,
            'modules': mod
        })
    }

    function changeLecture(key, label, moduleIndex, lectureIndex) {
        const mod = [...course['modules']]
        mod[moduleIndex]['lectures'] = mod[moduleIndex]['lectures'] || []
        mod[moduleIndex]['lectures'][lectureIndex] = {
            ...mod[moduleIndex]['lectures'][lectureIndex],
            [key]: label
        }
        setChanges({
            ...changes,
            ['modules']: mod
        })
    }

    const modules = (
        <>
            <h4>Модули</h4>
            {
                (course['modules'] || []).map(
                    (module, index) => {
                        return (
                            <div key={index}>
                                =================
                                {
                                    [
                                        ...Object.keys(moduleKeys).map(key=>{
                                            return (
                                                <div
                                                    className="editCourse__wrapper input-group"
                                                    key={key}
                                                >
                                                    <div className="editCourse__name">
                                                        {moduleKeys[key]}
                                                    </div>
                                                    <EditModule
                                                        index={index}
                                                        keyName={key}
                                                        initVal={module[key]}
                                                        setChanges={changeModule}
                                                    />
                                                </div>
                                            )
                                        }),
                                        '===',
                                        <div key={index}>
                                            {
                                                module['lectures'].map((lecture, lectureIndex) => {
                                                    return <div
                                                        style={
                                                            {
                                                                marginBottom: '1.5rem',
                                                                backgroundColor: '#545d67',
                                                                borderRadius: '3px'
                                                            }
                                                        }
                                                        key={lectureIndex}
                                                    >
                                                        {
                                                            Object.keys(lectureKeys).map((key) => {
                                                                return <div className="editCourse__wrapper input-group" key={key}>
                                                                    <div className="editCourse__name">{lectureKeys[key]}</div>
                                                                    <EditLecture
                                                                        initVal={lecture[key]}
                                                                        setChanges={changeLecture}
                                                                        changes={changes}
                                                                        keyName={key}
                                                                        index={index}
                                                                        lectureIndex={lectureIndex}
                                                                    />
                                                                </div>
                                                            })
                                                        }
                                                    </div>
                                                })
                                            }
                                        </div>
                                    ]
                                }
                            </div>
                        )
                    }
                )
            }
        </>
    )

    const courseComp =
        <>
            {
                Object.keys(names).map((key, index) => {
                    return (
                        <div className="editCourse__wrapper input-group" key={index + 1}>
                            <div className="editCourse__name">{names[key]}: </div>
                            <EditInput
                                initVal={course[key]}
                                setChanges={setChanges}
                                changes={changes}
                                keyName={key}
                            />
                        </div>
                    )
                })
            }
            {course.ok ? modules : ''}
        </>

    return (
        <div className="editCourse">
            <div className="editCourse__content container">
                <h4>Редактирование курса <span style={{textDecoration: 'underline'}}>{course.courseName}</span></h4>
                <div>{course.ok ? courseComp : <Loading/>}</div>
                <button className='btn badge-success' onClick={saveChanges}>Сохранить</button>
            </div>
        </div>
    )
}