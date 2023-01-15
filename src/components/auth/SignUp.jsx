import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, TextField, Button } from "@material-ui/core";

import { signUp } from "../../store/actions/authActions";

const useStyles = makeStyles({
  formStyle: {
    margin: "0px auto",
    padding: "30px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000000",
    height: "500px",
    marginTop:"100px",
    backgroundColor:"#fff685"
    },
  spacing: {
    marginTop: "20px",
  },
});

const SignUp = () => {
  const classes = useStyles();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(user));
    setUser({ firstName: "", lastName: "", username: "", email: "", password: "" });
  };

  if (auth._id) return <Redirect to="/" />;

  return (
    <>
      <form
        noValidate
        autoComplete="off"
        className={classes.formStyle}
        onSubmit={handleSubmit}
      >
        <Typography variant="h5">Register</Typography>
        <TextField
          className={classes.spacing}
          id="username"
          label="username"
          variant="outlined"
          fullWidth
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <TextField
          className={classes.spacing}
          id="firstName"
          label="firstName"
          variant="outlined"
          fullWidth
          value={user.firstName}
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        />
        <TextField
          className={classes.spacing}
          id="lastName"
          label="firstName"
          variant="outlined"
          fullWidth
          value={user.lastName}
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        />
        <TextField
          className={classes.spacing}
          id="email"
          label="email"
          variant="outlined"
          fullWidth
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <TextField
          className={classes.spacing}
          id="password"
          type="password"
          label="password"
          variant="outlined"
          fullWidth
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.spacing}
          type="submit"
        >
          SignUp
        </Button>
      </form>
    </>
  );
};

export default SignUp;
