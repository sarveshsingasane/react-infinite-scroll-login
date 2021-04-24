import React from "react";
import { useHistory } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Scroll from "../Components/Scroll";
import { sessionLogout } from "../Services";

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
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(1),
    },
    submit: {
      // margin: theme.spacing(3, 0, 2),
      // margin: theme.spacing(2, 0, 1, 0)
    },
  })
);

const LandingPage: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();

  const Logout = () => {
    sessionLogout();
    history.push("/login");
  };

  return (
    <Container component="main" maxWidth="md">
      <div className={classes.paper}>
        <Grid item xs={12} md={12}>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={() => {
              Logout();
            }}
          >
            Logout
          </Button>
        </Grid>

        <Typography component="h1" variant="h5">
          Books
        </Typography>

        <Scroll />
      </div>
    </Container>
  );
};

export default LandingPage;
