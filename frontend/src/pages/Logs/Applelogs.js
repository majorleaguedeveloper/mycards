import React from 'react';
import { Table, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Applelogs = () => {
  const logs = [
    { id: 1, balance: '$1,232.85', title: 'Apple bank', info: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', price: '$75.00' },
    { id: 2, balance: '$1,485.25', title: 'Apple bank', info: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', price: '$88.00' },
    { id: 3, balance: '$1,638.84', title: 'Apple bank', info: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', price: '$102.00' },
    { id: 4, balance: '$2,025.84', title: 'Apple bank', info: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', price: '$154.00' },
    { id: 5, balance: '$2,263.21', title: 'Apple bank', info: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', price: '$180.00' },
    { id: 6, balance: '$2,572.31', title: 'Apple bank', info: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', price: '$204.00' },
    { id: 7, balance: '$2,894.37', title: 'Apple bank', info: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', price: '$230.00' },
    { id: 8, balance: '$3,182.71', title: 'Apple bank', info: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', price: '$263.00' },
    { id: 9, balance: '$3,429.42', title: 'Apple bank', info: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', price: '$280.00' },
    { id: 10, balance: '$4,100.21', title: 'Apple bank', info: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', price: '$310.00' },
  ];

  return (
    <div className="table-responsive">
      <Alert variant="success">Apple Bank Logs</Alert>
      <Table bordered hover style={{ backgroundColor: 'white' }} id="apple">
        <thead>
          <tr>
            <th>#</th>
            <th>Balance</th>
            <th>Title</th>
            <th>Info</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {logs.map(log => (
            <tr key={log.id}>
              <td>{log.id}</td>
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

export default Applelogs;
