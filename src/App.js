import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Registration from "./component/Registration";
import { ToastContainer } from "react-toastify";
import Login from "./component/Login";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const products = useSelector((state) => state.products);
  const users = useSelector((state) => state.users);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <ToastContainer />
      {products.map((product) => (
        <div key={product.id}>
          {product.name} - {product.price}
        </div>
      ))}
      {users.map((user) => (
        <div key={user.id}>
          {user.name} - {user.userName}
        </div>
      ))}

      <Registration />
      {user ? (
        <button
          className="btn btn-primary"
          onClick={() => {
            dispatch({
              type: "LOGOUT",
            });
          }}>
          Logout
        </button>
      ) : (
        <Login />
      )}
    </div>
  );
}
export default App;
