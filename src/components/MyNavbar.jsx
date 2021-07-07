import React from 'react'
import { Component } from "react"

import {Nav , Navbar } from 'react-bootstrap'



class MyNavbar extends React. Component {

  render(){

    return (
      

<Navbar bg="dark" expand="lg" variant="dark">
  <Navbar.Brand href="#home">Book Store</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#">Home</Nav.Link>
      <Nav.Link href="#">About</Nav.Link>
      <Nav.Link href="#">   Browse  </Nav.Link>

    </Nav>
   
  </Navbar.Collapse>
</Navbar>

    
    )
  }


} 

export default MyNavbar