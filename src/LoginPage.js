import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "./Redux/login";

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const onEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    let body = {
      email: email,
      password: password,
    };

    dispatch(loginAction(body)).then((response) => {
      if (response.payload.loginSuccess) {
        props.history.push("/");
      } else {
        alert("아이디 혹은 비밀번호 오류입니다. 다시 입력해주세요.");
      }
    });
  };

  return (
    <div>
      <div>
        <form onSubmit={onSubmitHandler}>
          <label>Email</label>
          <input type="email" value={email} onChange={onEmailHandler} />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={onPasswordHandler}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
