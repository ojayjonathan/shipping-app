import React from "react";
import { Grid, TextField } from "@mui/material";

const Parcel = ({ parcel, handleParcelChange }) => {
  const { length, width, height, weight } = parcel;

  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={4}>
        <TextField
          label="Length (cm)"
          fullWidth
          value={length}
          onChange={(e) => handleParcelChange({ length: e.target.value })}
          required
          type="number"
        />
      </Grid>
      <Grid item xs={6} md={4}>
        <TextField
          label="Width (cm)"
          fullWidth
          value={width}
          onChange={(e) => handleParcelChange({ width: e.target.value })}
          required
          type="number"
        />
      </Grid>
      <Grid item xs={6} md={4}>
        <TextField
          label="Height (cm)"
          fullWidth
          value={height}
          onChange={(e) => handleParcelChange({ height: e.target.value })}
          required
          type="number"
        />
      </Grid>
      <Grid item xs={6} md={4}>
        <TextField
          label="Weight (kg)"
          fullWidth
          value={weight}
          onChange={(e) => handleParcelChange({ weight: e.target.value })}
          required
          type="number"
        />
      </Grid>
    </Grid>
  );
};

export default Parcel;
