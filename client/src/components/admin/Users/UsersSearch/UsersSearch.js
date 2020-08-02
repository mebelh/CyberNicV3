import React from 'react'
import './UsersSearch.scss'

export default function UsersSearch() {
  return (
    <div>
      <form action="">
        <input className="UserSearch__search" type="text" />
        <button className="UserSearch__btn">Найти пользователя</button>
      </form>
    </div>
  )
}
