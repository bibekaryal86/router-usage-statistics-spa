import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';

interface UsageListProps {
    selected: string;
    setSelected: (selected: string) => void;
    yearMonthSet: string[];
    loading: boolean;
}

export default function UsageList(props: UsageListProps) {
    const {selected, setSelected, yearMonthSet, loading} = props;

    const handleClick = (event) => {
        setSelected(event?.target?.innerText);
    };

    return loading ? (
        <React.Fragment>
            <Box alignSelf="center" m={10}>
                <CircularProgress color="secondary"/>
            </Box>
        </React.Fragment>
    ) : (
        yearMonthSet && (
            <List>
                <div>
                    {yearMonthSet.map((yearMonth) => (
                        <ListItem key={yearMonth} button onClick={handleClick} disabled={selected === yearMonth}>
                            <ListItemIcon/>
                            <ListItemText primary={yearMonth}/>
                        </ListItem>
                    ))}
                </div>
            </List>
        )
    );
}
