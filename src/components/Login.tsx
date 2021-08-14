import React from 'react';
import { useStyles } from './styles/Home';
import Container from '@material-ui/core/Container';

function Login(): JSX.Element {
    const classes = useStyles();

    return (
        <>
            <Container maxWidth="sm">
                <div className={classes.wrapperDiv} >
                    <span className={classes.secondTitle}>Welcome to the bookmark manager</span>
                    <h1 className={classes.headling}>This is your latest bookmarks! enjoy surfing </h1>
                </div>


            </Container>
        </>
    );
}

export { Login };