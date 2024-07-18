import React from 'react';
import { Table, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Citilogs = () => {
  const logs = [
    { name: 'CITI', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$1,150.47', price: '$80.22' },
    { name: 'CITI', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$1,402.55', price: '$99.25' },
    { name: 'CITI', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$1,620.44', price: '$120.23' },
    { name: 'CITI', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$1,692.33', price: '$145.40' },
    { name: 'CITI', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$2,102.45', price: '$165.01' },
    { name: 'CITI', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$2,320.12', price: '$175.00' },
    { name: 'CITI', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$2,503.13', price: '$186.01' },
    { name: 'CITI', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$2,805.32', price: '$205.50' },
    { name: 'CITI', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$3,073.84', price: '$220.01' },
    { name: 'CITI', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '3,305.00', price: '$240.33' },
    { name: 'CITI', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$3,600.11', price: '$280.23' },
    { name: 'CITI', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$3,933.87', price: '$315.00' },
    { name: 'CITI', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$4,102.10', price: '$340.00' },
    { name: 'CITI', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$4,620.24', price: '$380.01' },
    { name: 'CITI', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$4,790.00', price: '$400.00' },
    { name: 'CITI', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$5,050.22', price: '$430.13' },
  ];

  return (
    <div className="table-responsive">
      <Alert variant="success">Citi Bank Logs</Alert>
      <Table striped bordered hover style={{ backgroundColor: 'rgb(248, 248, 248)' }}>
        <thead>
          <tr>
            <th>Logs Name</th>
            <th>Includes</th>
            <th>Balance</th>
            <th>Price</th>
            <th>Buy now</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={index} className="active">
              <td>{log.name}</td>
              <td>{log.includes}</td>
              <td>{log.balance}</td>
              <td>{log.price}</td>
              <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Citilogs;
