import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChaseLogs = () => {
  const data = [
    {
      name: 'CHASE',
      includes: 'Online Access,Email Access, DOB,Cookies,Q&A Gender,Ssn, Address, Acct&Rn license NO,ZelleON',
      balance: '$1,300.47',
      price: '$90.23',
    },
    {
      name: 'CHASE',
      includes: 'Online Access,Email Access, DOB,Cookies,Q&A Gender,Ssn, Address, Acct&Rn license NO,ZelleON',
      balance: '$1,366.55',
      price: '$110.45',
    },
    {
      name: 'CHASE',
      includes: 'Online Access,Email Access, DOB,Cookies,Q&A Gender,Ssn, Address, Acct&Rn license NO,ZelleON',
      balance: '$1,699.99',
      price: '$125.54',
    },
    {
      name: 'CHASE',
      includes: 'Online Access,Email Access, DOB,Cookies,Q&A Gender,Ssn, Address, Acct&Rn license NO,ZelleON',
      balance: '$1,881.33',
      price: '$135.34',
    },
    {
      name: 'CHASE',
      includes: 'Online Access,Email Access, DOB,Cookies,Q&A Gender,Ssn, Address, Acct&Rn license NO,ZelleON',
      balance: '$2,235.73',
      price: '$145.23',
    },
    {
      name: 'CHASE',
      includes: 'Online Access,Email Access, DOB,Cookies,Q&A Gender,Ssn, Address, Acct&Rn license NO,ZelleON',
      balance: '$2,352.45',
      price: '$165.65',
    },
    {
      name: 'CHASE',
      includes: 'Online Access,Email Access, DOB,Cookies,Q&A Gender,Ssn, Address, Acct&Rn license NO,ZelleON',
      balance: '$2,622.34',
      price: '$180.34',
    },
    {
      name: 'CHASE',
      includes: 'Online Access,Email Access, DOB,Cookies,Q&A Gender,Ssn, Address, Acct&Rn license NO,ZelleON',
      balance: '$2,901.32',
      price: '$195.43',
    },
    {
      name: 'CHASE',
      includes: 'Online Access,Email Access, DOB,Cookies,Q&A Gender,Ssn, Address, Acct&Rn license NO,ZelleON',
      balance: '$3,052.84',
      price: '$220.76',
    },
    {
      name: 'CHASE',
      includes: 'Online Access,Email Access, DOB,Cookies,Q&A Gender,Ssn, Address, Acct&Rn license NO,ZelleON',
      balance: '$3,224.18',
      price: '$255.15',
    },
    {
      name: 'CHASE',
      includes: 'Online Access,Email Access, DOB,Cookies,Q&A Gender,Ssn, Address, Acct&Rn license NO,ZelleON',
      balance: '$3,600.31',
      price: '$305.32',
    },
    {
      name: 'CHASE',
      includes: 'Online Access,Email Access, DOB,Cookies,Q&A Gender,Ssn, Address, Acct&Rn license NO,ZelleON',
      balance: '$3,728.87',
      price: '$333.75',
    },
    {
      name: 'CHASE',
      includes: 'Online Access,Email Access, DOB,Cookies,Q&A Gender,Ssn, Address, Acct&Rn license NO,ZelleON',
      balance: '$4,250.10',
      price: '$350.87',
    },
    {
      name: 'CHASE',
      includes: 'Online Access,Email Access, DOB,Cookies,Q&A Gender,Ssn, Address, Acct&Rn license NO,ZelleON',
      balance: '$4,550.24',
      price: '$365.67',
    },
    {
      name: 'CHASE',
      includes: 'Online Access,Email Access, DOB,Cookies,Q&A Gender,Ssn, Address, Acct&Rn license NO,ZelleON',
      balance: '$4,799.56',
      price: '$397.56',
    },
    {
      name: 'CHASE',
      includes: 'Online Access,Email Access, DOB,Cookies,Q&A Gender,Ssn, Address, Acct&Rn license NO,ZelleON',
      balance: '$5,110.50',
      price: '$420.06',
    },
  ];

  

  return (
    <div className="table-responsive">
      <div className='d-flex justify-content-center my-4'>
        <p className='h4'>Chase Bank Logs</p>
      </div>

      <Table className="table"  style={{ backgroundColor: 'rgb(248, 248, 248)' }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Includes</th>
          <th>Balance</th>
          <th>Price</th>
          <th>Buy Now</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr className="active" key={index}>
            <td>{item.name}</td>
            <td>{item.includes}</td>
            <td>{item.balance}</td>
            <td>{item.price}</td>
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

export default ChaseLogs;
