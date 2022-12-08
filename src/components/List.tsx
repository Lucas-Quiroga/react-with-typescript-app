import React from 'react'

const List = () => {
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