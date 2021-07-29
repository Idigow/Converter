import { VALUTE_LOAD_START, VALUTE_LOAD_SUCCESS } from './types'

const initState = {
  baseValute: '',
  secondValute: '',
  secondValuteValue: 0,
  valute: {},
  loading: false
}

export const valuteReducer = (state = initState, action)=>{
  switch (action.type){
    case VALUTE_LOAD_START:
      return{
        ...state,
        loading: true
      }
    case VALUTE_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        valute: action.payload.quote,
        baseValute: action.payload.base
      }
    case 'charCode':
      return {
        ...state,
        secondValute: action.payload
      }

    case 'value':
      return {
        ...state,
        secondValuteValue: action.payload
      }
    default:
      return {
        ...state
      }
  }
}