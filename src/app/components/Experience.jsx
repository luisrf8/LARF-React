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
      goto: "https://kiosqo.tech/",
      widthImage: "7rem",
      heightImage:"7rem"
    },
    {
      title: "Animalito Game",
      content: "Colaboración Front en Sistema de Juego de Azar.",
      image: "/images/Isotipo_Blanco.png",
      goto: "https://animalito.kiosqo.tech/",
      widthImage: "7rem",
      heightImage:"7rem"
    },
    {
      title: "Tiquera",
      content: "Creacion de página y Colaboración Front en Sistema de apartado de Eventos.",
      image: "/images/logo-tiquera2.png",
      goto: "https://kiosqo.tech/",
      widthImage: "12.5rem",
      heightImage:"7rem"
    },
    {
      title: "Jungla Dinamica",
      content: "Creacion de Landing Page y Slot Machine.",
      image: "/images/Jungla_Dinamica_Fisdsdnal.png",
      goto: "https://kiosqo.tech/",
      widthImage: "12rem",
      heightImage:"7rem"
    },
    {
      title: "LARF.tech",
      content: "Creacion de Pagina y Sistema Ecommerce.",
      image: "/images/lr-logo-white.png",
      goto: "https://larf.tech/",
      widthImage: "10rem",
      heightImage:"8rem"
    },
    {
      title: "Kriptorifa",
      content: "Colaboracion Front en Sistema de compra de Rifa.",
      image: "/images/logo-kripto2.png",
      goto: "https://kiosqo.tech/",
      widthImage: "13rem",
      heightImage:"8rem"
    },
    {
      title: "LARF.me",
      content: "Creacion de Landing Page del desarrollador.",
      image: "/images/lr-logo-white.png",
      goto: "https://larf.me/",
      widthImage: "10rem",
      heightImage:"8rem"
    },
    {
      title: "LARF.site",
      content: "Creacion de Pagina y Sistema Ecommerce.",
      image: "/images/image-removebg-preview.png",
      goto: "https://larf.site/",
      widthImage: "10rem",
      heightImage:"8rem"
    },
    {
      title: "Animalito Admin",
      content: "Colaboracion Front en Sistema Administrativo.",
      image: "/images/Isotipo_Blanco.png",
      goto:"https://animalito-admin.kiosqo.tech/",
      widthImage: "7rem",
      heightImage:"7rem"
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
                widthImage={item.widthImage}
                heightImage={item.heightImage}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
