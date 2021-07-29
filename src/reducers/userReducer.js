import { LOG_OUT } from "../actions/types";

const userReducer =  (state = {isAuthenticated: false}, action) => {

    switch (action.type) {
        case 'ADD_USER' :
            const user = action.payload.user;
            return {
                isAuthenticated: true,
                name: user.displayName,
                email: user.email,
                
            };
        case LOG_OUT:
            return {
                isAuthenticated:false
            };
        default:
            return state;
    }
};

export default userReducer;