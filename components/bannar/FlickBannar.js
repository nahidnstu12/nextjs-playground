import { FluidButton } from "../common/Button";
import styles from "../../styles/bannar/flick-bannar.module.scss";

export default function FlickBannar() {
  return (
    <section className={styles.home} id="home">
      <div className={styles.content}>
        <h3>food made with love</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
          accusamus tempore temporibus rem amet laudantium animi optio
          voluptatum. Natus obcaecati unde porro nostrum ipsam itaque impedit
          incidunt rem quisquam eos!
        </p>
       <FluidButton text="Order Now"/>
      </div>

      <div className={styles.image}>
        <img src="img/bannar/home-img.png" alt="" />
      </div>
    </section>
  );
}
