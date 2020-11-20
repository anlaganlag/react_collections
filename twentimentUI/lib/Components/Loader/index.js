import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

function Loader({ container, ...props }) {
  const classes = useStyles();
  return (
    <div className={classes.root} {...container}>
      <CircularProgress color="inherit" {...props} />
    </div>
  );
}

export default Loader;
