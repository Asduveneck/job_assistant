import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import React from 'react';
// TODO: make proper mocks then use actual saga
const makeMockData = (
  companyId: number,
  companyName: string,
  careerUrl: string,
  homeUrl: string,
): any => ({
  companyId,
  companyName,
  careerUrl,
  homeUrl,
});
const tempRows = [];

const Company: React.SFC = () => {
  return (
    <Paper>
      <Typography>Company Page</Typography>
      Testing.
    </Paper>
  );
};

export default Company;
