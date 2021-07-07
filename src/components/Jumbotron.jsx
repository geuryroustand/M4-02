import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

import { Component } from 'react';

class Jumbotron extends Component {
  render() {
    return (
      <>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Books Shop</h1>
            <p className="lead">All the books you may need</p>
          </div>
        </div>
      </>
    );
  }
}

export default Jumbotron;
