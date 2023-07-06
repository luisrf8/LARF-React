"use client";
import React from "react";
import { Grid, Typography } from "@mui/material";
import AccordionInfo from "../utils/accordion";

export default function Experience() {
  return (
    <Grid
      container
      className="pagination"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12} md={8} lg={12}>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="h5" align="center" gutterBottom>
              Habilidades.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={4} justifyContent="center">
              <Grid item>
                <AccordionInfo
                  title="Web 3.0"
                  content="Conexion y pago a traves de criptomonedas por diferentes blockchains."
                />
              </Grid>
              <Grid item>
                <AccordionInfo
                  title="Solidity"
                  content="funciones para transferir tokens, manejar pagos, almacenar datos en la cadena de bloques y más."
                />
              </Grid>
              <Grid item>
                <AccordionInfo
                  title="Fundamentos de JavaScript"
                  content="Buen conocimiento de JavaScript. Variables, funciones, objetos, arrays, loops y condiciones, consumo de apis, logica, conexion backend con Node.js."
                />
              </Grid>
              <Grid item>
                <AccordionInfo
                  title="Git"
                  content="Comandos de Git, Resolución de conflictos, Ramas remotas y colaboración, Solución de problemas y gestión de errores."
                />
              </Grid>
              <Grid item>
                <AccordionInfo
                  title="Metodologia Scrum"
                  content="Marco de trabajo Scrum, Jira, Creación y estimación de tareas, Creación y estimación de tareas."
                />
              </Grid>
              <Grid item>
                <AccordionInfo
                  title="Equipo de Desarrollo"
                  content="se sabe trabajar con el desarrollador backend y Diseñador definir las interfaces, API en la comunicación entre el front-end y el back-end. Establecer conexión (endpoints), datos y los métodos de comunicación y el diseño de la interfaz."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
