import React from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

// function Form() {
//   const formik = useFormik({
//     initialValues: initialValues,
//     onSubmit: (values) => {
//       console.log("The values are : ", values);
//     },
//   });

//   console.log(formik); //this will return an object with a lot of functions which we can check in the console and it also has an object named values which have all our input fields

function Form() {
  // This time we are destructuring the formik object so that we dont have to write Formik.values.name etc

  // we can directly now write values.name
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log("The values are : ", values);
        action.resetForm();
      },
    });
  //   console.log(errors);

  return (
    <>
      <h1>Welcome !</h1>
      <h3>This is just a test form to test validation </h3>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              autoComplete="off"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div>
              {errors.name && touched.name ? <p>{errors.name}</p> : null}
            </div>
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              autoComplete="off"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div>
              {errors.email && touched.email ? <p>{errors.email}</p> : null}
            </div>
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              autoComplete="off"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div>
              {errors.password && touched.password ? (
                <p>{errors.password}</p>
              ) : null}
            </div>
          </div>
          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirm_password"
              id="confirm_password"
              placeholder="Confirm Password"
              autoComplete="off"
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div>
              {errors.confirm_password && touched.confirm_password ? (
                <p>{errors.confirm_password}</p>
              ) : null}
            </div>
          </div>
          {/* <div>
            <a href="#">Want to register using Gmail?</a>
          </div> */}
          <div>
            <button type="submit">Registration</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
