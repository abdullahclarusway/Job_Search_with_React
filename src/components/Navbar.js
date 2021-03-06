import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import img from "../assets/logo1.png";
import Button from "@material-ui/core/Button";
import { ButtonGroup } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import firebase from "../firebase/Firebase.utils";
import { FirebaseAuthContext } from "../context/AuthContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "sticky",
    top: 0,
    zIndex: 999,
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: 20,
    fontWeight: 600,
    fontSize: 28,
    cursor: "pointer",
    marginRight: 20,
  },
  logo: {
    width: 50,
    borderRadius: 50,
    cursor: "pointer",
  },
  container: {
    backgroundColor: "#11698e",
  },
}));

export default function Navbar() {
  const { currentUser } = useContext(FirebaseAuthContext);
  const history = useHistory();
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };
  const handleSignOut = () => {
    firebase.signOut();
    history.push("/");
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.container}>
          <img
            className={classes.logo}
            src={img}
            alt="logo"
            onClick={() => history.push("/")}
          />
          <Typography
            variant="h6"
            className={classes.title}
            onClick={() => history.push("/")}
          >
            Lighthouse Job Search
          </Typography>
          {currentUser ? (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Typography variant="h6" className={classes.title}>
                  {currentUser.displayName.toUpperCase()}
                </Typography>
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
              </Menu>
            </div>
          ) : (
            <>
              <ButtonGroup disableElevation variant="contained">
                <Button onClick={() => history.push("/login")}>Sign in</Button>
                <Button onClick={() => history.push("/register")}>
                  Sign up
                </Button>
              </ButtonGroup>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
