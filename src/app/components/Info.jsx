"use client";
import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import Section from "../utils/section";
import Image from "next/image";

export default function Info() {
  return (
    <Grid container className="pagination flex items-center justify-center">
      <Section>
        <Box className="flex justify-center items-center glass">
          <Box sx={{ zIndex: "-1", marginBottom: "15rem" }}>
            <div
              className="sombra-semicirculo"
              style={{
                width: "100%",
                filter: "blur(12rem)",
              }}
            ></div>
          </Box>
          <Grid container spacing={2} alignItems="center" className="p-12">
            <Grid
              item
              md={1}
              lg={4}
              className="rlt text-center flex justify-center"
              data-aos="fade-up"
            >
              <Box sx={{ width: "15rem" }}>
                <Image src="/images/LuisRojas.png" width={900} height={900} />
              </Box>
            </Grid>
            <Grid item md={7} lg={8} data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16">
                <Typography
                  variant="body1"
                  className="mb-4 font-type"
                  sx={{
                    fontSize: "1.5rem",
                    color: "white",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 4)",
                  }}
                >
                  Luis Rojas, desarrollador front-end con experiencia en la
                  creación de interfaces de usuario.
                </Typography>
                <ul className="text-gray-400 -mb-2">
                  <li className="flex items-center mb-2">
                    <svg
                      className="mr-5 w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <Typography
                      className="font-type"
                      sx={{
                        fontSize: "1.5rem",
                        color: "white",
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 4)",
                      }}
                    >
                      Habilidad para combinar colores, tipografías y elementos
                      gráficos de manera innovadora, creando diseños atractivos
                      y estéticamente agradables.
                    </Typography>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg
                      className="mr-5 w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <Typography
                      className="font-type"
                      sx={{
                        fontSize: "1.5rem",
                        color: "white",
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 4)",
                      }}
                    >
                      Conocimiento de los lenguajes de programación web, como
                      HTML, CSS y JavaScript, así como de los frameworks y
                      herramientas más populares en el campo del desarrollo
                      front-end.
                    </Typography>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-5 w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <Typography
                      className="font-type"
                      sx={{
                        fontSize: "1.5rem",
                        color: "white",
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 4)",
                      }}
                    >
                      Constantemente actualizándose y aprendiendo nuevas
                      técnicas y tecnologías. Está abierto a los desafíos y se
                      adapta rápidamente a los cambios.
                    </Typography>
                  </li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Section>
    </Grid>
  );
}
