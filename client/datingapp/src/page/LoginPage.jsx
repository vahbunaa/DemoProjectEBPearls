import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";
import { loginUser } from "../requests/loginRequests";
import { Wrapper } from "../css/pageCSS";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const history = useHistory();
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string().required("Required").min(4, "Password to short"),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(false);
        console.log("Login Page", values);
        const result = await loginUser(values);
        if (result.request.status === 201) {
          history.push("/dashboard");
        } else {
          alert("User doesnot exists");
        }
      }}
    >
      {(formik) => (
        <Wrapper>
          <section>
            <div className="container">
              <form onSubmit={formik.handleSubmit} className="form-container">
                <img src="/images/bhetumorglogo.png" alt="" />
                {/* <h1>Bhetum </h1> */}
                <h4>LOG IN</h4>
                <div>
                  <label htmlFor="email"> </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="E-mail"
                    {...formik.getFieldProps("email")}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="password"></label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    {...formik.getFieldProps("password")}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                  ) : null}
                </div>

                <button type="submit">Log In</button>
                <a href="/signup">New User? Signup Here</a>
              </form>
            </div>
          </section>
        </Wrapper>
      )}
    </Formik>
  );
};

export default LoginPage;
