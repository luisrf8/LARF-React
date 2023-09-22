"use client";
import React from "react";
import { Grid, Typography, Box } from "@mui/material";

export default function Experience() {
  return (
    <Grid>
      <Grid
        container
        className="pagination"
        justifyContent="center"
        alignItems="center"
      >
        <Box sx={{ zIndex: "-1" }}>
          <div
            className="sombra-semicirculo"
            style={{ width: "100%", filter: "blur(15rem)" }}
          ></div>
        </Box>
        <Grid item xs={12} md={8} lg={12}>
          <Grid
            spacing={4}
            alignItems="center"
            justifyContent="center"
          >
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
            <Box
              className="flex"
              sx={{
                marginTop: "4rem",
              }}
            >
              <Grid xs={6} sx={{ margin: "1rem" }}>
                <Box className="skill-glass" sx={{ padding: "1rem" }}>
                  <Typography className="font-type">- Web 3.0</Typography>
                  <Box className="flex">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0 mt-4"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <Typography className="font-type">
                      A traves del desarrollo de aplicaciones web se puede
                      realizar conexiones y pagos a traves de criptomonedas por
                      diferentes blockchains dandole asi mas integraciones y
                      posibilidades de pago para los usuarios.
                    </Typography>
                  </Box>
                </Box>
                <Box
                  className="skill-glass"
                  sx={{ padding: "1rem", marginTop: "1rem" }}
                >
                  <Typography className="font-type">- Solidity</Typography>
                  <Box className="flex">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0 mt-4"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <Typography className="font-type">
                      Dependiendo del alcance de la aplicacion web se pueden
                      implementar servicios en Solidity para realizar funciones
                      para transferir tokens, manejar pagos, almacenar datos en
                      la cadena de bloques y más.
                    </Typography>
                  </Box>
                </Box>
                <Box
                  className="skill-glass"
                  sx={{ padding: "1rem", marginTop: "1rem" }}
                >
                  <Typography className="font-type">
                    - Fundamentos de JavaScript
                  </Typography>
                  <Box className="flex">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0 mt-4"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <Typography className="font-type">
                      Buen conocimiento de JavaScript. Variables, funciones,
                      objetos, arrays, loops y condiciones, consumo de apis,
                      logica, conexion backend con Node.js.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid xs={6} sx={{ margin: "1rem" }}>
                <Box className="skill-glass" sx={{ padding: "1rem" }}>
                  <Typography className="font-type">- Git</Typography>
                  <Box className="flex">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0 mt-4"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <Typography className="font-type">
                      Buen manejo de Almacenamiento en diferentes servicios de
                      Git y sus Comandos, Resolución de conflictos, Ramas
                      remotas y colaboración, Solución de problemas y gestión de
                      errores.
                    </Typography>
                  </Box>
                </Box>
                <Box
                  className="skill-glass"
                  sx={{ padding: "1rem", marginTop: "1rem" }}
                >
                  <Typography className="font-type">
                    - Metodologia Scrum
                  </Typography>
                  <Box className="flex">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0 mt-4"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <Typography className="font-type">
                      Al desarrollar se usa como metodologia de trabajo y Marco
                      de trabajo Scrum, usando como enfoque principal el tablero
                      de Jira para asi optimizar el desarrollo en Creación y
                      estimación de tareas, organizacion, enfoque y tiempos de
                      desarrollo.
                    </Typography>
                  </Box>
                </Box>
                <Box
                  className="skill-glass"
                  sx={{ padding: "1rem", marginTop: "1rem" }}
                >
                  <Typography className="font-type">
                    - Equipo de Desarrollo
                  </Typography>
                  <Box className="flex">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0 mt-4"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <Typography className="font-type">
                      Se sabe trabajar con el desarrollador backend y Diseñador
                      definir las interfaces, APIS en la comunicación entre el
                      front-end y el back-end. Establecer conexión (endpoints),
                      datos y los métodos de comunicación y el diseño de la
                      interfaz.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
