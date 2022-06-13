import { USER_REGISTER, USER_REGISTER_FAILED, USER_REGISTER_SUCCESS } from "../constants/actionsTypes";


const initialState = {
    loading: false
}

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case USER_REGISTER:
            return { ...state, loading: true }

        case USER_REGISTER_FAILED:
            return { ...state, loading: false, error: action.payload }

        case USER_REGISTER_SUCCESS:
            return { ...state, loading: false, msg: action.payload }

        default:
            return state;
    }

}

export default userReducer