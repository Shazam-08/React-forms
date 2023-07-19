import React from "react";

function Form() {
  return (
    <>
      <h1>Welcome !</h1>
      <h3>This is just a test form to test validation </h3>
      <div>
        <form>
          <div>
            <label>Name</label>
            <input type="text" name="name" id="name" placeholder="Name" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirm_password"
              id="confirm_password"
              placeholder="Confirm Password"
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
