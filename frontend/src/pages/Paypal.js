import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Paypal = () => {
  const logs = [
    { name: 'Paypal', includes: 'Email access -Disabled 2FA, Come with cookies -zelle enabled', balance: '$1,154.24', price: '$95.29', soldOut: true },
    { name: 'Paypal', includes: 'Email access -Disabled 2FA, Come with cookies -zelle enabled', balance: '$1,250.84', price: '$110.70', soldOut: false },
    { name: 'Paypal', includes: 'Email access -Disabled 2FA, Come with cookies -zelle enabled', balance: '$1,347.55', price: '$125.05', soldOut: false },
    { name: 'Paypal', includes: 'Email access -Disabled 2FA, Come with cookies -zelle enabled', balance: '$1,553.53', price: '$135.00', soldOut: false },
    { name: 'Paypal', includes: 'Email access -Disabled 2FA, Come with cookies -zelle enabled', balance: '$1,825.53', price: '$150.50', soldOut: false },
    { name: 'Paypal', includes: 'Email access -Disabled 2FA, Come with cookies -zelle enabled', balance: '$2,003.48', price: '$170.00', soldOut: true },
    { name: 'Paypal', includes: 'Email access -Disabled 2FA, Come with cookies -zelle enabled', balance: '$2,455.00', price: '$190.00', soldOut: false },
    { name: 'Paypal', includes: 'Email access -Disabled 2FA, Come with cookies -zelle enabled', balance: '$2,736.88', price: '$210.00', soldOut: false },
    { name: 'Paypal', includes: 'Email access -Disabled 2FA, Come with cookies -zelle enabled', balance: '$3,027.01', price: '$240.00', soldOut: false },
    { name: 'Paypal', includes: 'Email access -Disabled 2FA, Come with cookies -zelle enabled', balance: '$3,163.56', price: '$285.00', soldOut: false },
    { name: 'Paypal', includes: 'Email access -Disabled 2FA, Come with cookies -zelle enabled', balance: '$3,474.90', price: '$330.00', soldOut: false },
    { name: 'Paypal', includes: 'Email access -Disabled 2FA, Come with cookies -zelle enabled', balance: '$3,600.43', price: '$360.00', soldOut: false },
    { name: 'Paypal', includes: 'Email access -Disabled 2FA, Come with cookies -zelle enabled', balance: '$3,925.90', price: '$380.00', soldOut: false },
    { name: 'Paypal', includes: 'Email access -Disabled 2FA, Come with cookies -zelle enabled', balance: '$4,117.86', price: '$410.00', soldOut: false },
    { name: 'Paypal', includes: 'Email access -Disabled 2FA, Come with cookies -zelle enabled', balance: '$4,417.86', price: '$440.00', soldOut: false },
    { name: 'Paypal', includes: 'Email access -Disabled 2FA, Come with cookies -zelle enabled', balance: '$4,684.35', price: '$460.00', soldOut: false },
    { name: 'Paypal', includes: 'Email access -Disabled 2FA, Come with cookies -zelle enabled', balance: '$4,853.57', price: '$480.00', soldOut: false },
    { name: 'Paypal', includes: 'Email access -Disabled 2FA, Come with cookies -zelle enabled', balance: '$5,024.42', price: '$500.00', soldOut: false },
    { name: 'Paypal', includes: 'Email access -Disabled 2FA, Come with cookies -zelle enabled', balance: '$5,604.42', price: '$560.00', soldOut: false },
    { name: 'Paypal', includes: 'Email access -Disabled 2FA, Come with cookies -zelle enabled', balance: '$6,695.93', price: '$663.00', soldOut: false },
    { name: 'Paypal', includes: 'Email access -Disabled 2FA, Come with cookies -zelle enabled', balance: '$6,961.19', price: '$681.00', soldOut: false },
    { name: 'Paypal', includes: 'Email access -Disabled 2FA, Come with cookies -zelle enabled', balance: '$6,999.24', price: '$690.00', soldOut: false },
    { name: 'Paypal', includes: 'Email access -Disabled 2FA, Come with cookies -zelle enabled', balance: '$7,184.32', price: '$699.00', soldOut: false },
    { name: 'Paypal', includes: 'Email access -Disabled 2FA, Come with cookies -zelle enabled', balance: '$7,223.98', price: '$724.00', soldOut: false },
    { name: 'Paypal', includes: 'Email access -Disabled 2FA, Come with cookies -zelle enabled', balance: '$7,247.81', price: '$727.00', soldOut: false },
    { name: 'Paypal', includes: 'Email access -Disabled 2FA, Come with cookies -zelle enabled', balance: '$7,462.14', price: '$738.00', soldOut: false },
    { name: 'Paypal', includes: 'Email access -Disabled 2FA, Come with cookies -zelle enabled', balance: '$7,639.54', price: '$754.00', soldOut: false },
    { name: 'Paypal', includes: 'Email access -Disabled 2FA, Come with cookies -zelle enabled', balance: '$7,697.17', price: '$759.00', soldOut: false },
    { name: 'Paypal', includes: 'Email access -Disabled 2FA, Come with cookies -zelle enabled', balance: '$7,737.68', price: '$767.00', soldOut: false },
    { name: 'Paypal', includes: 'Email access -Disabled 2FA, Come with cookies -zelle enabled', balance: '$8,215.94', price: '$791.00', soldOut: false },
  ];

  return (
    <div className="table-responsive">
        <div className='d-flex justify-content-center my-4'>
            <p className='h4'>Paypal Logs</p>
        </div>
        <Table striped bordered hover>
          <thead style={{ backgroundColor: 'rgb(248, 248, 248)' }}>
            <tr>
              <th>Logs Name</th>
              <th>Includes</th>
              <th>Balance</th>
              <th>Price</th>
              <th>Buy Now</th>
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
                  {log.soldOut ? (
                    <Button variant="success" style={{ backgroundColor: 'red' , width:'100px'}} >
                      <marquee>SOLD OUT</marquee>
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

export default Paypal;
