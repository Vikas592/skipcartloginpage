import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginActions } from "../../slices/loginSlice/loginslice";
import customAxios from "../../axios";

function Order() {
  const dispatch = useDispatch();
  const history = useHistory();
  const logout = async () => {
    try {
      const response = await customAxios.post("http://localhost:4000/logout", {
        token: localStorage.getItem("token"),
      });
      const res = response.data;
      if (res.success) {
        dispatch(loginActions.loginSuccess());
      }
    } catch (error) {
    }
    localStorage.removeItem("token");
    history.replace('/');
  };
  return (
    <div>
      login Successful
      <button onClick={logout}>
        LogOut
      </button>
    </div>
  );
}

export default Order;
