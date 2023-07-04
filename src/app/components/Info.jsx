"use client";
import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
  CircularProgress,
} from "@mui/material";
import PropTypes from "prop-types";
import Image from "next/image";
import { green, red } from "@mui/material/colors";

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

export default function Info() {
  const colorLabelVue = "#00b126";
  const colorLabelReact = "#00d0f5";

  return (
    <Grid container className="pagination">
      <Grid container spacing={2} alignItems="center" className="m-12 p-12">
        <Grid item md={1} lg={6} className="rlt" data-aos="fade-up">
          Aquí va la imagen
        </Grid>
        <Grid item md={7} lg={6} data-aos="fade-right">
          <div className="md:pr-4 lg:pr-12 xl:pr-16">
            <Typography
              variant="h4"
              component="div"
              className="font-architects-daughter text-purple-600 mb-2"
            >
              About Me.
            </Typography>
            <Typography variant="body1" className="text-gray-400 mb-4">
              Luis Rojas es un talentoso desarrollador front-end con una sólida
              experiencia en la creación de interfaces de usuario
              impresionantes.
            </Typography>
            <ul className="text-gray-400 -mb-2">
              <li className="flex items-center mb-2">
                <svg
                  className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>
                  Destaca por su habilidad para combinar colores, tipografías y
                  elementos gráficos de manera innovadora, creando diseños
                  atractivos y estéticamente agradables.
                </span>
              </li>
              <li className="flex items-center mb-2">
                <svg
                  className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>
                  Luis posee un profundo conocimiento de los lenguajes de
                  programación web, como HTML, CSS y JavaScript, así como de los
                  frameworks y herramientas más populares en el campo del
                  desarrollo front-end.
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>
                  Está constantemente actualizándose y aprendiendo nuevas
                  técnicas y tecnologías. Está abierto a los desafíos y se
                  adapta rápidamente a los cambios.
                </span>
              </li>
            </ul>
          </div>
        </Grid>
      </Grid>
      <Grid container item className="max-w-3xl mx-auto" gap={6} md={12}>
        <Grid container justifyContent="center">
          <Grid item data-aos="fade-up" data-aos-delay="400">
            <Card sx={{ width: "15rem", height: "20rem", boxShadow: "none" }}>
              <CardContent>
                <CircularProgressWithLabel
                  value={80}
                  name="Vue"
                  colorLabel={colorLabelVue}
                  image="/images/vue.png"
                  area="18rem"
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item data-aos="fade-up" data-aos-delay="600">
            <Card sx={{ width: "15rem", height: "20rem", boxShadow: "none" }}>
              <CardContent>
                <CircularProgressWithLabel
                  value={65}
                  name="React"
                  colorLabel={colorLabelReact}
                  image="/images/react.png"
                  area="7rem"
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}