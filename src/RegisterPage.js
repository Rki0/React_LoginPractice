import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerAction } from "./Redux/login";

function RegisterPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const onNameHandler = (e) => {
    setName(e.target.value);
  };

  const onEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const onConfirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return alert("비밀번호와 비밀번호 확인은 같아야 합니다!");
    }

    let body = {
      email,
      name,
      password,
    };

    dispatch(registerAction(body)).then((response) => {
      if (response.payload.success) {
        props.history.push("/login");
      } else {
        alert("로그인 실패");
      }
    });
  };

  return (
    <div>
      <div>
        <form onSubmit={onSubmitHandler}>
          <label>Name</label>
          <input type="text" value={name} onChange={onNameHandler} />
          <label>Email</label>
          <input type="email" value={email} onChange={onEmailHandler} />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={onPasswordHandler}
          />
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={onConfirmPasswordHandler}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
