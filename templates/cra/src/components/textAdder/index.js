import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
    TextField,
    Button,
    Grid
} from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: 20,
    },
    button:{
        marginTop:10
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

const TextAdder = props => {
    const classes = useStyles();
    const [text, setText] = React.useState(props.text);
    const onClickSend = ()=>{
        props.submmitText(text);
        setText('');
    }
    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={1}></Grid>
            <Grid item xs={9}>
                <TextField label="Texto" onChange={(event)=>{setText(event.target.value)}} fullWidth value={text} />
            </Grid>
            <Grid item xs={2}>
                <Button 
                    variant="contained" 
                    color="primary" 
                    className={classes.button} 
                    disableElevation
                    onClick={onClickSend}
                    >
                    Enviar
                </Button>
            </Grid>
        </Grid>
    );
};

TextAdder.propTypes = {
    text: PropTypes.string.isRequired,
    submmitText: PropTypes.func.isRequired,
};

export default TextAdder;