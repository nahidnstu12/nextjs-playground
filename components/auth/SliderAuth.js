import { useState } from "react";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import { useForm } from "react-hook-form";
import styles from "./auth.module.scss";
import { signIn } from "next-auth/client";

export default function SliderAuth({ providers }) {
  const [isSignup, setSignup] = useState(true);

  const handleSignUp = () => {
    setSignup(true);
  };
  const handleSignIn = () => {
    setSignup(false);
  };
  return (
    <div>
      <div
        className={`${styles.container} ${
          isSignup ? styles.right_panel_active : ""
        }`}
        id="container"
      >
        {isSignup ? (
          <AuthForm
            container="signup"
            title="Create Account"
            optionText="or use your email for registration"
            btnText="Sign Up"
            providers={providers}
          />
        ) : (
          <AuthForm
            container="signin"
            title="Sign in"
            optionText="or use your account"
            btnText="Sign In"
            providers={providers}
            // onSubmit={handleSubmitLogin(onSubmit)}
          />
        )}

        <div className={styles.overlay_container}>
          <div className={styles.overlay}>
            {isSignup ? (
              <OverlayPanel
                position="left"
                text="Welcome Back!"
                info="To keep connected with us please login with your personal info"
                btnText="Sign In"
                handleSign={handleSignIn}
              />
            ) : (
              <OverlayPanel
                text="Hello, Friend!"
                info="Enter your personal details and start journey with us"
                btnText="Sign Up"
                handleSign={handleSignUp}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
const AuthForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
  };
  const container =
    props.container === "signup"
      ? styles.signup_container
      : styles.signin_container;

  
  return (
    <div className={`${styles.form_container} ${container}`}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formStyle}>
        <h1>{props.title}</h1>
        <RenderSocials providers={props.providers} />
        <span>{props.optionText}</span>
        {props.container === "signup" && (
          <CustomInput
            type="text"
            placeholder="Name"
            register={register}
            name="name"
            required="Full Name Is Required"
            minLength={{ value: 3, message: "too short" }}
            error={errors.name}
          />
        )}
        <CustomInput
          name="email"
          type="email"
          placeholder="Email"
          register={register}
          required="Email is required"
          pattern={{
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "follow email format",
          }}
          error={errors.email}
        />
        <CustomInput
          name="password"
          type="password"
          placeholder="Password"
          register={register}
          required={"Password is required"}
          maxLength={{ value: 8, message: "too long" }}
          minLength={{ value: 3, message: "too short" }}
          error={errors.password}
        />
        <button type="submit">{props.btnText}</button>
      </form>
    </div>
  );
};
const CustomInput = ({
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
}) => {
  return (
    <>
      <input
        {...register(name, {
          required,
          minLength,
          maxLength,
          validate,
          pattern,
        })}
        className={className}
        placeholder={placeholder}
        type={type}
      />
      {error && <p className="errorMsg">{error.message}</p>}
    </>
  );
};

const RenderSocials = (props) => {
  return (
    <div className={styles.social_container}>
      <a
        href="#"
        className={styles.social}
        onClick={() => signIn(props.providers.facebook.id)}
      >
        <FaFacebookF />
      </a>
      <a href="#" className={styles.social}>
        <FaGooglePlusG />
      </a>
      <a href="#" className={styles.social}>
        <FaLinkedinIn />
      </a>
    </div>
  );
};
const OverlayPanel = (props) => {
  const position =
    props.position === "left" ? styles.overlay_left : styles.overlay_right;
  return (
    <div className={`${styles.overlay_panel} ${position}`}>
      <h1>{props.text}</h1>
      <p>{props.info}</p>
      <button className={styles.ghost} onClick={props.handleSign}>
        {props.btnText}
      </button>
    </div>
  );
};
