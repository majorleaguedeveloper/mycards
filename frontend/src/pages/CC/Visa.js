import React from 'react';
import { Table, Button, Alert, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Visa = () => {
  const tableData = [
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$210.53", price: "24.5$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$430.53", price: "35.6$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$745.53", price: "87$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$1,120.74", price: "155$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$1,408.85", price: "170$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$1,685.25", price: "210$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$1,838.84", price: "240$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$2,025.84", price: "270$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$2,263.21", price: "300$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$2,572.31", price: "320$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$2,894.37", price: "340$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$3,082.71", price: "355$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$3,429.42", price: "370$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$3,800.21", price: "380$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$4,075.32", price: "400$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$4,596.74", price: "420$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$4,842.75", price: "430$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$5,077.00", price: "470$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$5,428.42", price: "500$" },
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
