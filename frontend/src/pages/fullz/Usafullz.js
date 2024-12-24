import React from 'react';
import { Table, Alert, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Usafullz = () => {
  return (
    <div className="table-responsive">
      <Alert variant="success">Fullz</Alert>
      <Table striped bordered style={{ backgroundColor: 'rgb(248, 248, 248)' }}>
        <thead>
          <tr>
            <th>US Fullz CVV</th>
            <th>Vendor</th>
            <th>Details</th>
            <th>Price</th>
            <th>Buy Now</th>
          </tr>
        </thead>
        <tbody>
          <tr className="active">
            <td>USA Fullz</td>
            <td>Kyle</td>
            <td>US dob+ssn CC Fullz(CVV) x10</td>
            <td>150$</td>
            <td>
              <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
            </td>
          </tr>
          <tr className="active">
            <td>USA Fullz</td>
            <td>Kyle</td>
            <td>US dob+ssn CC Fullz(CVV) x10</td>
            <td>170$</td>
            <td>
              <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
            </td>
          </tr>
          <tr className="active">
            <td>USA Fullz</td>
            <td>Kyle</td>
            <td>US dob+ssn CC Fullz(CVV) x10</td>
            <td>185$</td>
            <td>
              <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
            </td>
          </tr>
          <tr className="active">
            <td>USA Fullz</td>
            <td>Kyle</td>
            <td>US dob+ssn CC Fullz(CVV) x10</td>
            <td>200$</td>
            <td>
              <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
            </td>
          </tr>
          <tr className="active">
            <td>USA Fullz</td>
            <td>Kyle</td>
            <td>US dob+ssn CC Fullz(CVV) x10</td>
            <td>250$</td>
            <td>
              <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
            </td>
          </tr>
          <tr className="active">
            <td>USA Fullz</td>
            <td>Kyle</td>
            <td>US dob+ssn CC Fullz(CVV) x10</td>
            <td>268$</td>
            <td>
              <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
            </td>
          </tr>
          <tr className="active">
            <td>USA Fullz</td>
            <td>Kyle</td>
            <td>US dob+ssn CC Fullz(CVV) x10</td>
            <td>281$</td>
            <td>
              <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
            </td>
          </tr>
          <tr className="active">
            <td>USA Fullz</td>
            <td>Kyle</td>
            <td>US dob+ssn CC Fullz(CVV) x10</td>
            <td>290$</td>
            <td>
              <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
            </td>
          </tr>
          <tr className="active">
            <td>USA Fullz</td>
            <td>Kyle</td>
            <td>US dob+ssn CC Fullz(CVV) x10</td>
            <td>300$</td>
            <td>
              <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
            </td>
          </tr>
          <tr className="active">
            <td>USA Fullz</td>
            <td>Kyle</td>
            <td>US dob+ssn CC Fullz(CVV) x10</td>
            <td>325$</td>
            <td>
              <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
            </td>
          </tr>
          <tr className="active">
            <td>USA Fullz</td>
            <td>Kyle</td>
            <td>US dob+ssn CC Fullz(CVV) x10</td>
            <td>385$</td>
            <td>
              <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
            </td>
          </tr>
          <tr className="active">
            <td>USA Fullz</td>
            <td>Kyle</td>
            <td>US dob+ssn CC Fullz(CVV) x10</td>
            <td>392$</td>
            <td>
              <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
            </td>
          </tr>
          <tr className="active">
            <td>USA Fullz</td>
            <td>Kyle</td>
            <td>US dob+ssn CC Fullz(CVV) x10</td>
            <td>399$</td>
            <td>
              <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
            </td>
          </tr>
          <tr className="active">
            <td>USA Fullz</td>
            <td>Kyle</td>
            <td>US dob+ssn CC Fullz(CVV) x10</td>
            <td>415$</td>
            <td>
              <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
            </td>
          </tr>
          <tr className="active">
            <td>USA Fullz</td>
            <td>Kyle</td>
            <td>US dob+ssn CC Fullz(CVV) x10</td>
            <td>430$</td>
            <td>
              <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
            </td>
          </tr>
          <tr className="active">
            <td>USA Fullz</td>
            <td>Kyle</td>
            <td>US dob+ssn CC Fullz(CVV) x10</td>
            <td>455$</td>
            <td>
              <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Usafullz;
