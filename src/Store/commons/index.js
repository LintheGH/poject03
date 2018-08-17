import state from './state'
import {
  CHANGE_USERSTATE
} from './const'
const reducer = function(previousState=state, action) {
  let new_state = { ...previousState }
  switch (action.type) {
    case CHANGE_USERSTATE:
    new_state.user_state = action.user_state
    break
    default:
    break
  }
  return new_state
}
export default reducer