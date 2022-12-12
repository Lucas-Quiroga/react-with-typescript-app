import React, {useState, useEffect} from 'react';
import './App.css';
import List from "./components/List"
import Form from './components/Form';


//una interface es un contrato que tiene que tener un objeto o una clase
interface Sub {
nick:string
avatar: string 
subMonths: number 
description?: string
}

interface AppState {
  subs: Array<Sub>
  newSubsNumber: number
}

const INITIAL_STATE = [
  {
        nick: "elias",
        subMonths: 3,
        avatar: "https://i.pravatar.cc/150?u=elias",
        description: "Dapelu its a moderador"
      },
      {
        nick: "luke",
        subMonths: 3,
        avatar: "https://i.pravatar.cc/150?u=luke",
      }
]

function App() {

  //le decimos que use la propiedad "subs" del AppState
  const [subs, setSubs] = useState<AppState["subs"]>([])
  const [newSubsNumer, setNewSubsNumer] = useState<AppState["newSubsNumber"]>(0)


useEffect(() => {
  setSubs(INITIAL_STATE)
}, [])


  
  return (
    <div className="App">
      <h1>Luke Subs</h1>
      <List subs={subs}/>
      <Form/>
    </div>
  );
}

export default App;

