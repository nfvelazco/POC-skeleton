import React, { Component } from 'react';
import logo from '../../images/logo.png';
import Typography from '@material-ui/core/Typography';
import './home.css';
class Home extends Component {
    render() {
        return (
            <div className={'home-container'}>
                <img src={logo} className="App-logo" alt="logo" />
                <Typography variant="h4" gutterBottom>
                    Bienvenido al template en React de Snoop!
                </Typography>
                <Typography variant="h6" gutterBottom>
                    Date una vuelta por el blog, donde tenés un ejemplo claro del uso de redux.
                </Typography>
            </div>
        );
    }
}

export default (Home);