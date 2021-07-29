import { VALUTE_LOAD_START, VALUTE_LOAD_SUCCESS } from './types'

export const loadValute = () =>{
  return (dispatch)=>{
    dispatch({
      type: VALUTE_LOAD_START,
    })
    fetch('https://finnhub.io/api/v1/forex/rates?base=USD&token=c3u3l1iad3iemlvdp540')
      .then(response => response.json())
      .then(json =>{
        dispatch({
          type: VALUTE_LOAD_SUCCESS,
          payload: json,
        })
        console.log(json)
      })
  }
}
export const selectValute = (charCode) =>{
  return (dispatch)=>{
    dispatch({
      type: VALUTE_LOAD_START,
    })
    fetch(`https://finnhub.io/api/v1/forex/rates?base=${charCode}&token=c3u3l1iad3iemlvdp540`)
      .then(response => response.json())
      .then(json =>{
        dispatch({
          type: VALUTE_LOAD_SUCCESS,
          payload: json,
        })
      })
  }
}
