import React from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8} style={{ boxShadow: '0px 0px 5px', backgroundColor: 'white', padding: '25px', marginBottom: '10px' }}>
            <div>
              <button>Buyer</button>
              <button>Seller</button>
            </div>
          <p style={{ fontSize: '20px', fontWeight: 'bold' }}>QUICK START</p>
          <p style={{ fontSize: '15px' }}>
            Welcome to VirginAccounts! VirginAccounts is thrilled to have you on board. Our mission is to provide top-quality products and discreet shipping making your experience seamless as possible.
          </p>
          <p style={{ fontSize: '15px' }}>
            Stay tuned for exciting news about new product launches and exclusive promotions. VirginAccounts only reach out when we have something valuable to share.
          </p>
          <p style={{ fontSize: '15px' }}>
            Our tools are guaranteed to be live and functional. We perform daily checks to ensure the quality of our inventory, so you can shop with confidence. Should you encounter any issues, we’ve got you covered.
          </p>
          <p style={{ fontSize: '15px' }}>
            We adhere to the principle that "The Customer is Always Right," as long as the customer’s requests align with our store policies.
          </p>
          <Alert variant="warning" className="my-3">
            <p style={{ fontSize: '15px' }}>
              Attention! Dispute period has been reduced to 30 minutes upon report. Cashbacks are now available as opposed to the product replacements as per prior policies.
            </p>
          </Alert>
          <p style={{ fontSize: '15px' }}>
            We strive to resolve all issues swiftly. If you face access issues, we will quickly replace the product. If the balance is lower than expected, we will adjust the cost and refund the difference to your account.
          </p>
          <p style={{ fontSize: '20px', fontWeight: 'bold' }}>PAYMENTS</p>
          <p style={{ fontSize: '15px', fontWeight: 'bold' }}>How to Deposit:</p>
          <p style={{ fontSize: '15px' }}>1. Click on "Add Balance."</p>
          <p style={{ fontSize: '15px' }}>2. Enter your email address.</p>
          <p style={{ fontSize: '15px' }}>3. Select a payment method: BTC,USDT or Ethereum.</p>
          <p style={{ fontSize: '15px' }}>4. Copy the address and paste it into your payment wallet.</p>
          <p style={{ fontSize: '15px' }}>5. Refresh the page and wait for the payment to complete.</p>

          
          <p style={{ fontSize: '20px', fontWeight: 'bold' }}>PURCHASES</p>
          <p style={{ fontSize: '15px', fontWeight: 'bold' }}>Making purchases:</p>
          <p style={{ fontSize: '15px' }}>1. Make sure your account balance can cater for the product price</p>
          <p style={{ fontSize: '15px' }}>2. Make an order</p>
          <p style={{ fontSize: '15px' }}>3. Navigate to MyOrders page on the profile to obtain access details for the paid product</p>
          <p style={{ fontSize: '15px' }}>4. Mark order as functional or not within 30 minutes of purchase for easy dispute if need be </p>
          <p style={{ fontSize: '15px' }}>5. Refresh page if you can't see details at first sight.</p>
          <Alert variant="danger" className="text-center">
            <p style={{ fontSize: '15px' }}>
              Please do not close the page unless you cancel the order, or wait to be redirected after payment to avoid loss of funds.
            </p>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
