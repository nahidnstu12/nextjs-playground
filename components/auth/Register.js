import styles from "./register.module.scss";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiUserCircle } from "react-icons/bi";
export default function Register() {
  return (
    <div className={styles.form_wrapper}>
      <div className={styles.form_container}>
        <div className={styles.title_container}>
          <h2>Responsive Registration Form</h2>
        </div>
        <div className={`styles.row clearfix`}>
          <div>
            <form>
              <InputField
                inputStyle={styles.input_field}
                icon={<MdOutlineEmail />}
                type="email"
                name="email"
                placeholder="Email"
                className={styles.inputBox}
              />
              <InputField
                inputStyle={styles.input_field}
                icon={<RiLockPasswordLine />}
                type="password"
                name="password"
                placeholder="Password"
                className={styles.inputBox}
              />

              <InputField
                inputStyle={styles.input_field}
                icon={<RiLockPasswordLine />}
                type="password"
                name="password"
                placeholder="Re-type Password"
                className={styles.inputBox}
              />

              <div className={`${styles.row} ${styles.clearfix}`}>
                <div className={styles.col_half}>
                  <InputField
                    inputStyle={styles.input_field}
                    icon={<BiUserCircle />}
                    type="text"
                    name="name"
                    placeholder="First Name"
                    className={styles.inputBox}
                  />
                </div>
                <div className={styles.col_half}>
                  <InputField
                    inputStyle={styles.input_field}
                    icon={<BiUserCircle />}
                    type="text"
                    name="name"
                    placeholder="Last Name"
                    className={styles.inputBox}
                  />
                </div>
              </div>

              <div className={`${styles.input_field} ${styles.radio_option}`}>
                <InputRadio
                  type="radio"
                  name="radiogroup1"
                  labelText="Male"
                  className={styles.inputBoxRadio}
                  id="rd1"
                />
                <InputRadio
                  type="radio"
                  name="radiogroup1"
                  labelText="Female"
                  className={styles.inputBoxRadio}
                  id="rd2"
                />
              </div>

              <Select option={options} />

              <InputField
                inputStyle={`${styles.checkbox_option}`}
                type="checkbox"
                labelText="I agree with terms and conditions"
                className={styles.inputBoxCheck}
                id="cb1"
              />
              <InputField
                inputStyle={`${styles.checkbox_option}`}
                type="checkbox"
                labelText="I want to receive the newsletter"
                className={styles.inputBoxCheck}
                id="cb2"
              />
              <button className={styles.button}>Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const InputField = (props) => {
  return (
    <div className={props.inputStyle}>
      <span>{props.icon}</span>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        className={props.className}
        id={props.id}
      />
      {props.labelText && <label htmlFor={props.id}>{props.labelText}</label>}
    </div>
  );
};
const InputRadio = (props) => {
  return (
    <>
      <input
        type={props.type}
        name={props.name}
        className={props.className}
        id={props.id}
      />
      {props.labelText && <label htmlFor={props.id}>{props.labelText}</label>}
    </>
  );
};
const options = ["option 1", "option 2", "option 3"];
const Select = () => {
  return (
    <div className={`${styles.input_field} ${styles.select_option}`}>
      <select>
        <option>Select a country</option>
        {options &&
          options.map((option) => <option key={option}>{option}</option>)}
      </select>
      <div className={styles.select_arrow}></div>
    </div>
  );
};
