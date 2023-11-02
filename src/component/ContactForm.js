import React from "react";
import ReactLoading from "react-loading";
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
  isSubmitting,
}) => {
  return (
    <form style={formStyle} onSubmit={handleSubmit} className="contact-form">
      {/* contact form. add event listener for all the input fields and the submit button */}
      <h3 className="text-white text-center">Contact Me</h3>
      <div className="form-group">
        <label>Name</label>
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
        <label>Email address</label>
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
        <label>Message</label>
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
      {isSubmitting ? (
        <ReactLoading type={"spin"} color="#fff" width={50} />
      ) : (
        <button
          type="submit"
          className="btn btn-primary"
          disabled={isSubmitting}
        >
          Submit
        </button>
      )}

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </form>
  );
};
