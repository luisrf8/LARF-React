"use client";
import React, { useEffect } from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import Image from "next/image";
import Typed from "typed.js";
import { KeyboardArrowDown, PlayArrow } from '@mui/icons-material';

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
      <Grid
        container
        className="pagination flex justify-center items-center"
      >
        <Grid xs={6} className="flex justify-end">
          <Image src="/images/lr-logo-white.png" width={900} height={900}/>
        </Grid>
        <Grid xs={6}>
          <Typography
            className="display-3"
            variant="body1"
            sx={{ fontSize: "5rem", WebkitTextStroke: "2px solid #fffff"}}
          >
            Luis Rojas
          </Typography>
          <Typography
            sx={{ fontSize: "3rem" }}
            id="typed-text-element"
          >
          </Typography>
          <Box className="flex row mt-4 items-center">
            <Button
              className="mr-12"
              variant="outlined"
              sx={{ color: "white", border: "1px solid white", height: "3rem" }}
            >
              Download CV
            </Button>
            <Button
              sx={{ color: "white" }}
            >
              <Box className="mr-2 flex items-center justify-center" sx={{ width: "5rem", height: "5rem", backgroundColor: "white", borderRadius: "50%" }}>
                <PlayArrow sx={{ color: '#404040', fontSize: '3rem' }}/>
              </Box>
              Ver Video
            </Button>
          </Box>
          <div className="sombra-semicirculo" style={{ bottom: 0, left: '40%', filter: 'blur(5rem)'}}></div>
        </Grid>
      </Grid>
      <div className="scroll-arrow">
        <KeyboardArrowDown sx={{ fontSize: '4rem' }} />
      </div>
    </div>
  );
}
