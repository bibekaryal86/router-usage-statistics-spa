import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { UsageStatistics } from '../types/dataTypes';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

interface UsageTotalProps {
  modelTotal: UsageStatistics;
  loading: boolean;
}

export default function UsageTotal(props: UsageTotalProps) {
  const { modelTotal, loading } = props;

  return loading ? (
    <React.Fragment>
      <Box alignSelf="center" m={10}>
        <CircularProgress color="secondary" />
      </Box>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="textSecondary" gutterBottom>
        Monthly Totals
      </Typography>
      {modelTotal && (
        <React.Fragment>
          <Breadcrumbs aria-label="breadcrumb">
            <Typography color="textSecondary">Total Uploads: {modelTotal.dataUpload}</Typography>
          </Breadcrumbs>
          <Breadcrumbs aria-label="breadcrumb">
            <Typography color="textSecondary">Total Downloads: {modelTotal.dataDownload}</Typography>
          </Breadcrumbs>
          <Breadcrumbs aria-label="breadcrumb">
            <Typography color="textSecondary">Total Data Usage: {modelTotal.dataTotal}</Typography>
          </Breadcrumbs>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
