import React, {useState} from 'react';
import './App.css';

function App() {
  const [subs, setSubs] = useState([
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
  ])

  
  return (
    <div className="App">
      <h1>Luke Subs</h1>
      <ul>
        {
          subs.map(sub =>{
            return(
              <li key={sub.nick}>
                <img src={sub.avatar} />
                <h4>{sub.nick} (<small>{sub.subMonths}</small>)</h4>
                <p>{sub.description?.substring(0,100)}</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
