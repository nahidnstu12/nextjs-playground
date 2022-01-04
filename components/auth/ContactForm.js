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
    text: `139, TPL Complex, <br />
                  Signboard, Dhaka`,
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
            <div className={`${styles.inputBox} ${styles.w50}`}>
              <input type="text" required />
              <span>First Name</span>
              {/* <p className="error">First name required</p> */}
            </div>
            <div className={`${styles.inputBox} ${styles.w50}`}>
              <input type="text" required />
              <span>Last Name</span>
              {/* <p className="error">First name required</p> */}
            </div>
            <div className={`${styles.inputBox} ${styles.w50}`}>
              <input type="email" required />
              <span>Email</span>
              {/* <p className="error">First name required</p> */}
            </div>
            <div className={`${styles.inputBox} ${styles.w50}`}>
              <input type="phone" required />
              <span>Mobile</span>
              {/* <p className="error">First name required</p> */}
            </div>
            <div className={`${styles.inputBox} ${styles.w100}`}>
              <textarea required></textarea>
              <span>Message</span>
              {/* <p className="error">First name required</p> */}
            </div>
            <button className={styles.btnSend}>Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}
