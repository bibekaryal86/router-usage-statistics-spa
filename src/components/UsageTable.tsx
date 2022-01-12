import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import { UsageStatistics } from '../types/dataTypes';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

interface UsageTableProps {
  modelList: UsageStatistics[];
  error: string;
  loading: boolean;
}

const StyledTableCell = withStyles(() => ({
  head: {
    fontWeight: 600,
  },
}))(TableCell);

export default function UsageTable(props: UsageTableProps) {
  const { modelList, error, loading } = props;

  return loading ? (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="secondary" gutterBottom>
        Loading
      </Typography>
      <LinearProgress color="secondary" />
    </React.Fragment>
  ) : (
    <React.Fragment>
      {error && (
        <Typography component="h2" variant="h6" color="secondary" gutterBottom>
          {error}
        </Typography>
      )}
      <Table size="small">
        <TableHead>
          <TableRow>
            <StyledTableCell>DATE</StyledTableCell>
            <StyledTableCell>DAY</StyledTableCell>
            <StyledTableCell>UPLOAD</StyledTableCell>
            <StyledTableCell>DOWNLOAD</StyledTableCell>
            <StyledTableCell>TOTAL</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {modelList &&
            modelList.map((model) => (
              <TableRow key={model.id.timestamp}>
                <TableCell>{model.date}</TableCell>
                <TableCell>{model.day}</TableCell>
                <TableCell>{model.dataUpload}</TableCell>
                <TableCell>{model.dataDownload}</TableCell>
                <TableCell>{model.dataTotal}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <br />
    </React.Fragment>
  );
}
