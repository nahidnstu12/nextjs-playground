import { useState } from "react";
import styles from "./animation.module.scss";

export default function Animation() {
  const [btnCls, setClass] = useState(styles.tossing);
  const [active, setActive] = useState("");
  const btnEffects = [
    "SlideUp",
    "slideDown",
    "SlideLeft",
    "SlideRight",
    "SlideExpandUp",
    "ExpandUp",
    "FadeIn",
    "ExpandOpen",
    "BigEntrance",
    "Hatch",
    "Bounce",
    "Pulse",
    "Floating",
    "Tossing",
    "PullUp",
    "PullDown",
    "StretchLeft",
    "StretchRight",
  ];
  const handleClick = (e) => {
    let str = e.target.innerText;
    setActive(str);
    // console.log({str, active});

    str = [str[0].toLowerCase(), ...str.slice(1)].join("");

    setClass(styles[str]);
  };

  return (
    <>
      <div id={styles.object} className={btnCls}>
        <span>AnimateCSS {btnCls}</span>
      </div>
      <div className={styles.btnBase}>
        {btnEffects.map((itm) => (
          <button
            key={itm}
            onClick={(e) => handleClick(e)}
            className={itm === active ? styles.active : ""}
          >
            {itm}
          </button>
        ))}
        <br />
      </div>
    </>
  );
}
