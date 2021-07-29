import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './modalWindow.module.css'

function ModalWindow (props) {
  const valutes = Object.entries(useSelector(state => state.valute.valute))
  const dispatch = useDispatch()

  const handleValute =(charCode, value)=>{
        dispatch({
          type: 'charCode',
          payload: charCode
        })
        dispatch({
          type: 'value',
          payload: value
        })
    props.setModal2(!props.modal2)
  }

  return (
    <div className={style.modalWindow}>
      {valutes.map(([key, value],index)=>{
        return(
          <div key={index} className={style.modalItem} onClick={()=>handleValute(key, value)}>
            {key}
          </div>
        )
      })}
    </div>
  )
}

export default ModalWindow