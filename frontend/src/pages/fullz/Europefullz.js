import React from 'react';
import { Table, Button, Alert, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Europefullz = () => {
  const tableData = [
    { details: "Europe Fullz", price: "150 USD", buyNowLink: "./payment.html" },
    { details: "Europe Fullz", price: "150 USD", buyNowLink: "./payment.html" },
    { details: "Europe Fullz", price: "150 USD", buyNowLink: "./payment.html" },
    { details: "Europe Fullz", price: "150 USD", buyNowLink: "./payment.html" },
    { details: "Europe Fullz", price: "150 USD", buyNowLink: "./payment.html" }
  ];

  return (
    <Container>
      <Alert variant="success">Fullz</Alert>
      <Table responsive style={{ backgroundColor: 'rgb(248, 248, 248)' }}>
        <thead>
          <tr>
            <th scope="col">EUROPE FULLZ</th>
            <th scope="col">DETAILS</th>
            <th scope="col">PRICE</th>
            <th scope="col">Buy now</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <th scope="row">EUROPE FULLZ</th>
              <td>{item.details}</td>
              <td>{item.price}</td>
              <td>
              <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Europefullz;
