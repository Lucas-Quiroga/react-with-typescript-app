import React from 'react'

//pasamos la prop en una interface
interface Props {
   subs: Array <{
    nick: string
    avatar: string
    subMonths: number
    description?: string
   }>
}

const List = ({subs}: Props) => {
  return (
    <ul>
        {
          subs.map(sub =>{
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
      </ul>
  )
}

export default List