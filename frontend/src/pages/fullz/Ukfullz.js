import React from 'react';
import { Table, Button, Alert, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Ukfullz = () => {
  const tableData = [
    { details: "UK Fullz", price: "10 USD" },
    { details: "UK Fullz", price: "150 USD" },
    { details: "UK Fullz", price: "150 USD" },
    { details: "UK Fullz", price: "150 USD" },
    { details: "UK Fullz", price: "150 USD" }
  ];

  return (
    <Container>
      <Alert variant="success">Fullz</Alert>
      <Table responsive style={{ backgroundColor: 'rgb(248, 248, 248)' }}>
        <thead>
          <tr>
            <th scope="col">UK Fullz</th>
            <th scope="col">DETAILS</th>
            <th scope="col">PRICE</th>
            <th scope="col">Buy now</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <th scope="row">UK Fullz</th>
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

export default Ukfullz;
