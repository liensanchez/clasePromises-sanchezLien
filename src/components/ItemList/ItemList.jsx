import productos from '../Item/Item';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'



function ItemList() {
  return (
    <div>

    { productos.map ((producto) => <div key={producto.id} className='col-md-4'>

      <div className="card-w-100 mt-5">

        <div className="card-header">

          {`${producto.name}`}

        </div>

        <div className="card-body">

          <img src={producto.img} alt="" className='w-50'/>

        </div>

      </div>

    </div> )}
    
    </div>
  )
}

export default ItemList