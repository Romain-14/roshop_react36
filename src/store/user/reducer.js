const INITIAL_STATE = {
	isLogged: false,
	username: "visiteur",
};

function reducer(state, action) {
    
	switch (action.type) {
		case "LOGIN":
			return {
				isLogged: true,
				username: action.payload,
			};
		case "LOGOUT":
			return INITIAL_STATE;
		default:
			console.log("action non reconnue");
			return state;
	}
}

export { INITIAL_STATE };
export default reducer;
