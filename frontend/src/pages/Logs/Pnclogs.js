import React from 'react';
import { Table, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Pnclogs = () => {
  const logs = [
    { balance: '$1,250.50', title: 'PNC bank', info: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON Wire Enable', price: '$115.00' },
    { balance: '$1,570.45', title: 'PNC bank', info: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON Wire Enable', price: '$145.00' },
    { balance: '$1,950.56', title: 'PNC bank', info: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON Wire Enable', price: '$180.00' },
    { balance: '$2,610.03', title: 'PNC bank', info: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON Wire Enable', price: '$240.00' },
    { balance: '$2,990.70', title: 'PNC bank', info: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON Wire Enable', price: '$285.00' },
    { balance: '$3,175.76', title: 'PNC bank', info: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON Wire Enable', price: '$295.00' },
    { balance: '$3,640.11', title: 'PNC bank', info: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON Wire Enable', price: '$330.00' },
    { balance: '$4,035.65', title: 'PNC bank', info: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON Wire Enable', price: '$390.00' },
    { balance: '$4,350.99', title: 'PNC bank', info: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON Wire Enable', price: '$420.00' },
    { balance: '$4,840.55', title: 'PNC bank', info: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON Wire Enable', price: '$470.00' },
  ];

  return (
    <div className="table-responsive">
      <Alert variant="success">PNC BANK LOGS</Alert>
      <Table bordered hover style={{ backgroundColor: 'white' }} id="pnc">
        <thead>
          <tr>
            <th>Balance</th>
            <th>Title</th>
            <th>Info</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={index}>
              <td>{log.balance}</td>
              <td>{log.title}</td>
              <td>{log.info}</td>
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

export default Pnclogs;
