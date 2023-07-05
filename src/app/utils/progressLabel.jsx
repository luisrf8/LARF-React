"use client";
import React from 'react';
import {
    Typography,
    Box,
    CircularProgress,
  } from "@mui/material";
import Image from 'next/image';

function CircularProgressWithLabel(props) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: props.colorLabel,
        }}
      >
        <Box sx={{ position: "relative", display: "inline-flex" }}>
          <CircularProgress
            variant="determinate"
            size={150}
            sx={{ color: props.colorLabel, width: "40rem", height: "40rem" }}
            {...props}
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box sx={{ width: props.area, height: props.area }}>
              <Image src={props.image} alt="" width={200} height={200} />
            </Box>
          </Box>
        </Box>
        <Typography variant="caption" component="div" sx={{fontSize: '1.5rem', fontWeight: 600}}>
          {props.name}
        </Typography>
      </Box>
    );
  }
export default CircularProgressWithLabel;