import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Titulo from '../components/Titulo/Titulo';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'


function RoutesApp() {

  

  return (

    <>
     
      <NavBar/>

      <ItemListContainer greeting='List item' />

      <Titulo 
            tituloProps='titulo'
            subtituloProps='soy subtitulo de app' 
      /> {/*Extremadamente modular y dinamico porque directamente lo hice una sola vez */}
          {/*tmb se puede poner como Titulo()*/}

      
      
    </>
  )

}

export default RoutesApp