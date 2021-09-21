import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  textFont: {
    fontFamily: "Nunito",
  },
  textSize: {
    fontSize: "1.875rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
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
    fontSize: "1.25rem",
    marginBottom: "1.875rem",
    marginTop: ".5rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "13px",
    },
  },
  heading: {
    textAlign: "center",
    padding: "1.25rem 0",
    // paddingBottom: "2.75rem",
    fontSize: "2.1rem",
    color: "#333",
    "& span": {
      background: "rgb(68, 190, 199)",
      color: "#fff",
      display: "inline-block",
      padding: ".25rem 2.75rem",
      clipPath: "polygon(100% 0, 93% 50%, 100% 99%, 0% 100%, 7% 50%, 0% 0%)",
    },
  },
  polygonDescription: {
    color: "#838e7a",
    fontSize: "1rem",
    marginBottom: "1.875rem",
    marginTop: ".25rem",
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

export const PolygonHeader = ({ text, colorText, description }) => {
  const classes = useStyles();
  return (
    <>
      <h1 className={classes.heading}>
        {text}
        <span className={classes.polygonText}>{colorText}</span>
      </h1>
      <p
        className={`${classes.textFont} ${classes.polygonDescription} ${classes.textCenter}`}
      >
        {description}
      </p>
    </>
  );
};
