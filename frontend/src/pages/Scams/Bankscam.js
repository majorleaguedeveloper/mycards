import React from 'react';
import { Table, Alert, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Bankscam = () => {
  return (
    <div className="table-responsive">
      <Alert variant="success">Bank</Alert>
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
            <td>Boa Scampage</td>
            <td>Online Access, Email Access, Debit card info Anti Bots.....</td>
            <td>150 USD</td>
            <td>
              <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
            </td>
          </tr>
          <tr>
            <td>Wells Fargo Scampage</td>
            <td>Online Access, Email Access, Debit card info + Anti Bots.....</td>
            <td>130 USD</td>
            <td>
              <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
            </td>
          </tr>
          <tr>
            <td>Chase Scampage</td>
            <td>Online Access, Email Access, Debit card info + Anti Bots.....</td>
            <td>170 USD</td>
            <td>
              <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
            </td>
          </tr>
          <tr>
            <td>53RD Bank Scampage</td>
            <td>Online Access, Email Access, Debit card info + Anti Bots.....</td>
            <td>100 USD</td>
            <td>
              <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
            </td>
          </tr>
          <tr>
            <td>CITI Scampage</td>
            <td>Online Access, Email Access, Debit card info + Anti Bots.....</td>
            <td>150 USD</td>
            <td>
              <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Bankscam;
