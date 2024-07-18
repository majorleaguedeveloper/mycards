import React from 'react';
import { Table, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navyfederallogs = () => {
  const logs = [
    { name: 'NAVY FEDERAL', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$920.47', price: '$75.12', status: 'BOOKED' },
    { name: 'NAVY FEDERAL', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$1,120.55', price: '$95.00', status: 'AVAILABLE' },
    { name: 'NAVY FEDERAL', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$1,300.99', price: '$110.21', status: 'AVAILABLE' },
    { name: 'NAVY FEDERAL', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$1,601.00', price: '$125.20', status: 'AVAILABLE' },
    { name: 'NAVY FEDERAL', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$1,850.66', price: '$135.00', status: 'AVAILABLE' },
    { name: 'NAVY FEDERAL', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$2,052.11', price: '$160.33', status: 'AVAILABLE' },
    { name: 'NAVY FEDERAL', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$2,305.34', price: '$179.99', status: 'AVAILABLE' },
    { name: 'NAVY FEDERAL', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$2,650.11', price: '$200.98', status: 'AVAILABLE' },
    { name: 'NAVY FEDERAL', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$3,200.13', price: '$225.50', status: 'AVAILABLE' },
    { name: 'NAVY FEDERAL', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '3,520.55', price: '$240.35', status: 'AVAILABLE' },
    { name: 'NAVY FEDERAL', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$3,840.11', price: '$255.25', status: 'AVAILABLE' },
    { name: 'NAVY FEDERAL', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$4,079.40', price: '$285.34', status: 'AVAILABLE' },
    { name: 'NAVY FEDERAL', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$4,301.10', price: '$300.00', status: 'AVAILABLE' },
    { name: 'NAVY FEDERAL', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$4,530.24', price: '$330.00', status: 'AVAILABLE' },
    { name: 'NAVY FEDERAL', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$4,800.56', price: '$355.00', status: 'AVAILABLE' },
    { name: 'NAVY FEDERAL', includes: 'Online Access, Email Access, DOB, Cookies, Q&A Gender, Ssn, Address, Acct&Rn license NO, ZelleON', balance: '$5,213.50', price: '$380.00', status: 'AVAILABLE' },
  ];

  return (
    <div className="table-responsive">
      <Alert variant="success">NAVY FEDERAL</Alert>
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
                {log.status === 'BOOKED' ? (
                  <Button variant="success" size="sm" style={{ backgroundColor: 'blue' }}>
                    <marquee>BOOKED</marquee>
                  </Button>
                ) : (
                  <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Navyfederallogs;
