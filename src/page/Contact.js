import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import TextField from "@mui/material/TextField";
import Box from "@mui/system/Box";
import Button from "@mui/material/Button";

import "react-toastify/dist/ReactToastify.css";

const defaultValues = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  // handle input controlled form
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues, mode: "onBlur" });

  // after submit the form, all input field is set to be blank, a toast will show on the top of the page
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(
        "https://react-portfolio-rq.herokuapp.com/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        toast.success("Form submitted!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        reset();
      } else {
        toast.error("Fail to submit the form!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
      setIsSubmitting(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box id="contact" width="100%">
      <Box
        className="pic-of-seattle"
        minHeight={"100dvh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ marginTop: { xs: "20px", md: "30px", lg: "50px" } }}
      >
        <Box
          className="contact-form"
          component={"form"}
          sx={{
            display: "flex",
            flexDirection: "column",
            "& > :not(style)": { m: 1, width: 300 },
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "1.5rem",
              fontSize: "1.5rem",
              color: "#dbdbdb",
            }}
          >
            Contact Me
          </h2>
          <Controller
            render={({ field }) => (
              <TextField
                label={errors.name ? errors.name.message : "Name"}
                size="medium"
                required
                {...field}
                variant="filled"
              />
            )}
            name="name"
            control={control}
            rules={{
              required: "Name is required",
              maxLength: { value: 20, message: "Maximum length exceeded" },
            }}
          />

          <Controller
            render={({ field }) => (
              <TextField
                label={errors.email ? errors.email.message : "Email"}
                size="medium"
                required
                {...field}
                variant="filled"
              />
            )}
            name="email"
            control={control}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid Email address",
              },
            }}
          />
          {/* {errors.email && (
            <small className="error">{errors.email.message}</small>
          )} */}

          <Controller
            name="message"
            control={control}
            rules={{
              required: "Message is required",
            }}
            render={({ field }) => (
              <TextField
                label={errors.message ? errors.message.message : "Message"}
                size="medium"
                multiline
                rows={5}
                required
                {...field}
                variant="filled"
              />
            )}
          />

          <Button
            variant="contained"
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submiting" : "Submit"}
          </Button>
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
        </Box>
      </Box>
    </Box>
  );
}
