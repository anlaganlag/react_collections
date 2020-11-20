import React, { Component } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import InputBase from '@material-ui/core/InputBase';
import ViewAgendaOutlinedIcon from '@material-ui/icons/ViewAgendaOutlined';
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import '../scss/Dashboard.scss'
import { withStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Paper,
} from '@material-ui/core';
import logo from '../assets/keep.png'
import userService from '../services/userService'
const service = new userService()

const useStyles = {
    grow: {
        flexGrow: 1
    },
    appbar: {
        height: '100'
    },
    menuButton: {
        marginRight: '1rem',
        backgroundColor: 'transparent',
        width: 50,
        height: 50,
        marginBottom: 30
    },
    largeIcon: {
        width: 30,
        height: 30,
        color: '#5f6367',
        cursor: 'pointer',

    },
    iconPart: {
        position: "relative", top: '0.8em'
    },
    logo: {
        marginLeft: "10px",
        marginRight: "10px"
    },
    titlebar: {
        fontSize: "1.7em",
        color: "#5f6368",
        marginRight: "4em"
    },
    root: {
        padding: '4px 10px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#f1f3f4',
        width: 750,
        height: 55
    },
    input: {
        flex: 1,
        fontSize: '20px'
    },
    iconButton: {
        padding: 10,
    },
    searchButton: {
        fontSize: '1em'
    },
    cartIcon: {
        width: 30,
        height: 30,
        color: '#757575',
        cursor: 'pointer',

    },
    viewIcon: {
        width: 30,
        height: 30,
        color: '#757575',
        cursor: 'pointer',

    },
    accountCircle: {
        width: 30,
        height: 30,
        color: '#757575',
        cursor: 'pointer',
    },
    button: {
        marginLeft: 10,
        marginRight: 10
    }
}

export default withStyles(useStyles)(
    class NavBar extends Component {

        state = {
            anchorEl: null,
        };

        handleProfileMenuOpen = event => {
            this.setState({ anchorEl: event.currentTarget });
        };
        handleMenuClose = () => {
            this.setState({ anchorEl: null });
        };

        toggleButton = (event) => {
            this.setState({
                toggle: !this.state.toggle,
            })
        }

        logOut = () => {
            service.logout()
                .then(res => {
                    localStorage.removeItem('token');
                    this.props.props.history.push('/')
                })
                .catch(err => {
                    console.log(err)
                })
        };


        render() {
            const { classes } = this.props;
            const { anchorEl } = this.state;
            const isMenuOpen = Boolean(anchorEl);

            const renderMenu = (
                <Menu
                    anchorEl={anchorEl}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    open={isMenuOpen}
                    onClose={this.handleMenuClose}
                >
                    <MenuItem onClick={this.logOut}>Logout</MenuItem>
                </Menu>
            );
            return (
                <div className={classes.grow} >
                    <AppBar className='appbar' elevation={1} position="fixed" color="inherit">
                        <Toolbar>
                            <div className={classes.iconPart}>
                                <IconButton
                                    edge='start'
                                    color='inherit'
                                    onClick={() => this.props.handleDrawer()}
                                    className={classes.menuButton}
                                >
                                    <MenuIcon
                                        className={classes.largeIcon}
                                    />
                                </IconButton>
                            </div>
                            <img className={classes.logo} src={logo} alt="Logo" />
                            <Typography className={classes.titlebar} variant="h6">Fundoo</Typography>
                            <div className={classes.search}>
                                <Paper component="form" className={classes.root}>
                                    <IconButton type="submit" className={classes.iconButton} aria-label="search">
                                        <SearchIcon className={classes.searchButton} />
                                    </IconButton>
                                    <InputBase
                                        className={classes.input}
                                        placeholder="Search"
                                    />
                                </Paper>
                            </div>
                            <div className='iconBar'>
                                <IconButton className={classes.button}>
                                    <ShoppingCartOutlinedIcon
                                        className={classes.cartIcon} />
                                </IconButton>

                                <IconButton className={classes.button}
                                    onClick={(event) => this.toggleButton(event)}>
                                    {this.state.toggle ? <ViewAgendaOutlinedIcon
                                        className={classes.viewIcon} /> : <AppsIcon className={classes.viewIcon}/>}
                                     
                                </IconButton>

                                <IconButton className={classes.button}
                                    edge="end"
                                    aria-label="account user"
                                    aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                                    onClick={this.handleProfileMenuOpen}
                                    color="inherit"
                                >
                                    <AccountCircleIcon
                                        className={classes.accountCircle} />
                                </IconButton>
                            </div>
                        </Toolbar>
                    </AppBar>
                    {renderMenu}
                </div >
            )
        }
    }
)