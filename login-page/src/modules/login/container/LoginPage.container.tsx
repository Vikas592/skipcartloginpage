import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { LoginPageInput } from "../../../types/LoginPage";

import { loginActions } from "../../../slices/loginSlice/loginslice";
import customAxios from "../../../axios";

const LoginPage = () => {
  const [loginFailed, setLoginFailed] = useState(false);
  const [rememberme, setRememberme] = useState(false);
  const loggedIn = useSelector((state: any) => state.login.loggedIn);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<LoginPageInput>({
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = async (e: any) => {
    const { email, password } = getValues();
    if (email && password) {

      dispatch(loginActions.updateEmail(email));
      dispatch(loginActions.updatePassword(password));

      setLoginFailed(false);
      if (rememberme) {
        localStorage.setItem(
          "token",
          JSON.stringify({
            email,
            password,
          })
        );
      }
      const data = {
        email,
        password,
        token: rememberme ? localStorage.getItem("token") : null,
      };
      try {

        const response = await customAxios.post("/login", data);
        const res = response.data;
        if (res.success) {
          dispatch(loginActions.loginSuccess());
        }
      }
      catch (error: any) {
        setLoginFailed(true);
      }
    }
  };

  useEffect(() => {
    if (loggedIn) history.push("/Order");
  }, [loggedIn, history]);

  const rememberMe = async () => {
    setLoading(true);
    try {
      const response = await customAxios.post("/rememberme", {
        token: localStorage.getItem("token"),
      });
      const res = response.data;
      if (res.success) {
        dispatch(loginActions.loginSuccess());
      }
    }
    catch (error: any) {
    }
    setLoading(false);
  };

  useEffect(() => {
    rememberMe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (loading ? <h1>Loading...</h1> :
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
      <header className="login-header">SIGN IN</header>
      <div className="login-body">
        <label className="email" htmlFor="email">
          Email Address
        </label>

        <input
          type="email"
          autoComplete="off"
          className="email-input"
          id="email"
          placeholder="Enter Email Address"
          {...register("email", { required: true })}
        />

        {errors.email && <span>This field is required</span>}

        <label className="password" htmlFor="Password">
          Password
        </label>

        <input
          type="password"
          id="Password"
          className="password-input"
          placeholder="Password"
          {...register("password", { required: true })}
        />

        {errors.password && <span>This field is required</span>}
        <div className="flex mg-5">
          <input
            type="checkbox"
            checked={rememberme}
            onChange={() => setRememberme(!rememberme)}
            className="remember-checbox"
            name='rememberMe'
          />
          <label htmlFor="rememberMe">Remember me</label>
        </div>

        <button className="login-btn" type="submit">
          Login
        </button>
        <Link to="/forgotPassword"> Trouble Logging in?</Link>
        {loginFailed && (
          <div className="wrong-pwd">
            Your username or password is wrong. Please try again
          </div>
        )}
      </div>
    </form>
  );
};

export default LoginPage;
