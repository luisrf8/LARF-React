"use client";
import React from "react";
import { Grid, Typography, Box } from "@mui/material";

export default function Projects() {
  const items = [
    {
      title: "React",
      image: "/images/react.png",
    },
    {
      title: "Vue",
      image: "/images/vue.png",
    },
    {
      title: "Solidity",
      image: "/images/solidity.png",
    },
    {
      title: "Node",
      image: "/images/node.webp",
    },
    {
      title: "Javascript",
      image: "/images/javascript.png",
    },
    {
      title: "Next Js",
      image: "/images/next.png",
    },
  ];
  return (
    <Grid container sx={{marginBottom:"10rem", paddingLeft:{md:"5rem"}, paddingRight:{md:"5rem"},}}>
      <Grid item xs={12}>
        <Typography
          variant="h2"
          align="center"
          className="font-type"
          sx={{marginBottom:"4rem"}}
        >
          Proficiency.
        </Typography>
      </Grid>
      <Grid
        xs={12}
        md={6}
        lg={6}
      >
        <Box className="column m-12" justifyContent="center">
        <Typography variant="h4" gutterBottom  className="font-type">
          Mis Habilidades.
        </Typography>
        <Typography className="font-type">
          Conocimiento y experiencia en desarrollo Front-End con enfoque en JavaScript, React, Next.js y Vue. La experiencia en estas tecnologías me ha permitido ofrecer aplicaciones web de calidad que brindan una excelente experiencia de usuario. Conocimientos intermedios en Node.js, Express y Web 3.0, lo que me permite agregar funcionalidades a proyectos. Como aprendiz continuo, actualmente estoy ampliando mis habilidades en el mundo del desarrollo.
        </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Grid container spacing={{ xs: 4, md: 12 }} justifyContent="center" >
          {items.map((item, index) => (
            <Grid item key={index}>
              <Box
                sx={{
                  width: "10rem",
                  height: "10rem",
                  marginLeft: "5px",
                  marginRight: "5px",
                }}
                className="card-glass"
              >
                <Box
                  sx={{
                    height: "5rem",
                    width: "5rem",
                    margin: "1rem",
                  }}
                  className="flex"
                >
                  <img src={item.image} alt="" width={900} height={900} />
                </Box>
                <Box
                  className=""
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography gutterBottom className="font-type">
                    {item.title}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
