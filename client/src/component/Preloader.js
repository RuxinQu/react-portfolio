import React, { useState, useEffect } from "react";
import { Grid } from "react-loader-spinner";

// the detail code is implemented in styles.css file
export const Preloader = () => {
  const [load, setLoad] = useState(true);
  // useEffect for the loader. show loader when refreshing the page. 1.1s later change the loader to not display.
  // dependency array is empty only rendered during mounting
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 1000);
    // clear the useEffect
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    load && (
      <Grid
        height="130"
        width="130"
        color="#f17105"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          backgroundColor: "#111827",
          width: "100%",
          height: "100%",
          zIndex: 1031,
        }}
        visible={true}
      />
    )
  );
};
