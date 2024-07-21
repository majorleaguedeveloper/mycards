import React from 'react';
import { Table, Button, Alert, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Visa = () => {
  const tableData = [
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$1,120.74", price: "20$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$1,408.85", price: "22$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$1,685.25", price: "24$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$1,838.84", price: "26$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$2,025.84", price: "27$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$2,263.21", price: "30$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$2,572.31", price: "32$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$2,894.37", price: "34$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$3,082.71", price: "35.5$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$3,429.42", price: "37$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$3,800.21", price: "38$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$4,075.32", price: "40$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$4,596.74", price: "42$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$4,842.75", price: "43$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$5,077.00", price: "47$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$5,428.42", price: "50$" },
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
