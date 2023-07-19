import React from "react";
import {
  Card,
  CardContent,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from "@mui/material";

const ShippingRates = ({ rates }) => {
  return (
    <Card variant="outlined" sx={{ mt: 3, width: "100%", mb: 5 }}>
      <CardContent>
        <Typography variant="h6">Shipping Rates</Typography>
        {rates.length > 0 ? (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Carrier</TableCell>
                <TableCell>Service</TableCell>
                <TableCell>Rate</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rates.map((rate, index) => (
                <TableRow key={index}>
                  <TableCell>{rate.carrier}</TableCell>
                  <TableCell>{rate.service}</TableCell>
                  <TableCell>{`${rate.rate} ${rate.currency}`}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <Typography variant="h6" sx={{ mt: 4 }}>
            No shipment rates available.
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default ShippingRates;
