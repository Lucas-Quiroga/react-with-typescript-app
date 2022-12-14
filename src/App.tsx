import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import List from "./components/List"
import Form from './components/Form';
import { Sub } from './types';


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

  //useRef es un hook donde se puede guardar un valor que queda entre renderizados pero no va a causar un renderizado
  const divRef = useRef<HTMLDivElement>(null)


useEffect(() => {
  setSubs(INITIAL_STATE)
}, [])

  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
  }
  
  return (
    <div className="App" ref={divRef}>
      <h1>Luke Subs</h1>
      <List subs={subs}/>
      <Form onNewSub={handleNewSub}/>
    </div>
  );
}

export default App;

