import React from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import UsageTable from './UsageTable';
import { usageStyles } from '../styles/usageStyles';
import { UsageResponse } from '../types/dataTypes';
import UsageList from './UsageList';
import UsageTotal from './UsageTotal';
import UsageMonth from './UsageMonth';
import { getSelectedForNoSelection } from '../utils/dateUtils';

interface UsageProps {
    loading: boolean;
    data: UsageResponse;
    error: string;
    fetchStatistics: (selected?: string) => void;
}

export default function Usage(props: UsageProps) {
    const {loading, data, error, fetchStatistics} = props;

    const [open, setOpen] = React.useState(true);
    const [selected, setSelected] = React.useState(getSelectedForNoSelection());

    React.useEffect(() => {
        fetchStatistics(selected);
    }, [fetchStatistics, selected]);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const classes = usageStyles();
    return (
        <div className={classes.root}>
            <CssBaseline/>

            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        {'>>'}
                    </IconButton>
                    <Typography component="h1" variant="h6" color="textSecondary" noWrap className={classes.title}>
                        Monthly Internet Usage Statistics
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <Typography align="center" component="h2" color="textSecondary" noWrap className={classes.title}>
                        Available Years/Months
                    </Typography>
                    <IconButton onClick={handleDrawerClose}>{'<<'}</IconButton>
                </div>
                <Divider/>
                {open && <UsageList selected={selected} setSelected={setSelected} yearMonthSet={data?.yearMonthSet}
                                    loading={loading}/>}
            </Drawer>

            <main className={classes.content}>
                <div className={classes.appBarSpacer}/>
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <Paper className={classes.paper}>
                                <UsageMonth selected={selected} setSelected={setSelected} loading={loading}/>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Paper className={classes.paper}>
                                <UsageTotal modelTotal={data?.modelTotal} loading={loading}/>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <UsageTable modelList={data?.modelList} error={error} loading={loading}/>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </div>
    );
}
