"use client";
import React from "react";
import { Grid, Typography, Box, } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { timelineItemClasses } from '@mui/lab/TimelineItem';
import Arc from "../utils/arc.jsx"
export default function Experience() {
  return (
    <Grid
      container
      className="pagination"
      justifyContent="center"
      alignItems="center"
      >
        <Box sx={{position: "absolute", zIndex:"-1", marginTop: "10rem"}}>
          <Arc/>
        </Box>
      <Grid item xs={12} md={8} lg={12}>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12}>
            <Typography
              variant="h2"
              align="center"
              gutterBottom
              className="font-type"
            >
              Skills.
            </Typography>
          </Grid>
          <Box className="flex " sx={{ marginRight: "8rem", marginLeft: "8rem", marginTop: "4rem" }}>
            <Grid xs={6}>
              <Timeline
                  sx={{
                    [`& .${timelineItemClasses.root}:before`]: {
                      flex: 0,
                      padding: 0,
                    },
                  }}
              >
                <TimelineItem >
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" color="primary" />
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                  </TimelineSeparator>
                  <TimelineContent className="skill-glass" sx={{  margin:"10px"}}>
                    <Typography className="font-type">Web 3.0</Typography>
                    <Box className="flex">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0 mt-4"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <Typography className="font-type">
                      Conexion y pago a traves de criptomonedas por diferentes blockchains.
                      </Typography>
                    </Box>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" color="primary" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent className="skill-glass" sx={{  margin:"10px"}}>
                    <Typography className="font-type">Solidity</Typography>
                    <Box className="flex">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0 mt-4"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <Typography className="font-type">
                        Funciones para transferir tokens, manejar pagos,
                        almacenar datos en la cadena de bloques y más.
                      </Typography>
                    </Box>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" color="primary" />
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                  </TimelineSeparator>
                  <TimelineContent className="skill-glass" sx={{  margin:"10px"}}>
                    <Typography className="font-type">Fundamentos de JavaScript</Typography>
                    <Box className="flex">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0 mt-4"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <Typography className="font-type">
                      Buen conocimiento de JavaScript. Variables, funciones, objetos, arrays, loops y condiciones, consumo de apis, logica, conexion backend con Node.js.
                      </Typography>
                    </Box>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </Grid>
            <Grid xs={6} justifyContent="start">
            <Timeline className="test"
                  sx={{
                    [`& .${timelineItemClasses.root}:before`]: {
                      flex: 0,
                      padding: 0,
                    },
                  }}
              >
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" color="primary" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent className="skill-glass" sx={{  margin:"10px"}}>
                    <Typography className="font-type">Git</Typography>
                    <Box className="flex">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0 mt-4"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <Typography className="font-type">
                      Comandos de Git, Resolución de conflictos, Ramas remotas y colaboración, Solución de problemas y gestión de errores.
                      </Typography>
                    </Box>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" color="primary" />
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                  </TimelineSeparator>
                  <TimelineContent className="skill-glass" sx={{  margin:"10px"}}>
                    <Typography className="font-type ">Metodologia Scrum</Typography>
                    <Box className="flex">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0 mt-4"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <Typography className="font-type">
                      Marco de trabajo Scrum, Jira, Creación y estimación de tareas, Creación y estimación de tareas.
                      </Typography>
                    </Box>
                  </TimelineContent >
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" color="primary" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent className="skill-glass" sx={{  margin:"10px"}}>
                    <Typography className="font-type">Equipo de Desarrollo</Typography>
                    <Box className="flex">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0 mt-4"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <Typography className="font-type">
                      Se sabe trabajar con el desarrollador backend y Diseñador definir las interfaces, API en la comunicación entre el front-end y el back-end. Establecer conexión (endpoints), datos y los métodos de comunicación y el diseño de la interfaz.
                      </Typography>
                    </Box>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
