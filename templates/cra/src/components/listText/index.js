import React from 'react';
import PropTypes from 'prop-types';
import CardText from './cardText';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: 50
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));
  

const ListText = props => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root} spacing={2}>
            {
                props.texts.map((text,index)=>{
                    return(
                        <Grid key={`row-${index}`} item xs={12}>
                            <CardText key={`card-${index}`} text={text}/>
                        </Grid>
                    );
                }).reverse()
            }
        </Grid>
    );
};

ListText.propTypes = {
    texts: PropTypes.array.isRequired,
};

export default ListText;