import Dishes from "./dishes";
import Cart from "./cart"
import React from "react";
import { useState } from "react";


function ParentCart(){
    const [cartItems, setCartItems] = useState([]);  
      function addToCart(element) {
        const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === element.id);
        if (existingItemIndex !== -1) {
        
          const updatedCartItems = [...cartItems];
          updatedCartItems[existingItemIndex].quantity += 1;
          setCartItems(updatedCartItems);
        } else {
         
          const newItem = { ...element, quantity: 1 };
          setCartItems([...cartItems, newItem]);
        }
      console.log(cartItems)
      };

    return(
        <div>
         
           <Dishes addToCart ={addToCart}/>
           <Cart cartItems={cartItems}/>
        </div>
    )
}
export default ParentCart;