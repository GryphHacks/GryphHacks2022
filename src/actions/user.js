import { ADD_USER, LOG_OUT } from "./types";

export const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: {
           user: user
        }
    };
};

export const logOut = () => {
    return {
        type: LOG_OUT
    };
};