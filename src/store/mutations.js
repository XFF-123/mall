import {ADD_COUNTER, ADD_TO_CART} from './mutation-types'

export default {
  //mutations唯一的目的是修改state中的状态
  //mutation中的每一个方法尽可能完成的事情比较单一
  [ADD_COUNTER](state, payload) {
    payload.count++
  },
  [ADD_TO_CART](state, payload) {
    payload.checked = false
    state.cartList.push(payload)
  },
  changeChecked(state, index){
    state.cartList[index].checked = !state.cartList[index].checked
  }
}