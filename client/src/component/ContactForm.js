import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const formStyle = {
  padding: "0 2rem",
};

export const ContactForm = ({
  formState,
  handleChange,
  handleError,
  handleSubmit,
  error,
}) => {
  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      {/* contact form. add event listener for all the input fields and the submit button */}
      <h3 className="text-white text-center">Contact Me</h3>
      <div className="form-group">
        <label for="name">Name</label>
        <input
          value={formState.name}
          onChange={handleChange}
          onBlur={handleError}
          name="name"
          type="text"
          className="form-control"
          placeholder="Enter name"
          required
        />
      </div>
      <div className="form-group">
        <label for="email">Email address</label>
        <input
          value={formState.email}
          onChange={handleChange}
          onBlur={handleError}
          name="email"
          type="email"
          className="form-control"
          placeholder="Enter email"
          required
        />
      </div>
      <div className="form-group">
        <label for="message">Message</label>
        <textarea
          value={formState.message}
          onChange={handleChange}
          onBlur={handleError}
          type="text"
          className="form-control"
          name="message"
          rows="3"
          cols="30"
          required
        ></textarea>
      </div>

      <p className="text-warning"> {error ? error : <br />} </p>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </form>
  );
};
