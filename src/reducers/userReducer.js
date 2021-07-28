const userReducer =  (state = {name: "NO NAME"}, action) => {

    switch (action.type) {
        case 'ADD_USER' :
            const user = action.payload.user;
            return {
                name: user.email,
                email: user.email,
                
            };
        default:
            return state;
    }
};

export default userReducer;