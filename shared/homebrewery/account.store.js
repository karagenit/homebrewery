const _ = require('lodash');
const flux = require('pico-flux');


let State = {
	loginPath : '',
	user : undefined,
};

const Store = {}; //Maybe Flux it later?


Store.init = (state)=>{
	State = _.merge({}, State, state);
};
Store.getLoginPath = ()=>{
	let path = State.loginPath;
	if(typeof window !== 'undefined'){
		path = `${path}?redirect=${encodeURIComponent(window.location.href)}`;
	}
	return path;
};
Store.getUser = ()=>{
	return State.user;
};

module.exports = Store;