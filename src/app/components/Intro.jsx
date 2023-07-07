"use client";
import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
export default function Intro() {
  return (
    <Grid container className="pagination" justifyContent="center">
      <Grid
        item
        className="content items-center"
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100px",
            height: "100px",
            marginBottom: "1.5rem",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              backgroundColor: "orange",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              border: "2px solid black",
              top: "45%",
              left: "35%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "transparent",
            }}
          />
        </Box>
        <Typography
          variant="h1"
          className="mb-4"
          data-aos="fade-up"
          // sx={{fontFamily: 'LemonMilk'}}
        >
          Luis Rojas, Front-End developer
        </Typography>
        <Grid container justifyContent="center" sx={{ marginTop: "50px" }}>
          <Grid
            item
            data-aos="fade-up"
            data-aos-delay="400"
            sx={{ marginRight: "10px" }}
          >
            <Button
              variant="contained"
              className="text-white hover:bg-gray-800 w-full mb-4 sm:w-auto sm:mb-0"
              sx={{
                width: "15rem",
                height: "3rem",
                fontSize: "1.5rem",
                backgroundColor: "#404040",
              }}
            >
              View Projects
            </Button>
          </Grid>
          <Grid item data-aos="fade-up" data-aos-delay="600">
            <Button
              variant="contained"
              className="text-white  hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
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
