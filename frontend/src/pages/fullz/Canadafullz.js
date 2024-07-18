import React from 'react';
import { Table, Button, Alert, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Canadafullz = () => {
  const tableData = [
    { details: "Canada VISA CC Fullz(CVV) x10", price: "130 USD" },
    { details: "Canada VISA CC Fullz(CVV) x10", price: "250 USD" },
    { details: "Canada VISA CC Fullz(CVV) x10", price: "150 USD" },
    { details: "Canada VISA CC Fullz(CVV) x10", price: "120 USD" },
    { details: "Canada VISA CC Fullz(CVV) x10", price: "115 USD" }
  ];

  return (
    <Container>
      <Alert variant="success">Fullz</Alert>
      <Table responsive style={{ backgroundColor: 'rgb(248, 248, 248)' }}>
        <thead>
          <tr>
            <th>Canada Fullz</th>
            <th>DETAILS</th>
            <th>PRICE</th>
            <th>Buy now</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <th scope="row">Canada Fullz</th>
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

export default Canadafullz;
