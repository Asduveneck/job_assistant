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

const makeMockData = (companyId, companyName, careerUrl, homeUrl) => ({
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
