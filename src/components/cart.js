 

// import React from 'react';

// const Cart = ({ cartItems, removeFromCart, updateQuantity, totalPrice }) => {
//   const handleChangeQuantity = (event, item) => {
//     const newQuantity = Number(event.target.value);
//     updateQuantity(item, newQuantity);
//   };

//   return (
//     <div>
//       <h2>Корзина</h2>
//       <ul>
//         {cartItems.map((item) => (
//           <li key={item.id}>
//             <span>{item.name}</span>
//             <input
//               type="number"
//               min="1"
//               value={item.quantity}
//               onChange={(event) => handleChangeQuantity(event, item)}
//             />
//             <span>{item.price * item.quantity}</span>
//             <button onClick={() => removeFromCart(item)}>Удалить</button>
//           </li>
//         ))}
//       </ul>
//       <div>
//         <strong>Общая цена: {totalPrice}</strong>
//       </div>
//     </div>
//   );
// };

// export default Cart;