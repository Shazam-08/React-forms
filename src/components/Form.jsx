import React from "react";
import { useFormik } from "formik";

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
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log("The values are : ", values);
    },
  });

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
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirm_password"
              id="confirm_password"
              placeholder="Confirm Password"
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
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
