import React, {useEffect, useState} from "react"
import {useHttp} from "../../../hooks/http.hook"
import Loading from "../../Loading"
import './style.scss'

export default function EditCourse({match}) {
    const courseId = match.params.id

    const {request} = useHttp()

    const [course, setCourse] = useState({})

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

    function changeCourse(key, content){
        console.log(key, content)
        setCourse({...course, [key]: content})
    }

    const CourseComp = ()=>{
        return (
            <div>
                {
                    Object.keys(names).map((key, index) => {
                        console.log('Rerender', index)
                        return (
                            <div className="editCourse__wrapper input-group" key={index + 1}>
                                <div className="editCourse__name">{names[key]}: </div>
                                <input
                                    contentEditable={true}
                                    className="editCourse__edit"
                                    style={
                                        {
                                            whiteSpace: 'pre'
                                        }
                                    }
                                    value={course[key].trim()}
                                    onChange={({target})=>{
                                        changeCourse(key, target.value.trim())
                                    }}
                                />
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <div className="editCourse">
            <div className="editCourse__content container">
                <h4>Редактирование курса <span style={{textDecoration: 'underline'}}>{course.courseName}</span></h4>
                <div>{course.ok ? <CourseComp/> : <Loading/>}</div>
                <button className='btn badge-success'>Сохранить</button>
            </div>
        </div>
    )
}