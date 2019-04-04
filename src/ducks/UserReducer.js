import axios from 'axios'


const intialState ={
    user: {},
    isLoading: false
}


//creating the varibles
const REGISTER = "REGISTER";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const GET_USER = "GET_USER"



//creating functions
export const register = (username, password) => {
    return {
        type: REGISTER,
        payload: axios.post('/auth/register',{username,password})
    }
}

export const login = (username, password) => {
    return {
        type: LOGIN,
        payload: axios.post('/auth/login', {username, password})
    }
}

export const logout = () => {
    return {
        type: LOGOUT,
        payload: axios.post('/auth/logout')
    }
}

export const getUser = () => {
    return {
        type: GET_USER,
        payload: axios.get('/auth/user')
    }
}



//exporting the functions
export default function UsersRed(state = intialState, action){
    switch(action.type){  
        case `${REGISTER}_FULFILLED`:
        return {
            ...state,
            user: action.payload.data
        }

        case `${LOGIN}_FULFILLED`:
        return {
            ...state,
            user: action.payload.data
        }

        case `${LOGOUT}_FULFILLED`:
        return {
            ...state,
            user: action.payload.data
        }

        case `${GET_USER}_FULFILLED`:
        return {
            ...state,
            user: action.payload.data
        }

        default:
        return state;
    } 
}