import React from "react";
import { Formik, Field } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { signupUser } from "../requests/loginRequests";
import { Wrapper } from "../css/pageCSS";

const SignUpPage = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        age: "",
        email: "",
        password: "",
        bio: "",
        gender: "",
        occupation: "",
        hobbies: "",
        interestedIn: "",
        location: "",
      }}
      validationSchema={Yup.object().shape({
        firstName: Yup.string().required(),
        lastName: Yup.string().required(),
        age: Yup.number().min(17).max(100).required(),
        email: Yup.string()
          .email({ tlds: { allow: false } })
          .required()
          .lowercase()
          .trim(),
        password: Yup.string().required().min(6).max(20).trim(),
        bio: Yup.string().trim().lowercase(),
        gender: Yup.string().required().trim().lowercase(),
        occupation: Yup.string().required().trim().lowercase(),
        hobbies: Yup.string().lowercase().required(),
        interestedIn: Yup.string(),
        location: Yup.string().required(),
        // requestsSentTo: Joi.array().items(Joi.number()),
        // requestsReceived: Joi.array().items(
        //   Joi.object.shape({
        //     userID: Joi.number(),
        //     status: Joi.string().required().trim().lowercase(),
        //   })
        // ),
        // usersMatched: Joi.array().items(Joi.number()),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        console.log("result is", values);
        const newValues = {
          ...values,
          name: { firstName: values.firstName, lastName: values.lastName },
          hobbies: [{ hobbieTitle: values.hobbies }],
          location: { coordinates: [85.324, 27.7172] },
        };
        delete newValues.firstName;
        delete newValues.lastName;
        console.log(newValues);
        setSubmitting(true);
        const result = await signupUser(newValues);
      }}
    >
      {(formik) => (
        <Wrapper>
          <section>
            <div className="container">
              <form onSubmit={formik.handleSubmit} className="form-container">
                <img src="/images/bhetumorglogo.png" alt="" />
                <h4>SIGN UP</h4>
                <div>
                  <label htmlFor="firstName"></label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    {...formik.getFieldProps("firstName")}
                  />
                  {formik.touched.firstname && formik.errors.firstname ? (
                    <div>{formik.errors.firstname}</div>
                  ) : null}

                  <label htmlFor="lastName"></label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    {...formik.getFieldProps("lastName")}
                  />
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <div>{formik.errors.lastName}</div>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="age"></label>
                  <input
                    id="age"
                    type="number"
                    placeholder="Age"
                    {...formik.getFieldProps("age")}
                  />
                  {formik.touched.age && formik.errors.age ? (
                    <div>{formik.errors.age}</div>
                  ) : null}

                  <label htmlFor="email"></label>
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

                  <label htmlFor="bio"></label>
                  <textarea
                    id="bio"
                    type="text"
                    placeholder="Bio"
                    {...formik.getFieldProps("bio")}
                  />
                  {formik.touched.bio && formik.errors.bio ? (
                    <div>{formik.errors.bio}</div>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="gender"></label>
                  <select
                    style={{ width: "100%" }}
                    id="gender"
                    name="gender"
                    placeholder="Gender"
                    {...formik.getFieldProps("gender")}
                  >
                    <option defaultValue="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  {formik.touched.gender && formik.errors.gender ? (
                    <div>{formik.errors.gender}</div>
                  ) : null}

                  <label htmlFor="occupation"></label>
                  <input
                    id="occupation"
                    type="text"
                    placeholder="Occupation"
                    {...formik.getFieldProps("occupation")}
                  />
                  {formik.touched.occupation && formik.errors.occupation ? (
                    <div>{formik.errors.occupation}</div>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="hobbies"></label>
                  <input
                    id="hobbies"
                    type="text"
                    placeholder="Hobbies"
                    {...formik.getFieldProps("hobbies")}
                  />
                  {formik.touched.hobbies && formik.errors.hobbies ? (
                    <div>{formik.errors.hobbies}</div>
                  ) : null}

                  <label htmlFor="interestedIn"></label>
                  <select
                    id="interestedIn"
                    name="interestedIn"
                    placeholder="Interested In"
                    {...formik.getFieldProps("interestedIn")}
                  >
                    <option defaultValue="">Interested In?</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="both">Both</option>
                  </select>
                  {formik.touched.interestedIn && formik.errors.interestedIn ? (
                    <div>{formik.errors.interestedIn}</div>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="location"></label>
                  <input
                    id="location"
                    type="text"
                    placeholder="Location"
                    {...formik.getFieldProps("location")}
                  />
                  {formik.touched.location && formik.errors.location ? (
                    <div>{formik.errors.location}</div>
                  ) : null}
                  <button type="submit">Sign Up</button>
                </div>
                <a href="/">Old User? LogIn Here</a>
              </form>
            </div>
          </section>
        </Wrapper>
      )}
    </Formik>
  );
};
export default SignUpPage;
