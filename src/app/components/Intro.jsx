import React, { useEffect, useState } from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import Image from "next/image";
import Typed from "typed.js";
import { KeyboardArrowDown } from "@mui/icons-material";

export default function Intro() {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWindowWidth);

    updateWindowWidth();

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  useEffect(() => {
    const options = {
      strings: [
        "Desarrollador web",
        "Desarrollador de aplicaciones",
        "Desarrollador front-end",
      ],
      typeSpeed: 100,
      backSpeed: 20,
      smartBackspace: true,
      loop: true,
    };
    const typed = new Typed("#typed-text-element", options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <Box sx={{ zIndex: "-1" }}>
        <div
          className="sombra-semicirculo"
          style={{ right: 0, filter: "blur(5rem)" }}
        ></div>
      </Box>
      <Grid container className="pagination flex justify-center items-center">
        <Grid item xs={12} md={6} className="flex justify-end">
          <Image src="/images/lr-logo-white.png" width={900} height={900} />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          justifyContent="center"
          className="justify-center"
        >
          <Typography
            className="display-3 font-type"
            variant="body1"
            sx={{
              fontSize: "5rem",
              WebkitTextStroke: "2px solid #fffff",
              margin: { xs: "0.8rem", md: "0rem", lg: "0rem" },
            }}
          >
            Luis Rojas
          </Typography>
          <Typography
            className="font-type"
            sx={{
              fontSize: "3rem",
              margin: { xs: "1rem", md: "0rem", lg: "0rem" },
              display: { xs: "none", md:"block"}
            }}
            id="typed-text-element"
          ></Typography>
          <Box
            className="flex row mt-4 items-center"
            sx={{ justifyContent: { xs: "center", lg: "start" } }}
          >
            <a
              href="../../../public/curriculum Luis Rojas 1.docx"
              download="CV_LuisRojas.pdf"
            >
              <Button className=" font-type" variant="outlined"
                sx={{ borderRadius: "3px",  width: "100%",
                height: "3rem",
                borderWidth: "2px",
                borderRadius: "5px",
                borderImageSlice: "1",
                background: "transparent",
                color: "white",
                animation: "pulse 2s infinite", }}
              >
                Download cv
              </Button>
            </a>
            {/* <a href="https://wa.me/+584148859372" target="_blank">
              <Button
                className="ml-4 font-type"
                variant="outlined"
                id="my-button"
                sx={{ borderRadius: "3px",  width: "10rem",
                height: "3rem",
                borderWidth: "2px",
                borderRadius: "5px",
                borderImageSlice: "1",
                background: "transparent",
                color: "white",
                animation: "pulse 2s infinite", }}
              >
                Contact
              </Button>
            </a> */}
          </Box>
          {windowWidth > 1560 ? (
            <Box sx={{ zIndex: "-1" }}>
              <div
                className="sombra-semicirculo"
                style={{ left: "15%", filter: "blur(5rem)" }}
              ></div>
            </Box>
          ) : (
            ""
          )}
        </Grid>
      </Grid>
      {windowWidth > 1560 ? (
        <Box justifyContent="center">
          <div className="scroll-arrow">
            <KeyboardArrowDown sx={{ fontSize: "4rem" }} />
          </div>
        </Box>
      ) : (
        ""
      )}
    </div>
  );
}
