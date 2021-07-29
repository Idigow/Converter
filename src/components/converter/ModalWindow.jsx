import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './modalWindow.module.css'
import { selectValute } from '../../redux/actions'

function ModalWindow (props) {
  const valutes = Object.entries(useSelector(state => state.valute.valute))
  const dispatch = useDispatch()

  const handleValute =(key)=>{
    dispatch(selectValute(key))
    props.setModal(!props.modal)
  }

  return (
    <div className={style.modalWindow}>
      {valutes.map(([key, value],index)=>{
        return(
          <div key={index} className={style.modalItem} onClick={()=>handleValute(key)}>
            {key}
          </div>
        )
      })}
    </div>
  )
}

export default ModalWindow