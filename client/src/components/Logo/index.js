import React from 'react'

export default function Logo({ path, height = '50px' }) {

  return (
    <a href="/">
      <img className="logo" src={path}
        height={height}
        alt="Logo-white" />
    </a>
  )
}
