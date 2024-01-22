

import './App.css';
import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {

  BrowserRouter as Router,

  Routes,

  Route,

  Link

} from "react-router-dom";


import Delivery from './components/delivery';
import Menu from './components/menu';
import Shop from './components/shop';
import ParentCart from './components/parentcart';


function App() {


  return (
<div>
         <Router>
  
   <Navbar expand="lg"  sticky="top" className="navbar " >
<Container >
  <Navbar.Brand ><Link className='link' to="/">Трапеза</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav " >
    <Nav className="me-auto"  >
   
      <Nav.Link > <Link className='link' to="/menu">Меню</Link></Nav.Link>
      <Nav.Link  > <Link className='link ' to="/delivery">Доставка</Link></Nav.Link>
      <Nav.Link  ><Link className='link ' to="/parentCart">Корзина</Link> </Nav.Link>
     
    </Nav>
  </Navbar.Collapse>
</Container> 
</Navbar>

   <Routes>
    <Route path='/' element = {<Shop/>}/>
    <Route path='/menu' element = {<Menu/>}/>
    <Route path="/delivery" element = {<Delivery/>}/>
    <Route path="/parentcart" element={<ParentCart/> }/>
   </Routes>

   </Router>


 
 </div>
  );
}

export default App;


