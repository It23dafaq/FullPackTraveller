import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import InfoIcon from '@material-ui/icons/Info';
import Col from 'react-bootstrap/Col'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './countryCards.css';

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
     [0]:false,
     index:null,
 };
}
 handleExpandClick = (event,indexof) => {
   this.setState(
     {expanded:!this.state.expanded,
      index:indexof
    })
 };

render(){
 const { classes } = this.props;
 return (
   Array.from(this.props.flightsGB.keys()).map((key,index) => (
      <Col key={key} className="col-auto">
       <Card className={classes.root}>
         <CardHeader

         />
         <CardMedia
           className={classes.media}
           image="assets/img/test2.jpg"
           title="Paella dish"
         />
         <CardContent>
           <Typography variant="body2" color="textSecondary" component="p">
           Flights for {key} start at 30$
           </Typography>
         </CardContent>
         <CardActions disableSpacing>
           <IconButton onClick={(event,index) => this.handleExpandClick(event,index)} aria-label="More Details">
             <InfoIcon />
           </IconButton>
           <IconButton
             className={clsx(classes.expand, {
               [classes.expandOpen]: this.state.expanded,
             })}
             onClick={(event,index) => this.handleExpandClick(event,index)}
             aria-expanded={this.state.expanded}
             aria-label="show more"
           >

             <ExpandMoreIcon />
           </IconButton>
         </CardActions>
         <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
           <CardContent>
             <Typography paragraph>Country:</Typography>
             <Typography paragraph >
               Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
               minutes.
             </Typography>
           </CardContent>
         </Collapse>
       </Card>
     </Col>

))
)
}
}
export default withStyles(useStyles)(RecipeReviewCard);

// export default function RecipeReviewCard(props) {
//   const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);
//   console.log(props.flightsGB);
//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };
//
//   return Array.from(props.flightsGB.keys()).map((key,index) => (
//    <Col key={key} className="col-auto">
//
//     <Card className={classes.root}>
//       <CardHeader
//
//       />
//       <CardMedia
//         className={classes.media}
//         image="assets/img/test2.jpg"
//         title="Paella dish"
//       />
//       <CardContent>
//         <Typography variant="body2" color="textSecondary" component="p">
//         Flights for {key} start at 30$
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton onClick={handleExpandClick} aria-label="More Details">
//           <InfoIcon />
//         </IconButton>
//         <IconButton
//           className={clsx(classes.expand, {
//             [classes.expandOpen]: expanded,
//           })}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//
//           <ExpandMoreIcon />
//         </IconButton>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>Country:</Typography>
//           <Typography paragraph >
//             Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
//             minutes.
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
//   </Col>
//   ));
// }
