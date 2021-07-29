import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style  from './valuteCard.module.css'
import { Link, useParams } from 'react-router-dom'
import { selectValute } from '../../redux/actions'

function ValuteCard (props) {
  const allValutes = useSelector(state => state.valute.valute)
  const valutes = Object.entries(allValutes)
  const dispatch = useDispatch()
  const charCode = useParams().charCode

  useEffect(() => {
    if (charCode) {
      dispatch(selectValute(charCode));
    }
  }, [dispatch, charCode]);

  return (
    <div className={style.valuteFlex}>
      {valutes.map(([key, value], index)=>{
        return (
          <Link to={`/main/${key}`} key={index}>
            <div key={index} className={style.valuteCard}>
              <div>{key}</div>
              <div>{value}</div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default ValuteCard