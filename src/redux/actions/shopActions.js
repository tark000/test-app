import fetch from 'isomorphic-fetch'

export const SHOP_REQUEST_STARTED = 'SHOP_REQUEST_STARTED';
export const SHOP_REQUEST_FINISHED = 'SHOP_REQUEST_FINISHED';
export const SHOP_REQUEST_ERROR = 'SHOP_REQUEST_ERROR';

function shopRequestStarted() {
  console.log('shopRequestStarted');
  return { type: SHOP_REQUEST_STARTED };
}

function shopRequestFinished(shops) {
	console.log('shopRequestFinished', shops);
  return { type: SHOP_REQUEST_FINISHED, shops };
}

function shopRequestError(errors) {
	console.log(errors)
  return { type: SHOP_REQUEST_ERROR, errors };
}

export function shopRequest() {
  return (dispatch) => {
    dispatch(shopRequestStarted());
    return fetch('http://www.json-generator.com/api/json/get/bZTcBnsIgO')
    .then(function (response) {
	    if (response.status >= 400) {
	        throw new Error("Bad response from server");
	    }
	    return response.json();
	}).then(function (stories) {
		dispatch(shopRequestFinished(stories));
	    console.log(stories);
	});
};
}


// fetch(`http://www.json-generator.com/api/json/get/bZTcBnsIgO`)
//       .then(({ payload }) => {

//       	dispatch(shopRequestFinished(payload.shps));
//       	console.log(payload)
//       }
//       	)
//       .catch(({ errors }) => dispatch(shopRequestError(errors)));
//   };