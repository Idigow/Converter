import React, { useState } from 'react'
import style from './converter.module.css'
import { useSelector } from 'react-redux'
import ModalWindow from './ModalWindow'
import ModalWindow2 from './ModalWindow2'

function Converter (props) {
  const baseValute =useSelector(state => state.valute.baseValute)
  const secondValute =useSelector(state => state.valute.secondValute)
  const secondValuteValue =useSelector(state => state.valute.secondValuteValue)

  const [modal, setModal] = useState(false)

  const [modal2, setModal2] = useState(false)

  const [number, setNumber] = useState(0)
  let result = number*secondValuteValue
  const fixedResult = result.toFixed(2)

  const handleChangeValute =()=>{
    setModal(!modal)
  }
  const handleChangeValute2 =()=>{
    setModal2(!modal2)
  }
  const handleChangeNumber =(e)=>{
    setNumber(e.target.value)
  }
  return (
    <div className={style.converter}>
      <button onClick={handleChangeValute} className={style.btn}>
        {baseValute}
      </button>

      {modal? <ModalWindow setModal={setModal} modal={modal}/>: ''}

      <input type="text" onChange={handleChangeNumber}/>

      <button onClick={handleChangeValute2} className={style.btn}>
        {secondValute? secondValute:baseValute}
      </button>
      {modal2? <ModalWindow2 setModal2={setModal2} modal2={modal2}/>: ''}

      <div className={style.result}>
        {fixedResult}
      </div>

    </div>
  )
}

export default Converter