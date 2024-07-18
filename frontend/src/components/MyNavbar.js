import React, { useState,useContext } from 'react';
import { Navbar, Nav, NavDropdown, Button, ButtonGroup } from 'react-bootstrap';
import { IoHome } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';
import { Store } from '../Store';

const MyNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleClose = () => {
    setExpanded(false);
  };

  React.useEffect(() => {
    // Close the navbar whenever the location changes (i.e., a link is clicked)
    setExpanded(false);
  }, [location]);

  const { state, dispatch } = useContext(Store);  // Get the state and dispatch function from the Store
  const { userInfo } = state;  // Extract userInfo from the state

  const signoutHandler = () => {
    dispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    handleClose();
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" expanded={expanded}>
      <Navbar.Brand as={Link} to="/" style={{ width:'60px', display: 'flex', justifyContent:'center' }}>
        <Nav.Link as={Link} to="/" onClick={handleClose}><IoHome /></Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
      <Navbar.Collapse id="basic-navbar-nav">
      <Navbar.Collapse className="d-flex justify-content-start" style={{}}>
          <Nav className="mr-auto">
            {userInfo ? (
              <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                <NavDropdown.Item onClick={signoutHandler} >Sign Out</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="checkout" onClick={handleClose}>Deposit</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="myorders" onClick={handleClose}>MyOrders</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <ButtonGroup>
                <Button as={Link} to="signup" onClick={handleClose} style={{marginRight: '10px'}}>Sign up</Button>
                <Button as={Link} to="signin" onClick={handleClose}>Sign In</Button>
              </ButtonGroup>
            )}
          </Nav>
        </Navbar.Collapse>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/dumps" onClick={handleClose}>Dumps</Nav.Link>
          <NavDropdown title='Logs' id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/chaselogs" onClick={handleClose}>Chase Logs</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/chimelogs" onClick={handleClose}>Chime Logs</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/huntington" onClick={handleClose}>Huntington</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/citilogs" onClick={handleClose}>Citi Logs</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/boalogs" onClick={handleClose}>BOA Logs</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/wellsfargo" onClick={handleClose}>Wells Fargo</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/applelogs" onClick={handleClose}>Apple Logs</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/pnclogs" onClick={handleClose}>PNC Logs</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/suntrustlogs" onClick={handleClose}>Suntrust Logs</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="./paypal" onClick={handleClose}>Paypal</Nav.Link>
          <Nav.Link as={Link} to="./cashapp" onClick={handleClose}>Cashapp</Nav.Link>
          <NavDropdown title="Leads" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="usaleads" onClick={handleClose}>Usa Leads</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="./canadaleads" onClick={handleClose}>Canada Leads</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="alibabaleads" onClick={handleClose}>Alibaba Leads</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="singaporeleads" onClick={handleClose}>Singapore Leads</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="chinaleads" onClick={handleClose}>China Leads</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="hongkongleads" onClick={handleClose}>Hong Kong Leads</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="methods" onClick={handleClose}>Methods</Nav.Link>
          <NavDropdown title="Scam pages" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="bankscam" onClick={handleClose}>Bank Scam Pages</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="emailscam" onClick={handleClose}>Email Scam pages</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Spamming" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="./smtp" onClick={handleClose}>SMTP</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="phpmailer" onClick={handleClose}>PHP Mailer</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="rdp" onClick={handleClose}>RDP</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="cpanel" onClick={handleClose}>Cpanel</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Fullz" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="./usafullz" onClick={handleClose}>USA Fullz</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="canadafullz" onClick={handleClose}>Canada fullz</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="ukfullz" onClick={handleClose}>UK fullz</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="europefullz" onClick={handleClose}>Europe fullz</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="CC" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="visa" onClick={handleClose}>Visa</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="mastercard" onClick={handleClose}>MasterCard</NavDropdown.Item>
          </NavDropdown>
        
          <Nav.Link as={Link} to="softwares" onClick={handleClose}>Softwares</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
