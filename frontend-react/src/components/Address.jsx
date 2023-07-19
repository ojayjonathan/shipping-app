import React from "react";
import { Grid, MenuItem, TextField } from "@mui/material";
import countries from "../ISO3166-1.alpha2.json";

const Address = ({ addressComponents, handleAddressComponentsChange }) => {
  const { country, city, state, zip, street1, street2, name, phone, email } =
    addressComponents;

  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={4}>
        <TextField
          select
          label="Country"
          fullWidth
          value={country}
          onChange={(e) =>
            handleAddressComponentsChange({ country: e.target.value })
          }
          required
          helperText="ISO 3166 country code (e.g., US, CA, GB)"
        >
          {Object.keys(countries).map((countryCode) => (
            <MenuItem key={countryCode} value={countryCode}>
              {countries[countryCode]}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={6} md={4}>
        <TextField
          label="City"
          fullWidth
          value={city}
          onChange={(e) =>
            handleAddressComponentsChange({ city: e.target.value })
          }
          required
          helperText="Full city name (e.g., San Francisco)"
        />
      </Grid>
      <Grid item xs={6} md={4}>
        <TextField
          label="State"
          fullWidth
          value={state}
          onChange={(e) =>
            handleAddressComponentsChange({ state: e.target.value })
          }
          required
          helperText="State or province (e.g., CA, NY, ON)"
        />
      </Grid>
      <Grid item xs={6} md={4}>
        <TextField
          label="ZIP"
          fullWidth
          value={zip}
          onChange={(e) =>
            handleAddressComponentsChange({ zip: e.target.value })
          }
          required
          helperText="ZIP or postal code (e.g., 94104)"
        />
      </Grid>
      <Grid item xs={6} md={4}>
        <TextField
          label="Street 1"
          fullWidth
          value={street1}
          onChange={(e) =>
            handleAddressComponentsChange({ street1: e.target.value })
          }
          required
          helperText="First line of the address (e.g., 417 Montgomery Street)"
        />
      </Grid>
      <Grid item xs={6} md={4}>
        <TextField
          label="Street 2"
          fullWidth
          value={street2}
          onChange={(e) =>
            handleAddressComponentsChange({ street2: e.target.value })
          }
          helperText="Second line of the address (e.g., Floor 5)"
        />
      </Grid>
      <Grid item xs={6} md={4}>
        <TextField
          label="Name"
          fullWidth
          value={name}
          onChange={(e) =>
            handleAddressComponentsChange({ name: e.target.value })
          }
          helperText="Name of attention, if person (e.g., Hiro Protagonist)"
        />
      </Grid>
      <Grid item xs={6} md={4}>
        <TextField
          label="Phone"
          fullWidth
          value={phone}
          onChange={(e) =>
            handleAddressComponentsChange({ phone: e.target.value })
          }
          required
          helperText="Phone number to reach the person or organization (e.g., 415-123-4567)"
        />
      </Grid>
      <Grid item xs={6} md={4}>
        <TextField
          label="Email"
          fullWidth
          value={email}
          onChange={(e) =>
            handleAddressComponentsChange({ email: e.target.value })
          }
          helperText="Email to reach the person or organization (e.g., example@example.com)"
        />
      </Grid>
    </Grid>
  );
};

export default Address;
