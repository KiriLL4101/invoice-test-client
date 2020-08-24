import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

import Header from "./components/Header";
import { useRouter } from "./router";
import { useAuth } from "./hooks/auth.hook";
import { setLogin, setLogout, setUser } from "./state/action/auth";
import Loader from "./components/Loader";


function App() {
  const dispatch = useDispatch();
  const { token, login, logout, userId , ready} = useAuth();
  dispatch(setLogin(login));
  dispatch(setLogout(logout));
  dispatch(setUser({ token, userId }));
  const isAuthenticated = !!token;
  const routes = useRouter(isAuthenticated);

  if(!ready){
    return <Loader />
  }

  return (
    <BrowserRouter>
      {isAuthenticated && <Header logout={logout} />}
      <div className="container">{routes}</div>
      {isAuthenticated && (
        <footer className="footer">Copyright &#169; 2020</footer>
      )}
    </BrowserRouter>
  );
}

export default App;
