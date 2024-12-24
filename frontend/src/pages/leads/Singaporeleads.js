import React from 'react';
import { Table, Alert, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Singaporeleads = () => {
  return (
    <div className="table-responsive">
      <Alert variant="success">Leads</Alert>
      <Table striped bordered style={{ backgroundColor: 'rgb(248, 248, 248)' }}>
        <thead>
          <tr>
            <th>SINGAPORE LEADS</th>
            <th>DETAILS</th>
            <th>PRICE</th>
            <th>Buy now</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>SINGAPORE LEADS</td>
            <td>SINGAPORE LEADS</td>
            <td>150 USD</td>
            <td>
              <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
            </td>
          </tr>
          <tr>
            <td>SINGAPORE LEADS</td>
            <td>SINGAPORE LEADS</td>
            <td>150 USD</td>
            <td>
              <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
            </td>
          </tr>
          <tr>
            <td>SINGAPORE LEADS</td>
            <td>SINGAPORE LEADS</td>
            <td>150 USD</td>
            <td>
              <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
            </td>
          </tr>
          <tr>
            <td>SINGAPORE LEADS</td>
            <td>SINGAPORE LEADS</td>
            <td>150 USD</td>
            <td>
              <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
            </td>
          </tr>
          <tr>
            <td>SINGAPORE LEADS</td>
            <td>SINGAPORE LEADS</td>
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

export default Singaporeleads;
