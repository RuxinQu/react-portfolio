import React from "react";

const formStyle = {
  padding: "0 2rem",
  marginTop: 20,
};

export const Contact = ({
  name,
  email,
  message,
  error,
  handleChangeName,
  handleChangeEmail,
  handleChangeMessage,
  handleSubmit,
  handleError,
}) => {
  return (
    <div id="contact" className="container-fluid">
      <div className="row d-flex justify-content-center align-items-center pt-5">
        <div className="map col-12 col-md-8 col-lg-6 position-relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            frameborder="0"
            src="https://www.google.com/maps/embed/v1/place?q=seattle&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          ></iframe>
          <div className="position-absolute info-wrapper round">
            <a href="mailto: ruxinqu@gmail.com" className="info">Email:ruxinqu@gmail.com</a>
            <p className="info">Phone: 206-710-5707</p>
          </div>
        </div>

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
