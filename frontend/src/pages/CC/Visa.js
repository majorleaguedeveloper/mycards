import React from 'react';
import { Table, Button, Alert, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Visa = () => {
  const tableData = [
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$1,120.74", price: "110$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$1,408.85", price: "130$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$1,685.25", price: "160$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$1,838.84", price: "180$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$2,025.84", price: "200$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$2,263.21", price: "230$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$2,572.31", price: "250$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$2,894.37", price: "280$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$3,082.71", price: "300$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$3,429.42", price: "340$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$3,800.21", price: "380$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$4,075.32", price: "400$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$4,596.74", price: "450$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$4,842.75", price: "480$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$5,077.00", price: "500$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$5,428.42", price: "540$" },
  ];

  return (
    <Container>
      <Alert variant="success">VISA</Alert>
      <Table responsive style={{ backgroundColor: 'white' }}>
        <thead>
          <tr>
            <th>Logs Name</th>
            <th>Includes</th>
            <th>Balance</th>
            <th>Price</th>
            <th>Buy Now</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index} className="active">
              <td>Visa</td>
              <td>{item.details}</td>
              <td>{item.balance}</td>
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

export default Visa;
