import React, { useState } from "react";

const Checkout = () => {
  const bitcoinAddress = "18ePFWcGDCAonAMq3YriU1DM1MdJtYiTiA";
  const ethereumAddress = "0xac42ef2dc7344d18e8e032c05d88753b1db75ea4";
  const usdtAddress = "0xac42ef2dc7344d18e8e032c05d88753b1db75ea4";

  const [buttonStyles, setButtonStyles] = useState({
    bitcoin: { ...styles.button },
    ethereum: { ...styles.button },
    usdt: { ...styles.button },
  });

  const handleMouseDown = (cryptoType) => {
    setButtonStyles((prevStyles) => ({
      ...prevStyles,
      [cryptoType]: { ...prevStyles[cryptoType], opacity: 0.4 },
    }));
  };

  const handleMouseUp = (cryptoType) => {
    setButtonStyles((prevStyles) => ({
      ...prevStyles,
      [cryptoType]: { ...prevStyles[cryptoType], opacity: 1 },
    }));
  };

  const handleTouchStart = (cryptoType) => {
    handleMouseDown(cryptoType);
  };

  const handleTouchEnd = (cryptoType) => {
    handleMouseUp(cryptoType);
  };

  const copyToClipboard = (address) => {
    const el = document.createElement('textarea');
    el.value = address;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    console.log(`Copied the address: ${address}`);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Pay with Cryptocurrency</h1>
      <p style={styles.paragraph}>Scan the QR code or copy the address to send your payment.</p>

      <div style={styles.cryptoContainer}>
        <h2 style={styles.cryptoHeader}>Bitcoin</h2>
        <img src={'../images/btc.png'} alt="Bitcoin QR Code" style={styles.qrCode} />
        <div style={styles.addressContainer}>
          <input
            type="text"
            value={bitcoinAddress}
            readOnly
            style={styles.input}
          />
          <button
            onMouseDown={() => handleMouseDown('bitcoin')}
            onMouseUp={() => handleMouseUp('bitcoin')}
            onTouchStart={() => handleTouchStart('bitcoin')}
            onTouchEnd={() => handleTouchEnd('bitcoin')}
            onClick={() => copyToClipboard(bitcoinAddress)}
            style={buttonStyles.bitcoin}
          >
            Copy
          </button>
        </div>
      </div>

      <div style={styles.cryptoContainer}>
        <h2 style={styles.cryptoHeader}>Ethereum</h2>
        <img src={'../images/eth.png'} alt="Ethereum QR Code" style={styles.qrCode} />
        <div style={styles.addressContainer}>
          <input
            type="text"
            value={ethereumAddress}
            readOnly
            style={styles.input}
          />
          <button
            onMouseDown={() => handleMouseDown('ethereum')}
            onMouseUp={() => handleMouseUp('ethereum')}
            onTouchStart={() => handleTouchStart('ethereum')}
            onTouchEnd={() => handleTouchEnd('ethereum')}
            onClick={() => copyToClipboard(ethereumAddress)}
            style={buttonStyles.ethereum}
          >
            Copy
          </button>
        </div>
      </div>

      <div style={styles.cryptoContainer}>
        <h2 style={styles.cryptoHeader}>USDT</h2>
        <img src={'../images/usdt.png'} alt="USDT QR Code" style={styles.qrCode} />
        <div style={styles.addressContainer}>
          <input
            type="text"
            value={usdtAddress}
            readOnly
            style={styles.input}
          />
          <button
            onMouseDown={() => handleMouseDown('usdt')}
            onMouseUp={() => handleMouseUp('usdt')}
            onTouchStart={() => handleTouchStart('usdt')}
            onTouchEnd={() => handleTouchEnd('usdt')}
            onClick={() => copyToClipboard(usdtAddress)}
            style={buttonStyles.usdt}
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#f8f9fa',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    marginTop: '50px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    color: '#343a40',
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  paragraph: {
    color: '#6c757d',
    fontSize: '1.2rem',
    marginBottom: '40px',
  },
  cryptoContainer: {
    margin: '40px 0',
  },
  cryptoHeader: {
    color: '#007bff',
    fontSize: '1.8rem',
    marginBottom: '20px',
  },
  qrCode: {
    width: '200px',
    height: '200px',
    marginBottom: '20px',
    borderRadius: '10px',
  },
  addressContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  },
  input: {
    width: '300px',
    padding: '10px',
    marginRight: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '1rem',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.3s, opacity 0.3s',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
};

export default Checkout;
