import React, { useState, useEffect } from 'react';
import { Table, Button, Alert, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Navyfederrallogs = () => {
  // Function to generate random balances
  const generateBalance = () => {
    return (Math.random() * (1000 - 100) + 200).toFixed(2); // generates a balance between $200 and $5000
  };

  // Initialize table data
  const initialTableData = Array.from({ length: 100 }, () => {
    const balance = generateBalance();
    return {
      details: "Online Access,Email Access, DOB,Cookies,Q&A Gender,Ssn, Address, Acct&Rn license NO,ZelleON",
      balance: `$${balance}`,
      price: `$${(parseFloat(balance) / 10).toFixed(2)}`,
      bought: false, // Initially, no item is bought
    };
  });

  const [tableData, setTableData] = useState(initialTableData);

  useEffect(() => {
    const timers = tableData.map((_, index) => {
      // Set a random timeout for each item to change to "Bought"
      const randomTimeout = Math.floor(Math.random() * 120000); // Random time under 2 minutes
      return setTimeout(() => {
        setTableData((prevData) => {
          const newData = [...prevData];
          newData[index].bought = true; // Mark item as bought
          return newData;
        });

        // Set a timeout to reset the "bought" status and update the price
        setTimeout(() => {
          setTableData((prevData) => {
            const newData = [...prevData];
            const balance = generateBalance(); // Generate new balance
            newData[index] = {
              ...newData[index],
              bought: false, // Reset bought status
              balance: `$${balance}`,
              price: `$${(parseFloat(balance) / 10).toFixed(2)}`, // Update price
            };
            return newData;
          });
        }, Math.floor(Math.random() * 60000)); // Random time under 1 minute
      }, randomTimeout);
    });

    // Cleanup timeouts when the component unmounts
    return () => timers.forEach((timer) => clearTimeout(timer));
  }, [tableData]);

  return (
    <Container>
      <Alert variant="success">NAVY FEDERAL BANK LOGS</Alert>
      <Table responsive style={{ backgroundColor: 'white' }}>
        <thead>
          <tr>
            <th>Logs Name</th>
            <th>Includes</th>
            <th>Balance</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index} className="active">
              <td>Navyfederrallogs</td>
              <td>{item.details}</td>
              <td>{item.balance}</td>
              <td>{item.price}</td>
              <td>
                {item.bought ? (
                  <Button style={{ width: '100px' }} variant="danger" disabled>
                    Booked !!!
                  </Button>
                ) : (
                  <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">
                    Buy Now
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Navyfederrallogs;
