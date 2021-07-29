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
      <Switch>
        <Route exact path={'/'}>
          <Header/>
        </Route>
        <Route exact path='/main/:charCode?'>
          <Header/>
          <ValuteCard/>
        </Route>

        <Route path='/converter'>
          <Header/>
          <Converter/>
        </Route>
      </Switch>

    </div>
  )
}

export default App