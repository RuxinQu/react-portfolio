import React, { useState } from "react";
import { toast } from "react-toastify";
import { SeattleMap } from "../component/Map";
import { ContactForm } from "../component/ContactForm";

export default function Contact() {
  // handle input controlled form
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

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
    <div id="contact" className="container-fluid" style={{ paddingTop: 70 }}>
      <div className="row d-flex justify-content-center align-items-center pt-5">
        <SeattleMap />
        <ContactForm
          formState={formState}
          error={error}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleError={handleError}
        />
      </div>
    </div>
  );
}
