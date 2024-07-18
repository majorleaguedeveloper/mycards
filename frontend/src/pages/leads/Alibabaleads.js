import React from 'react';
import { Table, Alert, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Alibabaleads = () => {
  return (
    <div className="table-responsive">
      <Alert variant="success">ALIBABA LEADS</Alert>
      <Table striped bordered style={{ backgroundColor: 'rgb(248, 248, 248)' }}>
        <thead>
          <tr>
            <th>ALIBABA LEADS</th>
            <th>DETAILS</th>
            <th>includes</th>
            <th>Balances</th>
            <th>PRICE</th>
            <th>status</th>
            <th>Buy now</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ALIBABA LEADS</td>
            <td>Chase Savings Account</td>
            <td>
              Onine Access, Email Access, Security Questions, And Answers SSN,
              Card Information, Address, Support Pin
            </td>
            <td>$1,111.11</td>
            <td>$100</td>
            <td title="live">
              <div className="liveDot"></div>
            </td>
            <td>
              <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
            </td>
          </tr>
          <tr>
            <td>ALIBABA LEADS</td>
            <td>Chase Savings Account</td>
            <td>
              Onine Access, Email Access, Security Questions, And Answers SSN,
              Card Information, Address, Support Pin
            </td>
            <td>$1,530.11</td>
            <td>$150</td>
            <td title="live">
              <div className="liveDot"></div>
            </td>
            <td>
              <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
            </td>
          </tr>
          <tr>
            <td>ALIBABA LEADS</td>
            <td>Chase Savings Account</td>
            <td>
              Onine Access, Email Access, Security Questions, And Answers SSN,
              Card Information, Address, Support Pin
            </td>
            <td>$1,950.89</td>
            <td>$190</td>
            <td title="live">
              <div className="liveDot"></div>
            </td>
            <td>
              <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
            </td>
          </tr>
          {/* Repeat similar rows for other data */}
        </tbody>
      </Table>
    </div>
  );
};

export default Alibabaleads;
