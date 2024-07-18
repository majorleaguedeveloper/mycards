import React from 'react';
import { Table, Alert, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Rdp = () => {
  return (
    <div className="table-responsive">
      <Alert variant="success">RDP</Alert>
      <Table striped bordered style={{ backgroundColor: 'rgb(248, 248, 248)' }}>
        <thead>
          <tr>
            <th>RDP</th>
            <th>DETAILS</th>
            <th>INBOX</th>
            <th>Buy now</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>RDP</td>
            <td>RDP</td>
            <td>100 USD</td>
            <td>
              <a href="./payment.html">
                <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
              </a>
            </td>
          </tr>
          <tr>
            <td>RDP</td>
            <td>RDP</td>
            <td>65 USD</td>
            <td>
              <a href="./payment.html">
                <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
              </a>
            </td>
          </tr>
          <tr>
            <td>RDP</td>
            <td>RDP</td>
            <td>65 USD</td>
            <td>
              <a href="./payment.html">
                <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
              </a>
            </td>
          </tr>
          <tr>
            <td>RDP</td>
            <td>RDP</td>
            <td>50 USD</td>
            <td>
              <a href="./payment.html">
                <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
              </a>
            </td>
          </tr>
          <tr>
            <td>RDP</td>
            <td>RDP</td>
            <td>55 USD</td>
            <td>
            <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Rdp;
