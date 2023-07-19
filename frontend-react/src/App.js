import React, { useEffect, useState } from 'react';
import './App.css';
import { Card, CardContent, Container, Grid, Typography, Button } from '@mui/material';
import Address from './components/Address';
import Parcel from './components/Parcel';
import ShippingRates from './components/ShippingRates';

function App() {
  const [fromAddress, setFromAddress] = useState({
    country: 'US',
    city: 'San Francisco',
    state: 'CA',
    zip: '94104',
    street1: '417 Montgomery St',
    street2: 'Floor 5',
    name: 'Hiro Protagonist',
    phone: '415-123-4567',
    email: 'example@example.com',
  });

  const [toAddress, setToAddress] = useState({
    country: 'US',
    city: 'New York',
    state: 'NY',
    zip: '10001',
    street1: '123 Broadway',
    name: 'John Doe',
    phone: '212-555-7890',
  });

  const [parcel, setParcel] = useState({});
  const [rates, setRates] = useState()
  const [isLoading, setLoading] = useState(false)

  const handleAddressComponentsChange = (addressType, addressData) => {
    if (addressType === 'from') {
      setFromAddress({ ...fromAddress, ...addressData });
    } else if (addressType === 'to') {
      setToAddress({ ...toAddress, ...addressData });
    }
  };

  const handleParcelChange = (parcelData) => {
    setParcel({ ...parcel, ...parcelData });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      fromAddress,
      toAddress,
      parcel,
    };

    setLoading(true)
    try {
      const response = await fetch('http://127.0.0.1:5000/shipment_price', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      console.log(responseData);
      setRates(responseData);
    } catch (error) {
      console.error('Error:', error);
      window.alert(error.error);
    }
    setLoading(false)
  };
  const scrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  useEffect(() => {
    if (rates && rates.length > 0) {
      scrollToBottom();
    }
  }, [rates]);
  return (
    <div className="App">
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant='h3' sx={{ my: 5 }}>Shipping Rates</Typography>
        <Grid container spacing={2} justifyContent="center">
          <Card variant="outlined">
            <CardContent>
              <form onSubmit={handleSubmit}>
                {/* From Address */}
                <Typography variant="h6">From Address</Typography>
                <Address
                  addressComponents={fromAddress}
                  handleAddressComponentsChange={(data) =>
                    handleAddressComponentsChange('from', data)
                  }
                />

                {/* To Address */}
                <Typography variant="h6" sx={{ mt: 4 }}>
                  To Address
                </Typography>
                <Address
                  addressComponents={toAddress}
                  handleAddressComponentsChange={(data) => handleAddressComponentsChange('to', data)}
                />

                {/* Parcel */}
                <Typography variant="h6" sx={{ mt: 4 }}>
                  Parcel
                </Typography>
                <Parcel parcel={parcel} handleParcelChange={handleParcelChange} />

                {/* Submit Button */}
                <br/>
                <Button variant="contained" color="primary" type='submit' disabled={isLoading}>
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
          {
            rates != null && <ShippingRates rates={rates} />
          }
        </Grid>
      </Container>
    </div>
  );
}

export default App;
