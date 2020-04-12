import React from "react";
import { Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import {HashRouter,Route,NavLink} from "react-router-dom"
import Home from "./home"
import About from "./about"
import Contact from "./contact"


function MenuBar(){
    return(
      <HashRouter>
        <div>
          
            <Navbar bg="light">
              <Navbar.Brand href="/">KJ </Navbar.Brand>
        <Nav.Link></Nav.Link> <NavLink to="/">Home</NavLink>
          <Nav.Link></Nav.Link> <NavLink to="/about">About</NavLink>
          <Nav.Link></Nav.Link><NavLink to="/contact">Contact</NavLink>
            </Navbar>
    
          
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
</HashRouter>
    )
}

export default MenuBar;
