import React from 'react';
import { Table, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Boalogs = () => {
  const logs = [
    { name: 'BOA', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$1,290.47', price: '$110.00' },
    { name: 'BOA', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$1,456.55', price: '$120.11' },
    { name: 'BOA', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$1,675.99', price: '$132.01' },
    { name: 'BOA', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$1,841.33', price: '$155.03' },
    { name: 'BOA', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$2,215.73', price: '$174.01' },
    { name: 'BOA', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$2,452.45', price: '$186.05' },
    { name: 'BOA', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$2,609.34', price: '$191.01' },
    { name: 'BOA', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$2,915.32', price: '$210.14' },
    { name: 'BOA', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$3,102.84', price: '$230.00' },
    { name: 'BOA', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$3,420.18', price: '$265.01' },
    { name: 'BOA', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$3,747.31', price: '$310.01' },
    { name: 'BOA', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$3,933.87', price: '$336.41' },
    { name: 'BOA', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$4,264.10', price: '$356.78' },
    { name: 'BOA', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$4,590.24', price: '$389.99' },
    { name: 'BOA', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$4,755.56', price: '$400.00' },
    { name: 'BOA', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$5,120.50', price: '$430.45' },
  ];

  return (
    <div className="table-responsive">
      <Alert variant="success">BOA Bank Logs</Alert>
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
              <td>
              <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Boalogs;
