



// // function CartItem(){



// //     return(
// //         <div>
// //      <p>yh</p>

// //     </div>
// //   );
// // };
// // export default CartItem;  

// import React, { useState } from 'react';
// import Dishes from './dishes';
// import Cart from './cart';
// import data from './data';
// function AppCart() {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (item) => {
//     const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);
//     if (existingItemIndex !== -1) {
//       // Если товар уже есть в корзине, обновляем его количество
//       const updatedCartItems = [...cartItems];
//       updatedCartItems[existingItemIndex].quantity += 1;
//       setCartItems(updatedCartItems);
//     } else {
//       // Если товара нет в корзине, добавляем его со стартовым количеством
//       const newItem = { ...item, quantity: 1 };
//       setCartItems([...cartItems, newItem]);
//     }
//   };
//   const removeFromCart = (item) => {
//     const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
//     setCartItems(updatedCartItems);
//   };

//   const updateQuantity = (item, newQuantity) => {
//     const updatedCartItems = cartItems.map((cartItem) => {
//       if (cartItem.id === item.id) {
//         return { ...cartItem, quantity: newQuantity };
//       }
//       return cartItem;
//     });
//     setCartItems(updatedCartItems);
//   };
//   const calculateTotalPrice = () => {
//     const totalPrice = cartItems.reduce((total, item) => {
//       return total + item.price * item.quantity;
//     }, 0);
//     return totalPrice;
//   };
//   return (
//     <div className="App">
//       <h1>Главная страница</h1>
//       <Dishes dishes={data} addToCart={addToCart} />
//       <Cart
//         cartItems={cartItems}
//         removeFromCart={removeFromCart}
//         updateQuantity={updateQuantity}
//         totalPrice={calculateTotalPrice()}
//       />
  
//     </div>
//   ); 
// }

// export default AppCart;