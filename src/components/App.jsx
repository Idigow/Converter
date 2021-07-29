import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadValute } from '../redux/actions'
import ValuteCard from './valuteCard/ValuteCard'
import Header from './header/Header'
import style from './style.module.css'
import { Route } from 'react-router-dom';
import Converter from './converter/Converter'
import { Switch } from 'react-router-dom'

function App (props) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadValute())
  }, [dispatch])

  return (
    <div className={style.body}>
      <Header/>
      <Switch>

        <Route exact path='/:charCode?'>
          <ValuteCard/>
        </Route>
        <Route exact path='/main/converter'>
          <Converter/>
        </Route>
      </Switch>

    </div>
  )
}

export default App