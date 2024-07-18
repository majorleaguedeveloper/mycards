import React from 'react';
import { Table, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Suntrustlogs = () => {
  const logs = [
    { id: 1, balance: '$1,230.00', title: 'CHECKING ACCOUNT', info: 'Suntrust.com [Login:Password]+Name+[Email access]', price: '$99.00' },
    { id: 2, balance: '$1,302.00', title: 'CHECKING ACCOUNT', info: 'Suntrust.com [Login:Password]+Name+[Email access]', price: '$100.00' },
    { id: 3, balance: '$1,422.00', title: 'CHECKING ACCOUNT', info: 'Suntrust.com [Login:Password]+Name+[Email access]', price: '$110.00' },
    { id: 4, balance: '$1,767.00', title: 'CHECKING ACCOUNT', info: 'Suntrust.com [Login:Password]+Name+[Email access]', price: '$140.00' },
    { id: 5, balance: '$2,073.90', title: 'CHECKING ACCOUNT', info: 'Suntrust.com [Login:Password]+Name+[Email access]', price: '$165.00' },
    { id: 6, balance: '$2,656.00', title: 'CHECKING ACCOUNT', info: 'Suntrust.com [Login:Password]+Name+[Email access]', price: '$180.00' },
    { id: 7, balance: '$2,209.20', title: 'CHECKING ACCOUNT', info: 'Suntrust.com [Login:Password]+Name+[Email access]', price: '$223.00' },
    { id: 8, balance: '$3,340.33', title: 'CHECKING ACCOUNT', info: 'Suntrust.com [Login:Password]+Name+[Email access]', price: '$220.00' },
    { id: 9, balance: '$10,736.88', title: 'CHECKING ACCOUNT', info: 'Suntrust.com [Login:Password]+Name+[Email access]', price: '$210.00' },
    { id: 10, balance: '$3,462.00', title: 'CHECKING ACCOUNT', info: 'Suntrust.com [Login:Password]+Name+[Email access]', price: '$340.00' },
  ];

  return (
    <div className="table-responsive">
      <Alert variant="success">SUNTRUST BANK LOGS</Alert>
      <Table bordered hover style={{ backgroundColor: 'white' }} id="suntrust">
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

export default Suntrustlogs;
