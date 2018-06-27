import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import ModalHandler from "./modalHandle";
const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },

};
const handleClick  = (e,props) =>(alert("Hello"))

function TableCards(props) {
  const { classes } = props;
  //console.log(props.data.map(t => t.task_name))
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            Tasks
          </Typography>
            {props.data.map(t =>{
                if(t.task_status === props.condition){
                 return (<ModalHandler data={t}/>)
                }
            }
                )}
          
        </CardContent>

        <CardActions>
        <Button size="small" onClick={(e) => handleClick(e,props)}>Add Task</Button>
      </CardActions>

      </Card>
    </div>
  );
}

TableCards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TableCards);
