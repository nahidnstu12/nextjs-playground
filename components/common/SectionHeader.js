import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  textFont: {
    fontFamily: "Nunito",
  },
  textSize: {
    fontSize: "3rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "24px",
    },
  },
  textCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  colorText: {
    // color: "rgb(68, 190, 199)",
    color: (props) => (props.isWhite ? "rgb(68, 190, 199)" : "#158e2a"),
    marginLeft: "8px",
  },
  description: {
    color: "#838e7a",
    fontSize: "1.8rem",
    marginBottom: "3rem",
    marginTop: "1rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "13px",
    },
  },
}));
export default function SectionHeader({
  text,
  colorText,
  description,
  ...props
}) {
  const classes = useStyles(props);
  return (
    <Grid item xs={12}>
      <Typography
        variant="h4"
        className={`${classes.textFont} ${classes.textSize} ${classes.textCenter}`}
      >
        {text}
        <span className={classes.colorText}>{colorText}</span>
      </Typography>
      <Typography
        variant="body1"
        className={`${classes.textFont} ${classes.description} ${classes.textCenter}`}
      >
        {description}
      </Typography>
    </Grid>
  );
}
