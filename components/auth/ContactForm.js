import styles from "./contact.form.module.scss";
import { GoLocation, GoMail } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaBloggerB,
} from "react-icons/fa";
const contactInformation = [
  {
    id: "location",
    icon: <GoLocation />,
    text: `139, TPL Complex, \n Signboard, Dhaka`,
  },
  {
    id: "mail",
    icon: <GoMail />,
    text: `contact@oneshop.com`,
  },
  {
    id: "telephone",
    icon: <BsTelephone />,
    text: `310-286-1621`,
  },
];
const socialInformation = [
  <FaFacebookF />,
  <FaTwitter />,
  <FaLinkedinIn />,
  <FaBloggerB />,
];


export default function ContactForm() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.contactInfo}>
          <div>
            <h2>Contact Form</h2>
            <ul className={styles.info}>
              {contactInformation.map((item) => (
                <li key={item.id}>
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <ul className={styles.sci}>
            {socialInformation.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className={styles.contactForm}>
          <h2>Send Message</h2>
          <form className={styles.formBox}>
            <InputField
              type={"text"}
              inputStyles={styles.inputBox}
              inputWidth={styles.w50}
              placehoder={"First Name"}
              //   errMsg={"First name required"}
            />
            <InputField
              type={"text"}
              inputStyles={styles.inputBox}
              inputWidth={styles.w50}
              placehoder={"Last Name"}
            />
            <InputField
              type={"email"}
              inputStyles={styles.inputBox}
              inputWidth={styles.w50}
              placehoder={"email"}
            />
            <InputField
              type={"phone"}
              inputStyles={styles.inputBox}
              inputWidth={styles.w50}
              placehoder={"Phone Number"}
            />
            <InputField
              type={"textarea"}
              inputStyles={styles.inputBox}
              inputWidth={styles.w100}
              placehoder={"Message"}
            />

            <button className={styles.btnSend}>Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}

const InputField = ({ type, placehoder, inputStyles, inputWidth, errMsg }) => {
  return type === "textarea" ? (
    <div className={`${inputStyles} ${inputWidth}`}>
      <textarea required />
      <span>{placehoder}</span>
      <p className="error">{errMsg}</p>
    </div>
  ) : (
    <div className={`${inputStyles} ${inputWidth}`}>
      <input type={type} required />
      <span>{placehoder}</span>
      <p className="error">{errMsg}</p>
    </div>
  );
};
