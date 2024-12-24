import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChimeLogs = () => {
  const logsData = [
    {
      name: 'CHIME',
      includes: 'Online Access,Email Access, DOB,Cookies,Q&A Gender,Ssn, Address, Acct&Rn license NO,ZelleON',
      balance: '$1,050.47',
      price: '$181.48',
      available: true,
    },
    {
      name: 'CHIME',
      includes: 'Online Access,Email Access, DOB,Cookies,Q&A Gender,Ssn, Address, Acct&Rn license NO,ZelleON',
      balance: '$1,100.55',
      price: '$189.45',
      available: true,
    },
    {
      name: 'CHIME',
      includes: 'Online Access,Email Access, DOB,Cookies,Q&A Gender,Ssn, Address, Acct&Rn license NO,ZelleON',
      balance: '$1,210.55',
      price: '$199.45',
      available: false,
    },
    {
      name: 'CHIME',
      includes: 'Online Access,Email Access, DOB,Cookies,Q&A Gender,Ssn, Address, Acct&Rn license NO,ZelleON',
      balance: '$1,302.99',
      price: '$210.54',
      available: true,
    },
    {
      name: 'CHIME',
      includes: 'Online Access,Email Access, DOB,Cookies,Q&A Gender,Ssn, Address, Acct&Rn license NO,ZelleON',
      balance: '$1,470.33',
      price: '$220.34',
      available: true,
    },
    {
      name: 'CHIME',
      includes: 'Online Access,Email Access, DOB,Cookies,Q&A Gender,Ssn, Address, Acct&Rn license NO,ZelleON',
      balance: '$1,704.73',
      price: '$232.23',
      available: true,
    },
    {
      name: 'CHIME',
      includes: 'Online Access,Email Access, DOB,Cookies,Q&A Gender,Ssn, Address, Acct&Rn license NO,ZelleON',
      balance: '$2,150.45',
      price: '$245.55',
      available: true,
    },
    {
      name: 'CHIME',
      includes: 'Online Access,Email Access, DOB,Cookies,Q&A Gender,Ssn, Address, Acct&Rn license NO,ZelleON',
      balance: '$2,430.34',
      price: '$265.84',
      available: true,
    },
    {
      name: 'CHIME',
      includes: 'Online Access,Email Access, DOB,Cookies,Q&A Gender,Ssn, Address, Acct&Rn license NO,ZelleON',
      balance: '$2,712.32',
      price: '$279.23',
      available: true,
    },
    {
      name: 'CHIME',
      includes: 'Online Access,Email Access, DOB,Cookies,Q&A Gender,Ssn, Address, Acct&Rn license NO,ZelleON',
      balance: '$3,057.84',
      price: '$289.26',
      available: true,
    },
    {
      name: 'CHIME',
      includes: 'Online Access,Email Access, DOB,Cookies,Q&A Gender,Ssn, Address, Acct&Rn license NO,ZelleON',
      balance: '$3350.00',
      price: '$300.20',
      available: true,
    },
    {
      name: 'CHIME',
      includes: 'Online Access,Email Access, DOB,Cookies,Q&A Gender,Ssn, Address, Acct&Rn license NO,ZelleON',
      balance: '$3,600.77',
      price: '$325.00',
      available: true,
    },
    {
      name: 'CHIME',
      includes: 'Online Access,Email Access, DOB,Cookies,Q&A Gender,Ssn, Address, Acct&Rn license NO,ZelleON',
      balance: '$3,823.87',
      price: '$350.65',
      available: true,
    },
    {
      name: 'CHIME',
      includes: 'Online Access,Email Access, DOB,Cookies,Q&A Gender,Ssn, Address, Acct&Rn license NO,ZelleON',
      balance: '$4,120.10',
      price: '$382.50',
      available: true,
    },
    {
      name: 'CHIME',
      includes: 'Online Access,Email Access, DOB,Cookies,Q&A Gender,Ssn, Address, Acct&Rn license NO,ZelleON',
      balance: '$4,450.24',
      price: '$398.77',
      available: true,
    },
    {
      name: 'CHIME',
      includes: 'Online Access,Email Access, DOB,Cookies,Q&A Gender,Ssn, Address, Acct&Rn license NO,ZelleON',
      balance: '$4,700.22',
      price: '$410.54',
      available: true,
    },
    {
      name: 'CHIME',
      includes: 'Online Access,Email Access, DOB,Cookies,Q&A Gender,Ssn, Address, Acct&Rn license NO,ZelleON',
      balance: '$5,055.47',
      price: '$430.22',
      available: true,
    },
  ];

  return (
    <div className="table-responsive">
      <div className="d-flex justify-content-center my-4">
        <p className="h4">Chime Bank Logs</p>
      </div>
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
          {logsData.map((log, index) => (
            <tr className="active" key={index}>
              <td>{log.name}</td>
              <td>{log.includes}</td>
              <td>{log.balance}</td>
              <td>{log.price}</td>
              <td>
                {log.available ? (
                  <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
                ) : (
                  <Button style={{ width: '120px', backgroundColor: 'red' }} variant="success" disabled>
                    SOLD OUT
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ChimeLogs;
