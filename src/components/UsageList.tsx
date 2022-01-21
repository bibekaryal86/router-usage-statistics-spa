import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMore from '@material-ui/icons/ExpandMore';

interface UsageListProps {
    selected: string;
    setSelected: (selected: string) => void;
    yearMonthSet: string[];
    loading: boolean;
}

export default function UsageList(props: UsageListProps) {
    const {selected, setSelected, yearMonthSet, loading} = props;
    const [expanded, setExpanded] = React.useState('');

    const handleClick = (event) => {
        setSelected(event?.target?.innerText);
    };

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : '');
    };

    const getYearMonthList = (monthList) => (
        <List>
            <div>
                {monthList.map((yearMonth) => (
                    <ListItem key={yearMonth} button onClick={handleClick} disabled={selected === yearMonth}>
                        <ListItemIcon/>
                        <ListItemText primary={yearMonth}/>
                    </ListItem>
                ))}
            </div>
        </List>
    )

    const getAccordion = (year, monthList) => {
        return (
            <Accordion key={year} expanded={expanded === year} onChange={handleChange(year)}>
                <AccordionSummary expandIcon={<ExpandMore/>}>
                    Year {year}
                </AccordionSummary>
                <AccordionDetails>
                    {getYearMonthList(monthList)}
                </AccordionDetails>
            </Accordion>
        )
    }

    const getYearMonthListForYear = (year: string) => yearMonthSet.filter((yearMonth) => yearMonth.includes(year))

    const showYearlyAccordions = () => {
        const yearList = yearMonthSet.map((yearMonth) => yearMonth.slice(0, 4));
        const yearSet = [...new Set(yearList)]
        return yearSet.map((year) => getAccordion(year, getYearMonthListForYear(year)))
    }

    return loading ? (
        <React.Fragment>
            <Box alignSelf="center" m={10}>
                <CircularProgress color="secondary"/>
            </Box>
        </React.Fragment>
    ) : (<>{showYearlyAccordions()}</>);
}
