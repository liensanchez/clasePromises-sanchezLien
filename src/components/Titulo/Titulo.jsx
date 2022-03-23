import React from 'react'


//COMPONENTE CON FUNCION

function Titulo({tituloProps,subtituloProps}) {
  //tambien puede ser funtion Titulo (props){}
  

  return (

    <div className='titulo'>

      <h1>{tituloProps} </h1>

      <h2 >{subtituloProps} </h2>

    </div>

  )

}

export default Titulo 