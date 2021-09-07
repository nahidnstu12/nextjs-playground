import styles from "../../styles/_button.module.scss";
import { SingleIcon } from "./SingleComponent";

export const FluidButton = ({ text }) => {
  return <SingleIcon className={styles.fluidBtn}> {text}</SingleIcon>;
};
export const NormalButton = ({ text }) => {
  return <SingleIcon className={styles.normalBtn}> {text}</SingleIcon>;
};
export const ScaleButton = ({ text }) => {
  return <SingleIcon className={styles.scaleBtn}> {text}</SingleIcon>;
};
