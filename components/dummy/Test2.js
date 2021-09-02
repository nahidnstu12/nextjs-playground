import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  buttonBlue: {
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
  },
  // style rule
  //   foo: (props) => ({
  //     backgroundColor: props.backgroundColor,

  //   }),
  bar: {
    // CSS property
    color: (props) => props.color,
    backgroundColor: (props) => props.backgroundColor,
    textAlign: "center",
    boxShadow: (props) =>
      props.color === "red"
        ? "0 3px 5px 2px rgba(255, 105, 135, .3)"
        : "0 3px 5px 2px rgba(33, 203, 243, .3)",
  },
  tez:`
  color:red;
  width:20px;
  padding-bottom:10px
  `
});

export default function DynamicClassName() {
  const classes = useStyles();
  const [color, setColor] = React.useState("default");
  const [dark, setDark] = useState(true);
  const handleChange = (event) => {
    setColor(event.target.checked ? "blue" : "default");
  };
  //   const setStyle = () => setDark()
  return (
    <React.Fragment>
     
      <Button
        className={clsx(classes.button, {
          [classes.buttonBlue]: color === "blue",
        })}
      >
        {"Class name branch"}
      </Button>

      <Typography className="">Tease Me</Typography>
      <Typography className="">Wildly</Typography>
      {/* <MyComponent />
      <MyComponent2 />
      <AdaptingHook />
      <MyButton color="red">Red</MyButton> */}
      <p className={classes.tez}>Tezz</p>
    </React.Fragment>
  );
}

function MyComponent() {
  // Simulated props for the purpose of the example
  const props = { backgroundColor: "black", color: "white" };
  // Pass the props as the first argument of useStyles()
  const classes = useStyles(props);

  return <div className={`${classes.foo} ${classes.bar}`}>Test</div>;
}

function MyComponent2() {
  // Simulated props for the purpose of the example
  const props = { backgroundColor: "red", color: "blue" };
  // Pass the props as the first argument of useStyles()
  const classes = useStyles(props);

  return <div className={` ${classes.bar}`}>Test 2</div>;
}
function MyButton(props) {
  const { color, ...other } = props;
  const classes = useStyles(props);
  return <Button className={classes.bar} {...other} />;
}
function AdaptingHook() {
    return (
      <React.Fragment>
        <MyButton color="red">Red</MyButton>
        <MyButton color="blue">Blue</MyButton>
      </React.Fragment>
    );
  }
