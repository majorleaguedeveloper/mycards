import React from 'react';
import { Table, Alert, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Phpmailer = () => {
  return (
    <div className="table-responsive">
      <Alert variant="success">Php Mailer</Alert>
      <Table striped bordered style={{ backgroundColor: 'rgb(248, 248, 248)' }}>
        <thead>
          <tr>
            <th>SMTP NAME</th>
            <th>LIMIT</th>
            <th>INBOX</th>
            <th>DURATION</th>
            <th>PRICE</th>
            <th>Buy now</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Unlimited Mailer</td>
            <td>10k Daily</td>
            <td>Gmail, Yahoo, Outlook, Aol, Domain Emails</td>
            <td>1 Month</td>
            <td>$65.33</td>
            <td>
              <a href="./payment.html">
                <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
              </a>
            </td>
          </tr>
          <tr>
            <td>PHP Mailer 5.x</td>
            <td>10k Daily</td>
            <td>Gmail, Yahoo, Outlook, Aol, Domain Emails</td>
            <td>1 Month</td>
            <td>$70.12</td>
            <td>
              <a href="./payment.html">
                <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
              </a>
            </td>
          </tr>
          <tr>
            <td>Leaf mailer</td>
            <td>10k Daily</td>
            <td>Gmail, Yahoo, Outlook, Aol, Domain Emails</td>
            <td>1 Month</td>
            <td>$90.22</td>
            <td>
            <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Phpmailer;
