import React from 'react';
import { Table, Alert, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Smtp = () => {
  return (
    <div className="table-responsive">
      <Alert variant="success">SMTP</Alert>
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
            <td>Office365 SMTP</td>
            <td>10k Daily</td>
            <td>Gmail, Yahoo, Outlook, Aol, Domain Emails</td>
            <td>1 Month</td>
            <td>65 USD</td>
            <td>
              <a href="./payment.html">
                <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
              </a>
            </td>
          </tr>
          <tr>
            <td>Mailgun SMTP</td>
            <td>10k Daily</td>
            <td>Gmail, Yahoo, Outlook, Aol, Domain Emails</td>
            <td>1 Month</td>
            <td>55 USD</td>
            <td>
              <a href="./payment.html">
                <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
              </a>
            </td>
          </tr>
          <tr>
            <td>SendGrid SMTP</td>
            <td>10k Daily</td>
            <td>Gmail, Yahoo, Outlook, Aol, Domain Emails</td>
            <td>1 Month</td>
            <td>75 USD</td>
            <td>
              <a href="./payment.html">
                <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
              </a>
            </td>
          </tr>
          <tr>
            <td>Amazon SES SMTP</td>
            <td>10k Daily</td>
            <td>Gmail, Yahoo, Outlook, Aol, Domain Emails</td>
            <td>1 Month</td>
            <td>50 USD</td>
            <td>
              <a href="./payment.html">
                <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
              </a>
            </td>
          </tr>
          <tr>
            <td>Digital Ocean</td>
            <td>10k Daily</td>
            <td>Gmail, Yahoo, Outlook, Aol, Domain Emails</td>
            <td>1 Month</td>
            <td>65 USD</td>
            <td>
              <a href="./payment.html">
                <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
              </a>
            </td>
          </tr>
          <tr>
            <td>Private SMTP</td>
            <td>10k Daily</td>
            <td>Gmail, Yahoo, Outlook, Aol, Domain Emails</td>
            <td>1 Month</td>
            <td>65 USD</td>
            <td>
            <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Smtp;
