import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Dumps = () => {
  const data = [
    { bin: '356018', type: '101', track: '1&2', pin: true, country: 'USA', price: '$55.00', availability: 'Available' },
    { bin: '490638', type: '101', track: '1&2', pin: true, country: 'AUS', price: '$70.00', availability: 'Buy Now' },
    { bin: '455620', type: '101', track: '1', pin: true, country: 'USA', price: '$65.00', availability: 'Buy Now' },
    { bin: '455620', type: '101', track: '1', pin: true, country: 'AUS', price: '$77.00', availability: 'Buy Now' },
    { bin: '546812', type: '101', track: '1&2', pin: true, country: 'AUS', price: '$82.00', availability: 'Buy Now' },
    { bin: '475139', type: '101', track: '1&2', pin: true, country: 'UK', price: '$45.00', availability: 'Buy Now' },
    { bin: '462730', type: '102', track: '1', pin: false, country: 'AUS', price: '$83.00', availability: 'Buy Now' },
    { bin: '455600', type: '101', track: '1&2', pin: true, country: 'AUS', price: '$61.00', availability: 'Buy Now' },
    { bin: '455206', type: '101', track: '1&2', pin: true, country: 'USA', price: '$92.00', availability: 'Buy Now' },
    { bin: '575287', type: '102', track: '2', pin: true, country: 'UK', price: '$41.00', availability: 'Sold Out' },
    { bin: '490638', type: '101', track: '1&2', pin: true, country: 'AUS', price: '$100.00', availability: 'Buy Now' },
    { bin: '520309', type: '102', track: '1&2', pin: true, country: 'USA', price: '$108.00', availability: 'Buy Now' },
    { bin: '377064', type: '101', track: '1&2', pin: true, country: 'USA', price: '$60.00', availability: 'Buy Now' },
    { bin: '753459', type: '101', track: '2', pin: true, country: 'USA', price: '$150.00', availability: 'Buy Now' },
    { bin: '520309', type: '101', track: '1&2', pin: true, country: 'AUS', price: '$95.00', availability: 'Buy Now' },
    { bin: '651528', type: '101', track: '1', pin: true, country: 'USA', price: '$170.00', availability: 'Buy Now' },
    { bin: '376469', type: '101', track: '1', pin: true, country: 'UK', price: '$180.00', availability: 'Buy Now' },
    { bin: '476848', type: '101', track: '1&2', pin: true, country: 'USA', price: '$200.00', availability: 'Buy Now' },
    { bin: '460312', type: '101', track: '1&2', pin: true, country: 'AUS', price: '$215.00', availability: 'Buy Now' },
    { bin: '455600', type: '102', track: '1&2', pin: true, country: 'AUS', price: '$350.00', availability: 'Buy Now' },
    { bin: '465861', type: '101', track: '1&2', pin: true, country: 'USA', price: '$410.00', availability: 'Buy Now' },
    { bin: '465859', type: '101', track: '1&2', pin: true, country: 'UK', price: '$350.00', availability: 'Buy Now' },
    { bin: '450875', type: '101', track: '1&2', pin: true, country: 'UK', price: '$300.00', availability: 'Buy Now' },
    { bin: '465861', type: '102', track: '1&2', pin: false, country: 'USA', price: '$280.00', availability: 'Buy Now' },
    { bin: '579305', type: '101', track: '1&2', pin: true, country: 'UK', price: '$480.00', availability: 'Buy Now' },
    { bin: '462730', type: '101', track: '1&2', pin: true, country: '100', price: '$330.00', availability: 'Buy Now' },
    { bin: '455600', type: '101', track: '1', pin: true, country: 'AUS', price: '$300.00', availability: 'Buy Now' },
    { bin: '546812', type: '101', track: '1', pin: true, country: 'AUS', price: '$400.00', availability: 'Buy Now' },
    { bin: '310684', type: '101', track: '1&2', pin: true, country: 'USA', price: '$450.00', availability: 'Buy Now' },
    { bin: '909155', type: '101', track: '1', pin: true, country: '100', price: '$400.00', availability: 'Buy Now' }
  ];

  return (
    <div className="table-responsive">
    <div className='d-flex justify-content-center my-4'>
      <p className='h4'>Dumps</p>
    </div>

    <Table className="table" striped bordered hover style={{ backgroundColor: 'rgb(248, 248, 248)' }}>
      <thead>
        <tr>
          <th>BIN</th>
          <th>Type</th>
          <th>Track</th>
          <th>Pin</th>
          <th>Country</th>
          <th>Price</th>
          <th>Buy</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr className="active" key={index}>
            <td>{item.bin}</td>
            <td>{item.type}</td>
            <td>{item.track}</td>
            <td>{item.pin ? <FaCheckCircle style={{ fontSize: '15px' }} /> : <FaTimesCircle style={{ fontSize: '15px' }} />}</td>
            <td>{item.country}</td>
            <td>{item.price}</td>
            <td>
              <Button style={{ width: '100px' }} as={Link} to="/checkout" variant="success">
                {item.availability}
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    </div>
  );
};

export default Dumps;
