import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginActions } from "../../slices/loginslice";

function Order() {
  const dispatch = useDispatch();
  const history = useHistory();
  const logout = async () => {
    const response = await fetch("http://localhost:4000/logout", {
      method: "POST",

      body: JSON.stringify({
        token: localStorage.getItem("token"),
      }),
    });

    const res = await response.json();

    if (res.success) {
      dispatch(loginActions.loginSuccess());
    }
    localStorage.removeItem("token");
    history.replace('/')
  };
  return (
    <div>
      login Successful
      <button onClick={logout}>
        logOut
      </button>
    </div>
  );
}

export default Order;
