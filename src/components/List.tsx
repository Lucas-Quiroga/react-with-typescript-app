import React from 'react'
import { Sub } from '../types'

//pasamos la prop en una interface
interface Props {
   subs: Array <Sub>
}

const List: React.FunctionComponent<Props> = ({subs}) => {

  const renderList = (): JSX.Element[] => {
return subs.map(sub =>{
  return(
    <li key={sub.nick}>
      <img src={sub.avatar} />
      <h4>{sub.nick} (<small>{sub.subMonths}</small>)</h4>
      {/* el signo "?" lo vamos a usar para asignarle que la descripcion tenga o no tenga una, que sea los primero 100 caracteres */}
      <p>{sub.description?.substring(0,100)}</p>
    </li>
  )
})
  }

  return (
    <ul>
        {
          renderList()
        }
      </ul>
  )
}

export default List