"use client";
import React from "react";
import { Grid, Typography } from "@mui/material";
import CardInfo from "../utils/card_info";

export default function Experience() {
  const items = [
    {
      title: "Pagando",
      content: "Contenido de la tarjeta 1",
      image: "/images/lr-logo-white.png",
    },
    {
      title: "Animalitos",
      content: "Contenido de la tarjeta 2",
      image: "/images/lr-logo-white.png",
    },
    {
      title: "Tiquera",
      content: "Contenido de la tarjeta 3",
      image: "/images/lr-logo-white.png",
    },
    {
      title: "Pagando Wallet",
      content: "Contenido de la tarjeta 4",
      image: "/images/lr-logo-white.png",
    },
    {
      title: "Animalitos Admin",
      content: "Contenido de la tarjeta 5",
      image: "/images/lr-logo-white.png",
    },
    {
      title: "Kriptorifa",
      content: "Contenido de la tarjeta 6",
      image: "/images/Logo-Kriptorifa-Oficial.png",
    },
    {
      title: "LARF.me",
      content: "Contenido de la tarjeta 7",
      image: "/images/lr-logo-white.png",
    },
    {
      title: "LARF.site",
      content: "Contenido de la tarjeta 8",
      image: "/images/lr-logo-white.png",
    },
    {
      title: "LARF.tech",
      content: "Contenido de la tarjeta 9",
      image: "/images/lr-logo-white.png",
    },
  ];
  return (
    <Grid container className="pagination" justifyContent="center">
      <Grid item xs={12} md={8} lg={12}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12}>
            <Typography
              variant="h2"
              align="center"
              gutterBottom
              className="font-type"
            >
              Experience.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} alignItems="center">
        <Grid container spacing={6} justifyContent="center">
          {items.map((item, index) => (
            <Grid item key={index}>
              <CardInfo
                title={item.title}
                content={item.content}
                image={item.image}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
