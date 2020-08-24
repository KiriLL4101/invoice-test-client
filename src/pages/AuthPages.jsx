import React from "react";
import { useHttp } from "../hooks/http.hook";
import { useSelector } from "react-redux";
// import debounce from "lodash/debounce";

import "../style/auth.scss";

export default function AuthPages() {
  const { login } = useSelector(({ auth }) => {
    return {
      ...auth
    };
  });
  const { loading, error, request, clearError } = useHttp();
  const [form, setForm] = React.useState({
    username: "",
    password: ""
  });
  const [complited , setComplited] = React.useState(false)

  // const validationPassword = (password) => {
  //     const REGEXP = /[0-9][A-z]/;
  //     if (REGEXP.test(password) && password.length <= 8) {
  //         return null;
  //     }
  //     return {
  //         invalidPassword: true
  //     };
  // }

      //TODO
  //   const onChange = React.useCallback(
  //     debounce(async target => {
  //       try {
  //         if (target) {
  //           const response = await request(
  //             `https://api.github.com/users/${target.value}`
  //           );
  //           if (response.avatar_url) {
  //             setForm({ ...form, [target.name]: target.value });
  //           }else{
  //             setValidError("Нету фото на github")
  //           }
  //         }
  //       } catch (e) {}
  //     },500),
  //     []
  //   );

  const chengeHandler = e => {
    //   e.persist();
    setForm({ ...form, [e.target.name]: e.target.value });
    // onChange(e.target)
  };

  const registerHandler = async () => {
    try {
      const data = await request("/api/auth/signup", "POST", { ...form });
      if(data){
        clearError()
        setComplited(true)
      }
    } catch (e) {}
  };

  const loginHandler = async () => {
    try {
      const data = await request("/api/auth/login", "POST", { ...form });
      login(data.token, data.userId);
    } catch (e) {}
  };

  return (
    <div className="wrap">
      <div className="form" action="#">
        <span className="form__login">Login</span>

        <div className="form__field">
          <input
            className={`${error && "error"}`}
            type="text"
            name="username"
            placeholder="Username"
            onChange={chengeHandler}
            required
          />
          <span className="focus-input100"></span>
        </div>

        <div className="form__field">
          <input
            className={`${error && "error"}`}
            type="password"
            name="password"
            placeholder="Password"
            onChange={chengeHandler}
            required
          />
          <span className="focus-input100"></span>
        </div>

        <div className="contact-wrap">
          <div>
            <label>
              <input
                className="input-checkbox100"
                type="checkbox"
                name="remember-me"
              />
              Remember me
            </label>
          </div>

          <div>
            <a href="/" className="forgot">
              Forgot?
            </a>
          </div>
        </div>

        <div className="container-btn">
          <button
            className="form__btn"
            onClick={loginHandler}
            disabled={loading}
          >
            Login
          </button>
        </div>

        <p className="form__sigh" onClick={registerHandler} disabled={loading}>
          Sign Up
        </p>
        {error && <p className="msg-error">{error}</p>}
        {complited && <p className="msg-complited">Пользователь создан</p>}
      </div>
      
    </div>
  );
}
