import { USER_REGISTER, USER_REGISTER_FAILED, USER_REGISTER_SUCCESS } from "../constants/actionsTypes"
import axios from "axios"



export const userRegister = (newUser) => async (dispatch) => {
    dispatch({ type: USER_REGISTER })
    try {
        const res = await axios.post("http://localhost:5000/user/register", newUser)
        dispatch({ type: USER_REGISTER_SUCCESS, payload: res.data })
    } catch (error) {
        dispatch({ type: USER_REGISTER_FAILED, payload: error.response.data })
        console.log(error)
    }
}