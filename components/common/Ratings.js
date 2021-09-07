import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import { Typography, withStyles } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";

// change rating color
const StyledRating = withStyles({
  iconFilled: {
    color: "#27ae60",
  },
  iconHover: {
    color: "#08bd99",
  },
})(Rating);

export const RatingOnly = ({ value, totalViews }) => {
  return (
    <Box
      component="fieldset"
      borderColor="transparent"
      style={{
        display: "flex",
        justifyContent: totalViews ? "space-between" : "center",
      }}
    >
      <StyledRating
        name="customized-color"
        defaultValue={value}
        icon={<StarIcon fontSize="large" />}
        precision={0.5}
        readOnly
      />
      {totalViews && <Typography variant="h5">{totalViews} Reviews</Typography>}
    </Box>
  );
};

export const DefaultRating = ({ value, totalViews }) => {
  return (
    <Box
      borderColor="transparent"
      style={{
        display: "flex",
        justifyContent: totalViews ? "space-between" : "center",
      }}
    >
      <Rating
        name="read-only"
        value={value}
        readOnly
        precision={0.5}
        size="large"
      />
      {totalViews && <Typography variant="h5">{totalViews} Reviews</Typography>}
    </Box>
  );
};

// have issues
export const CustomizedRatings = ({}) => {
  const [value, setValue] = useState(2);
  const handleChange = (event) => setValue(parseInt(event.target.value));
  return (
    <Box component="fieldset" borderColor="transparent">
      <StyledRating
        name="customized-color"
        // defaultValue={value}
        value={value}
        precision={0.5}
        icon={<StarIcon fontSize="large" />}
        onChange={handleChange}
      />
    </Box>
  );
};
