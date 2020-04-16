import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: '#444444',
    color: '#fafafa'
  },
});

const CardText = props => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h4">
                    {props.text}
                </Typography>
            </CardContent>
        </Card>
    );
};

CardText.propTypes = {
    text: PropTypes.string.isRequired,
};

export default CardText;