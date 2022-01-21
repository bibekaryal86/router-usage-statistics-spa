import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { getSelectedForNoSelection } from '../utils/dateUtils';

interface UsageTotalProps {
    loading: boolean;
    selected: string;
    setSelected: (selected: string) => void;
}

export default function UsageMonth(props: UsageTotalProps) {
    const {selected, setSelected, loading} = props;
    const currentYearMonth = getSelectedForNoSelection();

    const handleClick = () => {
        setSelected(currentYearMonth);
    };

    const disableCurrent = React.useMemo(() => {
        return selected === currentYearMonth;
    }, [currentYearMonth, selected]);

    return loading ? (
        <React.Fragment>
            <Box alignSelf="center" m={10}>
                <CircularProgress color="secondary"/>
            </Box>
        </React.Fragment>
    ) : (
        <React.Fragment>
            <List>
                <div>
                    <ListItem key="1" disabled={true}>
                        <ListItemText primary={`Selected Year / Month: ${selected || currentYearMonth}`}/>
                    </ListItem>
                    <ListItem key="2" button onClick={handleClick} disabled={disableCurrent}>
                        <ListItemText primary={`Current Year / Month: ${currentYearMonth}`}/>
                    </ListItem>
                </div>
            </List>
        </React.Fragment>
    );
}
