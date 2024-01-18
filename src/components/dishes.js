import React  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from 'react';
import Cart from "./cart";



function Dishes({dish}) {
    const [cartItems, setCartItems] = useState([]);  
  
    function addToCart(element) {
      const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === element.id);
      if (existingItemIndex !== -1) {
        // Если товар уже есть в корзине, обновляем его количество
        const updatedCartItems = [...cartItems];
        updatedCartItems[existingItemIndex].quantity += 1;
        setCartItems(updatedCartItems);
      } else {
        // Если товара нет в корзине, добавляем его 
        const newItem = { ...element, quantity: 1 };
        setCartItems([...cartItems, newItem]);
      }
      console.log(cartItems)
    };
 

   

    return(

       <div className=" d-flex justify-content-around flex-wrap" >

   {dish?.map((item=> {
       const { id, name,  price, image} = item;
       
       return(
           <div className="pb-2" key={id}>
             
                <Card style={{ width: '18rem'}}>
                <Card.Img variant="top"  src={image} height="250px"/>
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <h4>{price} рублей</h4>
                </Card.Text>
               
                <Button variant="outline-dark" onClick={() => addToCart({id, name, price})}>В корзину</Button>
                
                </Card.Body>
                </Card>
         
           </div>
       )
   }))}
  <Link to="/cart">Перейти в корзину</Link>
  <Cart cartItems={cartItems} />
       </div>
    )
}
   export default Dishes;

