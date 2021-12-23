import styles from "./register.module.scss";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { dispatchLogin } from "../../redux/actions/authAction";


export default function Login() {
  const [submitting, setSubmitting] = useState(false);
  const [serverErrors, setServerErrors] = useState([]);
  const dispatch = useDispatch();
  const { notify, auth } = useSelector((state) => state);
 
  const authToken = auth.auth?.token;
  const isLoading = notify.notify?.loading;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  const handleSignIn = async (formdata) => {
    const cred = {
      username: formdata.email,
      password: formdata.password,
    };
    dispatch(dispatchLogin(cred));
  };
  useEffect(() => {
    // if (Object.keys(auth).length !== 0) router.push("/dashboard");

    // console.log(cookies);
  }, [authToken]);
  return (
    !isLoading && (
      <div className={styles.form_wrapper}>
        <div className={styles.form_container}>
          <div className={styles.title_container}>
            <h2>Responsive Login Form</h2>
          </div>
          <div className={`styles.row clearfix`}>
            <div>
              <form onSubmit={handleSubmit(handleSignIn)}>
                {/* have any server errors */}
                {serverErrors && (
                  <ul>
                    {/* {serverErrors.map((err) => (
                    <li key={err}>{err}</li>
                  ))} */}
                    <li>{serverErrors}</li>
                  </ul>
                )}
                <InputField
                  inputStyle={styles.input_field}
                  icon={<MdOutlineEmail />}
                  type="text"
                  name="email"
                  register={register}
                  required="Input field can not be empty"
                  error={errors.email}
                  placeholder="Email"
                  className={styles.inputBox}
                />
                <InputField
                  inputStyle={styles.input_field}
                  icon={<RiLockPasswordLine />}
                  type="text"
                  name="password"
                  placeholder="Password"
                  className={styles.inputBox}
                  register={register}
                  required="Input field can not be empty"
                  error={errors.password}
                />

                <button className={styles.button} disabled={submitting}>
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

const InputField = ({
  type,
  placeholder,
  name,
  className,
  register,
  required,
  minLength,
  maxLength,
  validate,
  pattern,
  error,
  icon,
  inputStyle,
  labelText,
  id,
}) => {
  return (
    <div className={inputStyle}>
      <span>{icon}</span>
      <input
        {...register(name, {
          required,
          minLength,
          maxLength,
          validate,
          pattern,
        })}
        type={type}
        name={name}
        placeholder={placeholder}
        className={className}
        id={id}
      />
      {labelText && <label htmlFor={id}>{labelText}</label>}
      {error && <p className="errorMsg">{error.message}</p>}
    </div>
  );
};
