import React from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import { Home } from '../components/Home';

import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-router-dom';
import { useStylesForDrawer } from './styles/Drawer';

function HomeDrawer() {
    const { pathname } = useLocation();
    const classes = useStylesForDrawer();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={clsx(classes.appBar, { [classes.appBarShift]: open, })} >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Home
                    </Typography>

                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List style={{ minHeight: '85%' }}>


                    <ListItem button component={Link} to={'/'}>
                        <ListItemIcon>
                            <Tooltip title="Home">
                                <HomeIcon />
                            </Tooltip>
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>

                    <ListItem button component={Link} to={'/'}>
                        <ListItemIcon>
                            <Tooltip title="More">
                                <NoteAddIcon />
                            </Tooltip>
                        </ListItemIcon>
                        <ListItemText primary="More" />
                    </ListItem>
                </List>

            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar}>
                    <div className="container pt-4 pb-4" style={{ marginTop: '2rem' }}>
                        <Switch>
                            <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
                            <Route exact path="/" component={Home} />
                            <Redirect from="*" to="/" />
                        </Switch>
                    </div>
                </div>
            </main>
        </div>
    );
}

export { HomeDrawer };