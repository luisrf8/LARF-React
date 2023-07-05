"use client";
import React from 'react';
import { Grid, Typography, Button } from '@mui/material';

export default function Intro() {
  return (
    <Grid container className="pagination" justifyContent="center">
      <Grid item className="content items-center" sx={{display: 'flex', flexDirection: 'column'}}>
        <Typography variant="h2" className="mb-4" data-aos="fade-up">
        Luis Rojas, Front-End developer
        </Typography>
        <Grid container justifyContent="center" sx={{ marginTop: '50px'}}>
          <Grid item data-aos="fade-up" data-aos-delay="400" sx={{ marginRight: '10px'}}>
            <Button variant="contained" className="text-white bg-gray-700 hover:bg-gray-800 w-full mb-4 sm:w-auto sm:mb-0">
              Start free trial
            </Button>
          </Grid>
          <Grid item data-aos="fade-up" data-aos-delay="600">
            <Button variant="contained" className="text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4">
              Learn more
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
