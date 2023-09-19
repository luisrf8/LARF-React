"use client";
import React from "react";
import { Grid, Typography } from "@mui/material";
import CardInfo from "../utils/card_info";

export default function Experience() {
  const items = [
    {
      title: "Kiosqo",
      content: "Colaboración Front en Sistema de Pagos de Servicios y Juegos de Loterías.",
      image: "/images/logo-kq.png",
      goto: "https://kiosqo.tech/"
    },
    {
      title: "Animalito Game",
      content: "Colaboración Front en Sistema de Juego de Azar.",
      image: "/images/Isotipo_Blanco.png",
      goto: "https://animalito.kiosqo.tech/"
    },
    {
      title: "Tiquera",
      content: "Creacion de página y Colaboración Front en Sistema de apartado de Eventos.",
      image: "/images/logo-tiquera2.png",
      goto: "https://kiosqo.tech/"
    },
    {
      title: "Jungla Dinamica",
      content: "Creacion de Landing Page y Slot Machine.",
      image: "/images/Jungla_Dinamica_Fisdsdnal.png",
      goto: "https://kiosqo.tech/"
    },
    {
      title: "LARF.tech",
      content: "Creacion de Pagina y Sistema Ecommerce.",
      image: "/images/lr-logo-white.png",
      goto: "https://larf.tech/"
    },
    {
      title: "Kriptorifa",
      content: "Colaboracion Front en Sistema de compra de Rifa.",
      image: "/images/logo-kripto2.png",
      goto: "https://kiosqo.tech/"
    },
    {
      title: "LARF.me",
      content: "Creacion de Landing Page del desarrollador.",
      image: "/images/lr-logo-white.png",
      goto: "https://larf.me/"
    },
    {
      title: "LARF.site",
      content: "Creacion de Pagina y Sistema Ecommerce.",
      image: "/images/image-removebg-preview.png",
      goto: "https://larf.site/"
    },
    {
      title: "Animalito Admin",
      content: "Colaboracion Front en Sistema Administrativo.",
      image: "/images/Isotipo_Blanco.png",
      goto:"https://animalito-admin.kiosqo.tech/"
    },
  ];
  return (
    <Grid className="pagination">
      <Grid item xs={12} md={8} lg={12}>
        <Grid container spacing={4} >
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
                goto={item.goto}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
