import React from "react";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function SimpleMediaQuery() {
  const matches = useMediaQuery("(max-width:600px)");
//   console.log(matches);
  return matches ? <div>Mobile Screen</div> : <div>Large Screen</div>;
}
export const  MyComponent =()=> {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
  
    return matches ? <div>Mobile Screen</div> : <div>Large Screen</div>;
  }