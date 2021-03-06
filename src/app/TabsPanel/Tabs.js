import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TabSearch from '../TabSearch/TabSearch'
import LocalAirportIcon from '@material-ui/icons/LocalAirport';
import LocalHotelIcon from '@material-ui/icons/LocalHotel';
import RoomIcon from '@material-ui/icons/Room';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ListTickets from '../TabTickets/TabTickets';
import TabHotel from '../TabHotel/tabHotel'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    'aria-controls': `scrollable-prevent-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
     padding: theme.spacing(1),

  },
}));

export default function ScrollableTabsButtonPrevent() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClickChildComponent = (event, newValue) => {
    setValue(1);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className="backgroundColorAbout ">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="off"
          aria-label="scrollable prevent tabs example"
        >
          <Tab label="Flights" icon={<LocalAirportIcon />} aria-label="phone" {...a11yProps(0)} />
          <Tab label="Tickets" icon={<LocalOfferIcon />} aria-label="phone" {...a11yProps(1)} />
          <Tab label="Hotel" icon={<LocalHotelIcon />} aria-label="favorite" {...a11yProps(2)} />
          <Tab label="Seesights" icon={<RoomIcon />} aria-label="person" {...a11yProps(3)} />

        </Tabs>
      </AppBar>
      <TabPanel  value={value} index={0} className="backGroundAirplane">
        <TabSearch  handler={handleClickChildComponent}/>
      </TabPanel>
      <TabPanel value={value} index={1} className="backGroundTickets">
      <ListTickets  />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TabHotel/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item four
      </TabPanel>
    </div>
  );
}
