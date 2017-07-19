
import { SHOP_REQUEST_STARTED, SHOP_REQUEST_FINISHED, SHOP_REQUEST_ERROR } from '../actions/shopActions';

const initialState = {
	shops: [
		
	]
}

export default function page(state = initialState, action) {
  switch (action.type) {
    case SHOP_REQUEST_STARTED:
      return Object.assign({}, state);
    case SHOP_REQUEST_FINISHED:
      return { ...state, shops: action.shops }
    case SHOP_REQUEST_ERROR:
      return Object.assign({}, state);
    default:
      return state;
  }
}