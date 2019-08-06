import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import List from '@material-ui/icons/List';

import FavoriteIcon from '@material-ui/icons/Favorite';


import AccountBox from '@material-ui/icons/AccountBox';
import DonutLarge from '@material-ui/icons/DonutLarge';


// import BaseTemplate from '../BaseTemplate';
// import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles({
    root: {

        width: '100%',
        position: 'fixed',
        bottom: 0,
        background: '#1E2632',

    },
});

export default function LabelBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    return (

        <BottomNavigation value={ value } onChange={ handleChange } className={ classes.root }>
            <BottomNavigationAction
                label="Dashboard"
                value="dashboard"
                icon={ <List /> }
                component={ Link }
                to="/one"
            />
            <BottomNavigationAction
                label="Favorites"
                value="favorites"
                icon={ <FavoriteIcon /> }
                component={ Link }
                to="/two"
            />
            <BottomNavigationAction
                label="Portfolio"
                value="portfolio"
                icon={ <DonutLarge>folder</DonutLarge> }
                component={ Link }
                to="/three"
            />
            <BottomNavigationAction
                label="Account"
                value="account"
                icon={ <AccountBox /> }
                component={ Link }
                to="/four"
            />
        </BottomNavigation>

    );
}