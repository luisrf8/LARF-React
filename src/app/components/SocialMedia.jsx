"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function iconStyle(style) {
  return {
    fontSize: 90,
    transition: "0.7s",
    "&:hover": {
      transform: "scale(1.3)",
      ...style
    }
  };
}

export default function SocialMedia() {
  return (
    <Grid
      container
      className="pagination max-w-3xl mx-auto"
      justifyContent="center"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}
      >
        <LinkedInIcon sx={iconStyle({ color: "#0a66c2" })} />
        <TelegramIcon sx={iconStyle({ color: "#1da1f2" })} />
        <WhatsAppIcon sx={iconStyle({ color: "#00b126" })} />
        <InstagramIcon sx={iconStyle({ color: "#bd22a2" })} />
        <GitHubIcon sx={iconStyle({ color: "#000" })} />
        <FacebookIcon sx={iconStyle({ color: "#1877f2" })} />
      </Box>
    </Grid>
  );
}
