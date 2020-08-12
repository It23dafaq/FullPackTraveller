import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import InfoIcon from '@material-ui/icons/Info';
import Col from 'react-bootstrap/Col'
import { connect } from 'react-redux'
import './countryCards.css';
import {filterFlightsByName} from '../../store/actions/mainPageActions'


const useStyles = ((theme) => ({
  root: {
    maxWidth: 300,
    minWidth:300,
    marginBottom:'20px',
    borderRadius:'7px',
    padding:'1px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
class RecipeReviewCard extends Component  {
  constructor(props) {

   super(props);
   this.state = {
     value: '',
     expanded:false,
     index:null,
     country:null,
     method:props.handler,
 };
}

//this mehtod handles expand action for country card
 handleExpandClick = (event,indexof) => {
   this.setState(
     {expanded:!this.state.expanded,
      index:indexof
    })
 };
 //this method handles action from card
 //its changes tab and filters flights
 handleMoreDetails = (key) => {
  this.setState(
    {country:key
   })

   //this method passed from props via tabSearch <- tabs
   this.props.handler();
   //this method filter flights by name
   this.props.filterFlightsByName(key);
};
render(){
  console.log(this.props);
 const { classes } = this.props;
 return (
   this.props.flightsGB ? this.props.flightsGB.map((key,index) => (
      <Col key={index} className="col-auto bounceInDown">
       <Card className={classes.root}>
         <CardHeader

         />
         <CardMedia
           className={classes.media}
           image={key.cityLogoHref}
           title="Paella dish"
         />
         <CardContent>
           <Typography variant="body2" color="textSecondary" component="p">
           Flights for {key.city} start at {key.lowestPrice}$
           </Typography>
         </CardContent>
         <CardActions disableSpacing>
           <IconButton onClick={() => this.handleMoreDetails(key.journeys)} aria-label="More Details" style={{fontSize: 'large'}}>Show More Details
             <InfoIcon />
           </IconButton>
         </CardActions>
       </Card>
     </Col>

)):null
)
}
}
const mapDispatchToProps = dispatch => {
  return {
    filterFlightsByName: countryName => dispatch(filterFlightsByName(countryName))
  };
};
export default connect(null,mapDispatchToProps)(withStyles(useStyles)(RecipeReviewCard));
