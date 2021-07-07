import React from 'react';
import { Component } from 'react';

import { Container, Col, Row } from 'react-bootstrap';

class MyFooter extends Component {
  render() {
    return (
      <footer fluid>
        <ul className="d-flex bg-dark text-white">
          <div className="mr-5 w-50">
            <p className="font-weight-bold">About Us</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium, dignissimos.
            </p>
          </div>
          <div className="mr-5 w-50">
            <p className="font-weight-bold">Our Book</p>

            <li>Book 1</li>
            <li>Book 2</li>
            <li>Book 1</li>
            <li>Book 1</li>
          </div>
        </ul>
      </footer>
    );
  }
}

export default MyFooter;
