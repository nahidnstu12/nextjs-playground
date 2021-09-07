import styles from "../../styles/bannar/neat-bannar.module.scss";
import { NeatBannar } from "../../utils/data";
import { CarousalItem } from "../common/Carousal";
import { responsiveMbl } from "../../utils/carousel.breakpoint";
import { ScaleButton } from "../common/Button";
export default function NeatCarousal() {
  return (
    <div className={styles.homeSlider}>
      <CarousalItem
        showDots={true}
        responsive={responsiveMbl}
        removeArrow={["desktop"]}
        infinite={true}
        // autoPlay={true}
      >
        {NeatBannar.map((data) => (
          <Bannar key={data.id} bannar={data} />
        ))}
      </CarousalItem>
    </div>
  );
}

const Bannar = ({ bannar }) => {
  return (
    <div className={styles.slide}>
      <div className={styles.content}>
        <span className={styles.title}>our special dish</span>
        <h3>{bannar.foodTitle}</h3>
        <p>{bannar.foodDescript}</p>
        <ScaleButton text="Order Now" />
      </div>
      <div className={styles.image}>
        <img src={bannar.imgUrl} alt="bananr-1" />
      </div>
    </div>
  );
};
