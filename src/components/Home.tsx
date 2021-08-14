import { useStyles } from './styles/Home';
import React from 'react';
import Container from '@material-ui/core/Container';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';


function Home(): JSX.Element {
    const classes = useStyles();

    const loggedInUser = useSelector(selectUser);

    return (
        <>
            <Container maxWidth="sm">
                <div className={classes.wrapperDiv} >
                    <span className={classes.secondTitle}>Welcome {loggedInUser.name} to the bookmark manager</span>
                    <h1 className={classes.headling}>This is your latest bookmarks! enjoy surfing </h1>
                </div>
            </Container>
        </>
    );
}

export { Home };