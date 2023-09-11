import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import Image from "next/image";
export default function Intro() {
  return (
    <Grid
      container
      className="pagination flex justify-center items-center"
      sx={{ backgroundColor: "#404040" }}
    >
      <Grid className="flex">
        <Grid className="flex items-center justify-center" xs={6}>
          <Box>
            <Image
              src="/images/lr-logo-white.png"
              alt=""
              width={800}
              height={800}
            />
          </Box>
        </Grid>
        <Grid className="flex items-center" xs={6}>
          <Box>
            <Typography
              variant="h1"
              className="display-3 text-uppercase text-primary"
              data-aos="fade-up"
              sx={{
                WebkitTextStroke: "2px #ffffff",
              }}
            >
              Luis Rojas
            </Typography>
            <Typography variant="h1" data-aos="fade-up">
              Front-End Dev
            </Typography>
            <Grid container justifyContent="center" sx={{ marginTop: "50px" }}>
              <Grid>
                <Button
                  className="text-white"
                  sx={{
                    width: "15rem",
                    height: "3rem",
                    fontSize: "1.5rem",
                    border: "1px solid white",
                  }}
                >
                  Download CV
                </Button>
              </Grid>
              {/* <Grid item data-aos="fade-up" data-aos-delay="600">
                <Button
                  variant="contained"
                  className="text-white bg-gray-800 w-full sm:w-auto sm:ml-4"
                  sx={{
                    width: "15rem",
                    height: "3rem",
                    fontSize: "1.5rem",
                    backgroundColor: "#404040",
                  }}
                >
                  Get in Touch
                </Button>
              </Grid> */}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
