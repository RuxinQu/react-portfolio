import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const formStyle = {
  padding: "0 2rem",
};

export const Contact = () => {
  // handle input controlled form
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;
  const handleChange = ({ target }) =>
    setFormState((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));

  // after submit the form, all input field is set to be blank, a toast will show on the top of the page
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formState),
      });
      if (response.ok) {
        setFormState({ name: "", email: "", message: "" });
        toast.success("Form submitted!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        toast.error("Fail to submit the form!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  // when the curser clicks outside the input field without entering right data, send an alert at the bottom of the form
  const [error, setError] = useState();
  const handleError = ({ target }) => {
    // alert input name is required when no input
    if (!target.value) {
      setError(`${target.name} is required`);
      return;
    }
    setError("");
  };
  return (
    <div id="contact" className="container-fluid">
      <div className="row d-flex justify-content-center align-items-center pt-5">
        <div className="map col-12 col-md-8 col-lg-6 position-relative">
          {/* Seattle map  */}
          <iframe
            width="100%"
            height="100%"
            title="map"
            src="https://www.google.com/maps/embed/v1/place?q=seattle&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          ></iframe>
          {/* contact info on top of the map */}
          <div className="position-absolute info-wrapper round">
            <a href="mailto: ruxinqu@gmail.com" className="info">
              Email:ruxinqu@gmail.com
            </a>
            <p className="info">Phone: 206-710-5707</p>
          </div>
        </div>

        {/* contact form. add event listener for all the input fields and the submit button */}
        <form style={formStyle} onSubmit={handleSubmit}>
          <h3 className="text-white text-center">Contact Me</h3>
          <div className="form-group">
            <label for="name">Name</label>
            <input
              value={name}
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
              value={email}
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
              value={message}
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
      </div>
    </div>
  );
};
