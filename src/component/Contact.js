import React, { useState } from "react";

const formStyle = {
  paddingLeft: "2rem",
};

export const Contact = ({
  name,
  email,
  message,
  handleChangeName,
  handleChangeEmail,
  handleChangeMessage,
  handleSubmit
}) => {
  return (
    <div id="contact" className="container-fluid">
      <div className="row d-flex justify-content-center align-items-center pt-5">
        <iframe
          width="100%"
          height="100%"
          title="map"
          frameborder="0"
          src="https://www.google.com/maps/embed/v1/place?q=seattle&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          className="map"
        ></iframe>

        <form style={formStyle} onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="name">Name</label>
            <input
              value={name}
              onChange={handleChangeName}
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
              className="form-control"
              id="message"
              rows="5"
              cols="30"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
