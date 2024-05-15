import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

import reducer, {INITIAL_STATE} from "./reducer";

const Context = createContext();

function UserProvider({ children }) { 
    const [user, dispatch] = useReducer(reducer, INITIAL_STATE);
    
	return ( 
		<Context.Provider value={{user, dispatch}}>
			{children}
		</Context.Provider>
	);
}


export { UserProvider };

export default Context;

UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
};