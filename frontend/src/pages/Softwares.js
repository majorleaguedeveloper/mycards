import React from 'react';
import { Table, Button, Alert, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Softwares = () => {
  const tableData = [
    { name: "Social Media Auto-Exploit( FB,IG,X)", includes: "software file (APK, IOS, EXE, Custom versions)", price: "$98.45", buyNowLink: "/payment.html" },
    { name: "GM exploit AUTO software", includes: "software file (APK, IOS, EXE, Custom versions)", price: "$127.85", buyNowLink: "/payment.html" },
    { name: "OTP receiver 3D payment getaway, up-to-date", includes: "software file (APK, IOS, EXE, Custom versions)", price: "$130.00", buyNowLink: "/payment.html" },
    { name: "CRYPTO EXTRACTOR (BTC, DarkUsdt, ETH)", includes: "software file (APK, IOS, EXE, Custom versions)", price: "$135.59", buyNowLink: "/payment.html", isNew: true },
    { name: "SPECIAL DEAL - PREMIUM SUBSCRIPTION", includes: "Get all softwares in this page, new software notification", price: "$495.50", buyNowLink: "/payment.html", isHot: true }
  ];

  return (
    <Container>
      <Alert variant="success">softwares</Alert>
      <Alert variant="danger">
        NOTICE! <br />SOFTWARE IS ENCRYPTED, FAILURE TO PAY BEFORE DOWLOAD RESTRICTS YOUR ACCESS
      </Alert>
      <Table responsive style={{ backgroundColor: 'rgb(228, 99, 99)' }}>
        <thead>
          <tr>
            <th>Softwares (APK, IOS, EXE, Custom versions)</th>
            <th>Includes</th>
            <th>Price</th>
            <th>Buy now</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index} className="active">
              <td>
                {item.name}
                {item.isNew && <span className="new"><Button variant="link" style={{ border: 'none' }}><b><marquee>NEW!! NEW!!</marquee></b></Button></span>}
                {item.isHot && <span className="hot"><Button variant="link" style={{ border: 'none' }}><b><marquee>HOT 🔥 HOT 🔥</marquee></b></Button></span>}
              </td>
              <td>{item.includes}</td>
              <td>{item.price}</td>
              <td>
              <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">Buy Now</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Softwares;
