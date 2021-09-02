import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useCheckMobileScreen from '../../hooks/useChekMobile'

// must refactor later
const responsiveMain = {
  desktop: {
    breakpoint: { max: 1920, min: 1191 },
    items: 3,
  },
  tabs: {
    breakpoint: { max: 1190, min: 601 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};
const responsiveDense = {
  desktop: {
    breakpoint: { max: 1920, min: 1191 },
    items: 4,
  },
  tabs: {
    breakpoint: { max: 1190, min: 601 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 2,
  },
};
const responsiveMbl = {
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};

export const CarousalItem = ({ children }) => {
  let deviceType = useCheckMobileScreen()
  console.log(deviceType)
  return (
    <Carousel
      responsive={responsiveMain}
      containerClass="carousel-container"
      itemClass="carousel-item"
      swipeable={true}
      // infinite={deviceType ? true : false}
      autoPlaySpeed={2500}
      transitionDuration={2500}
      // deviceType={deviceType}
      autoPlay={deviceType  ? true : false}
      ssr={true}
    >
      {children}
    </Carousel>
  );
};
export const CarousalItemDense = ({ children }) => {
  return (
    <Carousel
      responsive={responsiveDense}
      containerClass="carousel-container"
      itemClass="carousel-item"
      swipeable={true}
      // infinite={true}
      // autoPlay={true}
      // autoPlaySpeed={2500}
      transitionDuration={2500}
    >
      {children}
    </Carousel>
  );
};
export const CarousalItemOnlyMobile = ({ children }) => {
  return (
    <Carousel
      responsive={responsiveMbl}
      containerClass="carousel-container"
      itemClass="carousel-item"
      swipeable={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={1500}
      transitionDuration={2500}
    >
      {children}
    </Carousel>
  );
};
