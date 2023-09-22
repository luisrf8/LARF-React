import * as React from "react";
import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";
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
      ...style,
    },
  };
}

export default function SocialMedia() {
  return (
    <Grid
      justifyContent="center"
      sx={{ marginTop: "5rem", marginBottom: "10rem" }}
    >
      <Typography
        variant="h2"
        align="center"
        gutterBottom
        className="font-type"
      >
        Contact Us.
      </Typography>
      <Box
      justifyContent="center"
        align="center"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}
      >
        <Grid item xs={12} md={8} lg={12}>
          <a href="https://www.linkedin.com/in/luis-rojas-9a3455173/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon sx={iconStyle({ color: "#0a66c2" })} className="mr-5" />
          </a>
          <a href="https://t.me/Lmanito" target="_blank" rel="noopener noreferrer">
            <TelegramIcon sx={iconStyle({ color: "#1da1f2" })} className="mr-5"/>
          </a>
        </Grid>
        <Grid item xs={12} md={8} lg={12}>
          <a href="https://wa.me/+584148859372" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon sx={iconStyle({ color: "#00b126" })} className="mr-5"/>
          </a>
          <a href="https://www.instagram.com/luis_rf8/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon sx={iconStyle({ color: "#bd22a2" })} className="mr-5"/>
          </a>
        </Grid>
        <Grid item xs={12} md={8} lg={12}>
          <a href="https://github.com/luisrf8?tab=repositories" target="_blank" rel="noopener noreferrer">
            <GitHubIcon sx={iconStyle({ color: "#404040" })} className="mr-5"/>
          </a>
          <a href="https://www.instagram.com/luis_rf8/" target="_blank" rel="noopener noreferrer">
            <FacebookIcon sx={iconStyle({ color: "#1877f2" })} className="mr-5"/>
          </a>
        </Grid>
      </Box>
    </Grid>
  );
}
