import React, { useState } from "react";

const formStyle = {
  padding: "0 2rem",
  marginTop: 20,
};

export const Contact = () => {
  // handle name input controlled form
  const [name, setName] = useState("");
  const handleChangeName = ({ target }) => {
    setName(target.value);
  };

  // handle email input controlled form
  const [email, setEmail] = useState("");
  const handleChangeEmail = ({ target }) => {
    setEmail(target.value);
  };

  // handle message input controlled form
  const [message, setMessage] = useState("");
  const handleChangeMessage = ({ target }) => {
    setMessage(target.value);
  };

  // after submit the form, all input field is set to be blank
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    setName("");
    setEmail("");
    setMessage("");
  };

  // when the curser clicks outside the input field without entering right data, send an alert at the bottom of the form
  const [error, setError] = useState("Hope you have a nice day!");
  const handleError = ({ target }) => {
    // alert input name is required when no input
    if (!target.value) {
      setError(`${target.id} is required`);
      return;
    }
    // email validation. alert if email is invalid
    if (target.id === "email") {
      const validEmail =
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
          target.value
        );
      if (!validEmail) {
        setError(`email is invalid`);
      }
    }
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
            frameborder="0"
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
              onChange={handleChangeName}
              onBlur={handleError}
              id="name"
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
              onChange={handleChangeEmail}
              onBlur={handleError}
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="form-group">
            <label for="message">Message</label>
            <textarea
              value={message}
              onChange={handleChangeMessage}
              onBlur={handleError}
              className="form-control"
              id="message"
              rows="4"
              cols="30"
              required
            ></textarea>
          </div>

          <p className="text-white">{error}</p>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
