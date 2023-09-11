import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import Image from "next/image";
export default function Intro() {
  return (
    <Grid container className="pagination flex justify-center items-center" sx={{ backgroundColor: "#404040"}}>
      <Grid
        className="content"
      >
        <Box sx={{ width: "10rem", height: "5rem", marginBottom: "7rem" }}>
          <Image src="/images/lr-logo.png" alt="" width={800} height={800} />
        </Box>
        <Typography variant="h1" data-aos="fade-up">
          Luis Rojas
        </Typography>
        <Typography variant="h1" data-aos="fade-up">
          Front-End developer
        </Typography>
        <Grid container justifyContent="center" sx={{ marginTop: "50px" }}>
          <Grid
          >
            <Button
              variant="contained"
              className="text-white hover:bg-gray-800 bg-gray-800 w-full mb-4 sm:w-auto sm:mb-0"
              sx={{
                width: "15rem",
                height: "3rem",
                fontSize: "1.5rem",
              }}
            >
              View Projects
            </Button>
          </Grid>
          <Grid item data-aos="fade-up" data-aos-delay="600">
            <Button
              variant="contained"
              className="text-white hover:bg-gray-800 bg-gray-800 w-full sm:w-auto sm:ml-4"
              sx={{
                width: "15rem",
                height: "3rem",
                fontSize: "1.5rem",
                backgroundColor: "#404040",
              }}
            >
              Get in Touch
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
