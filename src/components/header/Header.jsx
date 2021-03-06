import React from 'react'
import style from './header.module.css'
import { Link } from 'react-router-dom'

function Header (props) {
  return (
    <div className={style.header}>
      <Link to={'/'}>Главная</Link>
      <Link to={'/main/converter'}> Конвертер</Link>
    </div>
  )
}

export default Header