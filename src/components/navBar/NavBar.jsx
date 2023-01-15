import React from "react";

import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { signOut } from "../../store/actions/authActions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  authButton: {
    right: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  text: {
    color: '#fff685'
  },
  linkStyle: {
    textDecoration: "none",
    color: "#fafafa",
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);
  const user = useSelector((state) => state.auth);

  const handleSignOut = () => {
    dispatch(signOut());
    history.push("/signin");
  };

  return (
    <>
      <div className={classes.root}>
        <AppBar style={{ marginBottom: "30px", background: "black" }}>
          <Toolbar>
            <Typography variant="h4" className={classes.title}>
              <Link className={classes.linkStyle} to="/">
                <div className={classes.text}>TASKS APP</div>
              </Link>
            </Typography>
            {user._id ? (
              <>
                <Typography variant="subtitle2" className={classes.title}>
                <div className={classes.text}>   Logged in as {user.firstName} </div>
                </Typography>
                <Button
                  edge="end"
                  color="inherit"
                  className={classes.authButton}
                  onClick={() => handleSignOut()}
                >
                  <Link className={classes.linkStyle} to="/">
                  <div className={classes.text}>  SignOut </div>
                  </Link>
                </Button>
              </>
            ) : (
              <>
                <Button
                  edge="end"
                  color="inherit"
                  className={classes.authButton}
                >
                  <Link className={classes.linkStyle} to="/signin">
                    <div className={classes.text}>SignIn</div>
                  </Link>
                </Button>
                <Button
                  edge="end"
                  color="inherit"
                  className={classes.authButton}
                >
                  <Link className={classes.linkStyle} to="/signup">
                  <div className={classes.text}> SignUp</div>
                  </Link>
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default NavBar;
