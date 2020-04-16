import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logoSnoop from '../../images/logo-snoop.png';
import{
    ROUTES
} from '../../constants/router';

const useStyles = makeStyles({
    appbar: {
        backgroundColor: '#161616',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'left',
    },
    logo:{
        marginRight:50,
        height: 40
    }
});

const Header = () => {

    const classes = useStyles();

    return(
        <AppBar position="static" className={ classes.appbar }>
           
            <Toolbar className={ classes.toolbar }>
            <img src={logoSnoop} className={classes.logo} alt={'Snoop'}></img> 
                {
                    ROUTES.map((route,index)=>(<Button key={`button-${index}`} color="inherit" component={ RouterLink } to={route.PATH}>{route.LABEL}</Button>))
                }
            </Toolbar>
        </AppBar>
    )
}

export default Header;
