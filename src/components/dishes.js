import React  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Card } from "react-bootstrap";


function Dishes({ dish, addToCart }) {

 

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


       </div>
    )
}
   export default Dishes;

