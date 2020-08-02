import React from 'react'

import Button from 'components/Button'
import ReactPlayer from 'react-player'
import './style.scss'


function Name(props) {
  return (
    <h1 className="nameOfLecture">{props.name}</h1>
  )
}


export default function InviteHeader() {
  return (
    <div className="courseHeader">
      <Name className="name" name="Лекции по ЗКТ" />
      {/* <Hours className="duration" hours='5' /> */}
      <Button className="enrollBtn" label="Записаться на курс" href="#" bgc="#07f" />
      <ReactPlayer className="video" url="https://www.youtube.com/watch?v=y54yFlBez6o" width="360px" height="244px" controls="true" />
    </div>
  )
}
