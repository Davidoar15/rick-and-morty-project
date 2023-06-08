import React from "react";
import { useState } from "react";
import validateForm from "./validate";
import style from "./Form.module.css";

export default function Form({ login }) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm(userData.email, userData.password);
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      login(userData);
      alert("Data Completed");
      setUserData({ email: "", password: "" });
      setErrors({});
    } else {
      alert("Data is Incompleted. All fields must be filled");
    }
  };

  return (
    <div className={style.divForm}>
      <h2 className={style.formH2}>Let's Fun, Berp!</h2>

      <img
        src="https://i.gifer.com/origin/1b/1beb908cab6520ce70dcc2aba8e28317.gif"
        className={style.divImgForm}
        alt="Gift Form"
      />

      <form onSubmit={handleSubmit}>
        <div className={style.divInputs}>
          <div className={style.divInputEmail}>
            <label className={style.labelForm}>Email</label>
            <input
              name="email"
              value={userData.email}
              placeholder="example@gmail.com"
              type="email"
              className={style.inputForm}
              onChange={handleChange}
            ></input>
            {errors.email && <h4 className={style.error}>{errors.email}</h4>}
          </div>

          <div className={style.divInputPass}>
            <label className={style.labelForm}>Password</label>
            <input
              name="password"
              value={userData.password}
              placeholder="********"
              type="password"
              className={style.inputForm}
              onChange={handleChange}
            ></input>
            {errors.password && (
              <h4 className={style.error}>{errors.password}</h4>
            )}
          </div>
        </div>

        <div className={style.divBtnForm}>
          <button className={style.btnForm} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
