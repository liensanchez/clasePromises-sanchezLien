import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'




const task = new Promise ( (resolve, reject) => {

  let condition = true

  if (condition){

    resolve('200 ok')

  }else{

    reject('400 not found')

  }

} ) 

function ListItem({greeting}) {
  const [productos, setProductos]=useState(0)

  //let productos=0

  const sumaProductos =()=>{

    //productos ++

    //console.log(productos)

    //ponemos un limite en la cantidad de produtos
    if (productos==10){

      //sumamos 0 a partir del 10
      setProductos(productos+0)

    }else{

      //mientras no lleguemos a 10 nos suma +1
      setProductos(productos+1)

    }

  } 

  const restaProductos=()=>{

    setProductos(productos-1)

  }


  task

  .then (resp => console.log (resp))
  //resp lo hacemos nosotros puede ser resp, data, etc 

  .catch(err => console.log(err) )

  return (

    <>

    <h2>{greeting} </h2>

    <button onClick={restaProductos}>-1</button>

    <label>{productos} </label>

    <button onClick={sumaProductos}>+1</button>

    </>
    

  )

}

export default ListItem