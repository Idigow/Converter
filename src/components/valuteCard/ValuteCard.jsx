import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style  from './valuteCard.module.css'
import { Link, useParams } from 'react-router-dom'
import { selectValute } from '../../redux/actions'

function ValuteCard (props) {
  const allValutes = Object.entries(useSelector(state => state.valute.valute))
  const dispatch = useDispatch()
  const charCode = useParams().charCode
  console.log(allValutes)

  useEffect(() => {
    if (charCode) {
      dispatch(selectValute(charCode));
    }
  }, [dispatch, charCode]);

  return (
    <div className={style.valuteFlex}>
      {allValutes.map(([key, value], index)=>{
        return (
          <Link to={`/${key}`} key={index}>
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