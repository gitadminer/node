import * as types from '../constants/ActionTypes.js';

const initialState = {
  accessToken: null,
  islogin: false,
  user: null,
};


export default function CommonReducer(state = initialState, action){
	switch (action.type) {
		case types.IS_LOGIN:
	      return Object.assign({}, state, {
	        islogin: action.islogin,
	      });

	    case types.USER_INFO:
	      return Object.assign({}, state, {
	        user: action.user,
	      });
	    default:
      		return state;
	}
}