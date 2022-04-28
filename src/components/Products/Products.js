import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import CardDetails from '../CardDetails/CardDetails';
import './Products.css'

const Products = () => {

  // state and fetch products
  const [products, setProducts] = useState([]);
  useEffect( () => {

    fetch('fakedata/products.json')
    .then(res => res.json())
    .then(data => setProducts(data))

  } , [])

  // btn state
  const [carts, setCarts] = useState([])

  // add to cart product  
  const cartDetails = items => {
    let newCart = []
    if(!carts.includes(items)){
      if(carts.length < 4){
        newCart = [...carts, items]
      }
      else{
        alert('You cannot add more details')
        return;
      }
    }
    else{
      return;
    }
    setCarts(newCart)
  }

  // remove selected all product
  const removeItems = (items) => {
    let newCart = [...carts, items]
    newCart = []
    setCarts(newCart)
  }

  // selected product 
  const chooseOneProduct = () => {
    if(carts.length === 0){
        return;
    }
   else{
    const randomProduct = carts[Math.floor(Math.random() * carts.length)];
    setCarts([randomProduct])
   }
  }


  return (
  
    // display show product
    <div className='row w-100 mt-5'>
    <div className='col-md-9 '>
    <div className='row g-3 row-cols-md-3'>
            {
               products.map(product => <Card key={product.id} carts={carts} cartDetails={cartDetails} product={product} ></Card>)
             }
   </div> 
    </div>

    <div className='col-md-3 card-info'> 
      <h5 className='text-center my-4'>Laptop Details</h5>
        {
          carts.map(cart => <CardDetails key={cart.id}  image={cart.img} name={cart.name} ></CardDetails>)
        }

      <div className='d-block text-center'>
      <button onClick={chooseOneProduct} className='btn btn-primary text-white border-0'>Choose one Product</button>
      </div>
      <div className='d-block text-center'>
      <button onClick={removeItems} className='btn btn-danger my-2 text-white border-0'>Remove Items</button>
      </div>

    </div>
</div>

  );
};

export default Products;