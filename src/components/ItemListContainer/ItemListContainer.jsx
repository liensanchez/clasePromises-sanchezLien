import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import Item from 'ItemList/Item';




const task = new Promise ( (resolve, reject) => {

  let condition = true

  if (condition){

    resolve(productos)

  }else{

    reject('400 not found')

  }

} ) 



function ItemListContainer({greeting}) {

  setTimeout(() => {
    task

      .then (resp => console.log (resp))
      //resp lo hacemos nosotros puede ser resp, data, etc 

      .catch(err => console.log(err) )

      .then () //en cada then hago una sola tarea

      .finally (() => console.log ('siempre a lo ultimo') ) 


  }, 3000 );
  


  return (

    <>

    

    </>
    

  )

}



export default ItemListContainer