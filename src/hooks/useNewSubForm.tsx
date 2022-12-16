import { useReducer } from "react"
import { Sub } from "../types"

interface FormState {
    inputValues: Sub
}

type FormReducerAction = {
    type: "change_value",
    payload: {
        inputName: string, 
        inputValue: string
    }
} | {
    type: "clear"
}

const INTIAL_STATE ={
    nick: "",
    subMonths: 0,
    avatar: "",
    description: ""
}

const formReducer = (state: FormState["inputValues"],action: FormReducerAction)  => {
    switch (action.type) {
        case "change_value":
            const {inputName, inputValue} = action.payload
            return {
                ...state, [inputName] : inputValue
            }
        case "clear":
            return INTIAL_STATE

        default:
            return state
    }
}

const useNewSubForm = () => {
    return useReducer(formReducer, INTIAL_STATE)
}

export default useNewSubForm