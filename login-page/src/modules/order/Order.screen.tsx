import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginActions } from "../../slices/loginSlice/loginslice";
import customAxios from "../../axios";

function Order() {
  const dispatch = useDispatch();
  const history = useHistory();
  const logout = async () => {
    try {
      const res:any = await customAxios.post("/logout", {
        token: localStorage.getItem("token"),
      });
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
