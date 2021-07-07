import { Component } from 'react';

import datas from '../data/history.json';
import { Col, Container, Row, Card, Button } from 'react-bootstrap';

class LatestRelease extends Component {
  render() {
    // this render method is the only mandatory one

    return (
      <div className="d-flex flex-wrap  justify-content-center">
        {datas.map(book => {
          console.log(book);
          // return (
          //   <img className="books flex-column" src={book.img} key={book.asin} />
          // );

          return (
            <Card className="books">
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default LatestRelease;
