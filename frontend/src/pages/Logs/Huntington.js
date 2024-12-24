import React from 'react';
import { Table, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Huntington = () => {
  const logs = [
    { name: 'HUNTINGTON', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$1,216.57', price: '$147.82' },
    { name: 'HUNTINGTON', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$1,357.22', price: '$170.77' },
    { name: 'HUNTINGTON', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$1,652.99', price: '$190.12' },
    { name: 'HUNTINGTON', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$1,840.11', price: '$205.24' },
    { name: 'HUNTINGTON', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$2,152.50', price: '$210.00' },
    { name: 'HUNTINGTON', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$2,361.45', price: '$225.36' },
    { name: 'HUNTINGTON', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$2,500.34', price: '$239.55' },
    { name: 'HUNTINGTON', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$2,760.32', price: '$245.45' },
    { name: 'HUNTINGTON', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$3,160.84', price: '$247.33' },
    { name: 'HUNTINGTON', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$3,460.18', price: '$253.11' },
    { name: 'HUNTINGTON', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$3,650.31', price: '$280.12' },
    { name: 'HUNTINGTON', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$3,830.46', price: '$310.00' },
    { name: 'HUNTINGTON', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$4,150.10', price: '$335.22' },
    { name: 'HUNTINGTON', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$4,440.24', price: '$355.54' },
    { name: 'HUNTINGTON', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$4,635.11', price: '$380.00' },
    { name: 'HUNTINGTON', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$5,150.50', price: '$400.88' },
  ];

  return (
    <div className="table-responsive">
      <Alert variant="success">HUNTINGTON BANK LOGS</Alert>
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

export default Huntington;
