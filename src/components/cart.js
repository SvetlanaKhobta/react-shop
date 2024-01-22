import React  from 'react';

import { Link } from 'react-router-dom';

function Cart({ cartItems}){
 
    return(

       <div>
            <h2>Корзина</h2>
      
        {cartItems?.map((item) => (
          <p key={item.id}>
            <span>{item.name}</span>
            <span>{item.price * item.quantity} рублей</span>
          </p>
        
        ))}
      
            <Link to="/menu">Вернуться к товарам</Link>
         
        </div>
    )
}
export default Cart;

