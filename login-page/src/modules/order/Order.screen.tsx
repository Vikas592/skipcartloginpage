import { useHistory } from "react-router-dom";
import { loginActions } from "../../slices/loginSlice/loginslice";
import { logoutThunk } from "../../slices/loginSlice/loginSlice.thunk";
import { useAppDispatch } from "../../loginstore/store";

function Order() {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const logout = async () => {
    try {
      const res = await dispatch(logoutThunk({
        token: localStorage.getItem("token")
      })).unwrap();
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
