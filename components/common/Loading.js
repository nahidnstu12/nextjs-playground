import React from "react";
import styles from "../../styles/spinner.module.css";

const Loading = () => {
  return (
    <div className={`${styles.loaderContainer}`}>
      <div className={`${styles.loader} `}>Loading...</div>
    </div>
  );
};
export const LoadingTale = () => {
  return (
    <div className="flex justify-center items-center m-4">
      <div
        className="
        animate-spin
        rounded-full
        h-20
        w-20
        mt-12
        border-t-4 border-b-4 border-green-500"
      ></div>
    </div>
  );
};
export default Loading;
