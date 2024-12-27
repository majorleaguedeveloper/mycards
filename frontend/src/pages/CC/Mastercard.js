import React from 'react';
import { Table, Button, Alert, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Mastercard = () => {
  const tableData = [

    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$245.53", price: "25$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$304.53", price: "30$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$707.53", price: "50$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$1,000.53", price: "150$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$1,225.42", price: "160$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$1,400.64", price: "180$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$1,600.26", price: "200$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$1,939.74", price: "210$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$2,038.85", price: "230$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$2,262.42", price: "270$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$2,843.85", price: "320$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$3,084.43", price: "470$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$3,428.85", price: "500$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$3,803.32", price: "520$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$4,054.28", price: "570$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$4,596.74", price: "610$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$4,842.75", price: "640$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$5,377.00", price: "670$" },
    { details: "name of the cardholder, CVV code, billing details, and expiration date, state,age", balance: "$5,728.42", price: "720$" }
  ];

  return (
    <Container>
      <Alert variant="success">MASTERCARD</Alert>
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
              <td>Mastercard</td>
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

export default Mastercard;
