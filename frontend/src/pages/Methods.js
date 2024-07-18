import React from 'react';
import { Table, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Methods = () => {
  const methods = [
    { method: 'INDIANA METHOD', includes: 'Free walkthrough', price: '$100.00', file: 'pdf' },
    { method: 'CASH APP METHOD', includes: 'Free walkthrough', price: '$110.00', file: 'pdf' },
    { method: 'APPLE BANK METHOD', includes: 'Free walkthrough', price: '$115.00', file: 'pdf' },
    { method: 'AT&T CARDING METHOD', includes: 'Free walkthrough', price: '$120.00', file: 'pdf' },
    { method: 'IOWA METHOD', includes: 'Free walkthrough', price: '$125.00', file: 'pdf' },
    { method: 'WASHINGTON DC RENTAL LOAN METHOD', includes: 'Free walkthrough', price: '$130.00', file: 'pdf' },
    { method: 'COINBASE LOADING TUTORIAL METHOD', includes: 'Free walkthrough', price: '$135.00', file: 'pdf' },
    { method: 'TENNESSEE DUA METHOD', includes: 'Free walkthrough', price: '$100.00', file: 'pdf' },
    { method: 'WELLS FARGO LOAN METHOD', includes: 'Free walkthrough', price: '$95.00', file: 'pdf' },
    { method: 'UTAH SAUCE METHOD', includes: 'Free walkthrough', price: '$90.00', file: 'pdf' },
    { method: 'APPLE PAY SAUCE METHOD', includes: 'Free walkthrough', price: '$100.00', file: 'pdf' },
    { method: 'BANK OPEN UPS TUTORIAL METHOD', includes: 'Free walkthrough', price: '$85.00', file: 'pdf' },
    { method: 'CASHAPP METHOD', includes: 'Free walkthrough', price: '$75.00', file: 'pdf' },
    { method: 'SPAMMING SAUCE METHOD', includes: 'Free walkthrough', price: '$80.00', file: 'pdf' },
    { method: 'VENMO GLITCH WAVE', includes: 'Free walkthrough', price: '$90.00', file: 'pdf' },
    { method: 'NEVADA UNEMPLOYMENT', includes: 'Free walkthrough', price: '$70.00', file: 'pdf' },
    { method: 'PENFED LOAN METHOD', includes: 'Free walkthrough', price: '$75.00', file: 'pdf' },
    { method: 'TRUIST GLITCH METHOD', includes: 'Free walkthrough', price: '$100.00', file: 'pdf' },
    { method: 'SBA CATRAN LOAN', includes: 'Free walkthrough', price: '$145.00', file: 'pdf' },
    { method: 'CARDING - VERIZON', includes: 'Free walkthrough', price: '$130.00', file: 'pdf' },
    { method: 'TEXAS RENT RELIEF GRANT METHOD', includes: 'Free walkthrough', price: '$150.00', file: 'pdf' },
    { method: 'WELLS FARGO PERSONAL LOAN', includes: 'Free walkthrough', price: '$100.00', file: 'pdf' },
  ];

  return (
    <div className="table-responsive">
    <div className='d-flex justify-content-center my-4'>
            <p className='h4'>Methods</p>
    </div>
    <Table striped bordered hover style={{ backgroundColor: 'rgb(248, 248, 248)' }}>
      <thead>
        <tr>
          <th>Method</th>
          <th>Includes</th>
          <th>Price</th>
          <th>File</th>
          <th>Buy Now</th>
        </tr>
      </thead>
      <tbody>
        {methods.map((item, index) => (
          <tr key={index} className="active">
            <td>{item.method}</td>
            <td>{item.includes}</td>
            <td>{item.price}</td>
            <td><Badge className="blink_me" bg="success" >{item.file}</Badge></td>
            <td><Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button></td>
          </tr>
        ))}
      </tbody>
    </Table>
    </div>
  );
};

export default Methods;
