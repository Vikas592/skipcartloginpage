import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { LoginPageInput } from "../../../types/LoginPage";

import { loginActions } from "../../../slices/loginslice";

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
    if (getValues().email && getValues().password) {
      dispatch(loginActions.updateEmail(getValues().email));

      dispatch(loginActions.updatePassword(getValues().password));

      setLoginFailed(false);
      if (rememberme) {
        localStorage.setItem(
          "token",
          JSON.stringify({
            email: getValues().email,
            password: getValues().password,
          })
        );
      }
      const data = {
        email: getValues().email,
        password: getValues().password,
        token: rememberme ? localStorage.getItem("token") : null,
      }
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(data),
      });
      const res = await response.json();
      if (res.success) {
        //reroute to login success
        dispatch(loginActions.loginSuccess());
      } else {
        setLoginFailed(true);
      }
    }
  };

  useEffect(() => {
    if (loggedIn) history.push("/Order");
  }, [loggedIn, history]);

  const rememberMe = async () => {
    setLoading(true);
    const response = await fetch("http://localhost:4000/rememberme", {
      method: "POST",
      headers: {
        "content-type": 'application/json'
      },
      body: JSON.stringify({
        token: localStorage.getItem("token"),
      }),
    });

    const res = await response.json();
    setLoading(false);

    if (res.success) {
      dispatch(loginActions.loginSuccess());
    }
  };

  useEffect(() => {
    rememberMe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (loading ? <h1>Loading...</h1> :<>
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

        <input
          type="checkbox"
          checked={rememberme}
          onChange={() => setRememberme(!rememberme)}
          className="remember-checbox"
        />
        <span>remember me</span>
        <button className="login-btn" type="submit">
          Login
        </button>
        <div className="login-input">

        <Link to={"/forgotPassword"} style={{ textDecoration: 'none' }}>Trouble Logging in?</Link>
        </div>
    {loginFailed && (
      <div className="wrong-pwd login-input">
        Your username or password is wrong. Please try again
      </div>
  )
  }
      </div>
    </form>
   
  </>
  );
};

export default LoginPage;
