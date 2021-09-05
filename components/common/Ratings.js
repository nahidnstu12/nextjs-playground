import React from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import { Typography, withStyles } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";

// change rating color
const StyledRating = withStyles({
  iconFilled: {
    color: "#08b2bd",
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
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <StyledRating
        name="customized-color"
        defaultValue={value}
        icon={<StarIcon fontSize="large" />}
        precision={0.5}
        readOnly
      />
      <Typography variant="h5">{totalViews} Reviews</Typography>
    </Box>
  );
};

export const DefaultRating = ({ value, totalViews }) => {
  return (
    <Box
      borderColor="transparent"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <Rating
        name="read-only"
        value={value}
        readOnly
        precision={0.5}
        size="large"
      />
      <Typography variant="h5">{totalViews} Reviews</Typography>
    </Box>
  );
};

export const CustomizedRatings = () => {
  return (
    <Box component="fieldset" borderColor="transparent">
      <StyledRating
        name="customized-color"
        defaultValue={2}
        precision={0.5}
        icon={<StarIcon fontSize="inherit" />}
      />
    </Box>
  );
};
