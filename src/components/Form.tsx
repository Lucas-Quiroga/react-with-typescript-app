import React, {useReducer, useState} from 'react'
import { Sub } from '../types'

interface FormState {
    inputValues: Sub
}


interface FormProps {
    onNewSub: (newSub: Sub) => void
}

const INTIAL_STATE ={
    nick: "",
    subMonths: 0,
    avatar: "",
    description: ""
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


const Form = ({onNewSub}: FormProps) => {

    const [inputValues, dispatch] = useReducer(formReducer, INTIAL_STATE);

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        onNewSub(inputValues)
        dispatch({type: "clear"})
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target
        dispatch({
            type: "change_value",
            payload:{
                inputName: name,
                inputValue: value
            }
        })
        
    }

    const handleClear = () => {
        dispatch({type: "clear"})
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={inputValues.nick} type="text" name='nick' placeholder='nick'/>
            <input onChange={handleChange} value={inputValues.subMonths} type="text" name='subMonths' placeholder='subMonths'/>
            <input onChange={handleChange} value={inputValues.avatar} type="text" name='avatar' placeholder='avatar'/>
            <textarea onChange={handleChange} value={inputValues.description} name='description' placeholder='description'/>
            <button onClick={handleClear} type='button'>Clear the form</button>
            <button type='submit'>Save new sub!</button>
        </form>
    </div>
  )
}

export default Form