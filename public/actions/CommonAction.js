/*
 * action 类型
 */
import * as types from '../constants/ActionTypes';

function setLoginStatus(islogin){
	return {
		type:types.IS_LOGIN,
		islogin
	}
}

export function islogin(islogin){
	return dispatch=>{
		dispatch(setLoginStatus(islogin));	
	}
}