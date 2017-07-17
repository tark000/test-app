
import { SHOP_REQUEST_STARTED, SHOP_REQUEST_FINISHED, SHOP_REQUEST_ERROR } from '../actions/shopActions';

const initialState = {
	shops: [
		{
			guid: 1,
		  title: 'Photobin1',
		  body: 'Id dolor ipsum irure nulla deserunt ipsum tempor cupidatat est ex veniam.'
		},
		{
			guid: 2,
		  title: 'Photobin2',
		  body: 'Id dolor ipsum irure nulla deserunt ipsum tempor cupidatat est ex veniam.'
		},
		{
			guid: 3,
		  title: 'Photobin3',
		  body: 'Id dolor ipsum irure nulla deserunt ipsum tempor cupidatat est ex veniam.'
		},
		{
			guid: 4,
		  title: 'Photobin4',
		  body: 'Id dolor ipsum irure nulla deserunt ipsum tempor cupidatat est ex veniam.'
		}
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