import { FluidButton } from "../common/Button";
import styles from "../../styles/bannar/flick-bannar.module.scss";
import { data } from "../../utils/data";

export default function FlickBannar() {
  
  return (
    <section className={styles.home} id="home">
      <div className={styles.content}>
        <h3>{data.title}</h3>
        <p>
        {data.description}
        </p>
       <FluidButton text="Order Now"/>
      </div>

      <div className={styles.image}>
        <img src={data.image} alt="" />
      </div>
    </section>
  );
}
