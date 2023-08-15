import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../store/authSlice.js";

function Authentication() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  function handleLogin() {
    dispatch(login());
  }

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <>
      <h2 className="text-center">Authentication</h2>
      <table>
        <thead>
          <tr>
            <th>Authentication Value</th>
            <th>Login Button</th>
            <th>Logout Button</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{isAuthenticated ? "Logged In" : "Not Logged In"}</td>
            <td>
              <div className="authentication__btn-wrapper">
                <button onClick={handleLogin} className="btn btn--green">
                  Login
                </button>
              </div>
            </td>
            <td>
              <div className="authentication__btn-wrapper">
                <button onClick={handleLogout} className="btn btn--red">
                  Logout
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Authentication;
