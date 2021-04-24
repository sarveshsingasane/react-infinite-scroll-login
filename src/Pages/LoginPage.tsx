import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { CircularProgress } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import { sessionLogin } from "../Services";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#ffffff",
      border: "0.25px solid gray",
      padding: "2em",
      borderRadius: "5px",
    },
    avatar: {
      margin: theme.spacing(2),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  })
);

interface User {
  email: string;
  password: string;
}

const init: User = {
  email: "",
  password: "",
};

const LoginPage: React.FC = () => {
  const classes = useStyles();
  const [auth, setAuth] = useState(init);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const Login = () => {
    setLoading(true);
    setTimeout(() => {
      if (auth.email === "foo" && auth.password === "bar") {
        sessionLogin(auth.email, auth.password);
        setLoading(false);
        history.push("/home");
      } else {
        setLoading(false);
        window.alert("Wrong ID and Password... Please try again");
        history.push("/");
      }
    }, 2000);
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar} />
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            Login();
          }}
        >
          <TextField
            variant="outlined"
            type="email"
            margin="normal"
            required
            fullWidth
            id="email"
            label=" ID"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => {
              setAuth({
                ...auth,
                email: e.target.value,
              });
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => {
              setAuth({
                ...auth,
                password: e.target.value,
              });
            }}
          />

          {!loading && (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
          )}

          {loading && (
            <Grid
              container
              justify="center"
              alignContent="center"
              style={{ padding: "1em" }}
            >
              <Grid item>
                <CircularProgress size={35} />
              </Grid>
            </Grid>
          )}
        </form>
      </div>
    </Container>
  );
};

export default LoginPage;
