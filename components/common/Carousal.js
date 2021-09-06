import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useCheckMobileScreen from "../../hooks/useChekMobile";

export const CarousalItem = ({
  children,
  responsive,
  showDots,
  infinite,
  autoPlay,
  removeArrow,
}) => {
  let mobile = useCheckMobileScreen();
  // console.log(mobile);
  return (
    <Carousel
      responsive={responsive}
      containerClass="carousel-container"
      itemClass="carousel-item"
      swipeable={mobile ? true : false}
      infinite={infinite}
      ssr={true}
      showDots={showDots}
      autoPlay={autoPlay}
      removeArrowOnDeviceType={removeArrow}
      // autoPlaySpeed={2500}
      // transitionDuration={2500}
      // deviceType={deviceType}
      // autoPlay={deviceType  ? true : false}
    >
      {children}
    </Carousel>
  );
};
