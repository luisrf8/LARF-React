import React, { useEffect } from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import Image from "next/image";
import Typed from "typed.js";
import { KeyboardArrowDown } from "@mui/icons-material";

export default function Intro() {
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
        <Grid item xs={12} md={6}>
          <Typography
            className="display-3 font-type"
            variant="body1"
            sx={{ fontSize: "5rem", WebkitTextStroke: "2px solid #fffff" }}
          >
            Luis Rojas
          </Typography>
          <Typography
            className="font-type"
            sx={{ fontSize: "3rem" }}
            id="typed-text-element"
          ></Typography>
          <Box className="flex row mt-4 items-center justify-start">
            <Button className="mr-12 font-type cv-button" variant="outlined">
              Download CV
            </Button>
            <Button
              className="play-button font-type"
              variant="outlined"
              id="my-button"
              sx={{ borderRadius: "3px" }}
            >
              LinkTree
            </Button>
          </Box>
          <Box sx={{ zIndex: "-1" }}>
            <div
              className="sombra-semicirculo"
              style={{ left: "15%", filter: "blur(5rem)" }}
            ></div>
          </Box>
        </Grid>
      </Grid>
      <div className="scroll-arrow">
        <KeyboardArrowDown sx={{ fontSize: "4rem" }} />
      </div>
    </div>
  );
}
