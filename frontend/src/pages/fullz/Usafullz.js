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
            <td>90$</td>
            <td>
              <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
            </td>
          </tr>
          <tr className="active">
            <td>USA Fullz</td>
            <td>Kyle</td>
            <td>US dob+ssn CC Fullz(CVV) x10</td>
            <td>100$</td>
            <td>
              <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
            </td>
          </tr>
          <tr className="active">
            <td>USA Fullz</td>
            <td>Kyle</td>
            <td>US dob+ssn CC Fullz(CVV) x10</td>
            <td>115$</td>
            <td>
              <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
            </td>
          </tr>
          <tr className="active">
            <td>USA Fullz</td>
            <td>Kyle</td>
            <td>US dob+ssn CC Fullz(CVV) x10</td>
            <td>140$</td>
            <td>
              <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
            </td>
          </tr>
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
            <td>168$</td>
            <td>
              <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
            </td>
          </tr>
          <tr className="active">
            <td>USA Fullz</td>
            <td>Kyle</td>
            <td>US dob+ssn CC Fullz(CVV) x10</td>
            <td>181$</td>
            <td>
              <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
            </td>
          </tr>
          <tr className="active">
            <td>USA Fullz</td>
            <td>Kyle</td>
            <td>US dob+ssn CC Fullz(CVV) x10</td>
            <td>190$</td>
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
            <td>225$</td>
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
            <td>192$</td>
            <td>
              <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
            </td>
          </tr>
          <tr className="active">
            <td>USA Fullz</td>
            <td>Kyle</td>
            <td>US dob+ssn CC Fullz(CVV) x10</td>
            <td>199$</td>
            <td>
              <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
            </td>
          </tr>
          <tr className="active">
            <td>USA Fullz</td>
            <td>Kyle</td>
            <td>US dob+ssn CC Fullz(CVV) x10</td>
            <td>215$</td>
            <td>
              <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
            </td>
          </tr>
          <tr className="active">
            <td>USA Fullz</td>
            <td>Kyle</td>
            <td>US dob+ssn CC Fullz(CVV) x10</td>
            <td>230$</td>
            <td>
              <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
            </td>
          </tr>
          <tr className="active">
            <td>USA Fullz</td>
            <td>Kyle</td>
            <td>US dob+ssn CC Fullz(CVV) x10</td>
            <td>255$</td>
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
