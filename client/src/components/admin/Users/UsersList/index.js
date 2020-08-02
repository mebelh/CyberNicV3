import React from 'react'
import './style.scss'

export default function UsersList() {
  let users = [
    {
      login: "Killer",
      name: "Alexander",
      state: "Не куплен"
    },
    {
      login: "Hiller",
      name: "Katerina",
      state: "Куплен"
    },
    {
      login: "Triller",
      name: "Bill",
      state: "Не куплен"
    }
  ]
  let arr = [];

  users.forEach(el => {
    arr.push(
      (
        <p className="user">
          <span>{el.login}</span>
          <span>{el.name}</span>
          <span>{el.state}</span>
          <button>Изменить</button>
        </p>
      )
    )
  })


  return arr;
}
