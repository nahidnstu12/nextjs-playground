import styles from "./register.module.scss";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import router from "next/router";

export default function Login() {
  const [submitting, setSubmitting] = useState(false);
  const [serverErrors, setServerErrors] = useState([]);
  const [cookies, setCookies] = useCookies(["login_cookie"]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });
  const handleSignIn = async (formdata) => {
    setSubmitting(true);
    setServerErrors([]);
    const res = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: formdata.email,
        password: formdata.password,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (data.msg) {
      setServerErrors(data.msg);
      //   console.log(data.errors);
    } else {
      console.log("success to login");
      setCookies("login_cookie", JSON.stringify(data.token), {
        path: "/",
        maxAge: 3600,
        sameSite: true,
      });
    }
    setSubmitting(false);
  };
  useEffect(() => {
    if (cookies.login_cookie !== undefined) {
      router.push("/dashboard");
    }
    console.log(cookies);
  }, [cookies]);
  return (
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
