"use client";
import React from "react";
import { Grid, Typography, Card, CardContent, Box } from "@mui/material";
import CircularProgressWithLabel from "../utils/progressLabel";
import Section from "../utils/section";
import Image from "next/image";

export default function Info() {
  const colorLabelVue = "#00b126";
  const colorLabelReact = "#00d0f5";
  const colorLabelSolidity = "#292929";

  return (
    <Grid container className="pagination flex items-center justify-center">
      <Section>
        <Box className="flex justify-center items-center glass">
        <Grid container spacing={2} alignItems="center" className="p-12">
          <Grid item md={1} lg={4} className="rlt text-center" data-aos="fade-up">
            <Image src="/images/lr-logo-white.png" width={900} height={900}/>
          </Grid>
          <Grid item md={7} lg={8} data-aos="fade-right">
            <div className="md:pr-4 lg:pr-12 xl:pr-16">
              <Typography
                variant="body1"
                className="mb-4 font-type"
                sx={{ fontSize: "1.5rem", color: "white",  textShadow: "2px 2px 4px rgba(0, 0, 0, 4)" }}
              >
                Luis Rojas es un talentoso desarrollador front-end con una
                sólida experiencia en la creación de interfaces de usuario
                impresionantes.
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
                  <Typography className="font-type" sx={{ fontSize: "1.5rem", color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 4)" }}>
                    Destaca por su habilidad para combinar colores, tipografías
                    y elementos gráficos de manera innovadora, creando diseños
                    atractivos y estéticamente agradables.
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
                  <Typography className="font-type" sx={{ fontSize: "1.5rem", color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 4)" }}>
                    Luis posee un profundo conocimiento de los lenguajes de
                    programación web, como HTML, CSS y JavaScript, así como de
                    los frameworks y herramientas más populares en el campo del
                    desarrollo front-end.
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
                  <Typography className="font-type" sx={{ fontSize: "1.5rem", color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 4)" }}>
                    Está constantemente actualizándose y aprendiendo nuevas
                    técnicas y tecnologías. Está abierto a los desafíos y se
                    adapta rápidamente a los cambios.
                  </Typography>
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>

                  </Box>
        <Grid container item className="max-w-3xl mx-auto" gap={6} md={12}>
          <Grid container justifyContent="center">
            <Grid item data-aos="fade-up" data-aos-delay="600">
              <Card className="cards">
                {/* <CardContent sx={{backgroundColor: 'transparent'}}>
                  <CircularProgressWithLabel
                    value={65}
                    name="React"
                    colorLabel={colorLabelReact}
                    image="/images/react.png"
                    area="7rem"
                  />
                </CardContent> */}
              </Card>
            </Grid>
            <Grid item data-aos="fade-up" data-aos-delay="400">
              <Card className="cards">
                {/* <CardContent>
                  <CircularProgressWithLabel
                    value={80}
                    name="Vue"
                    colorLabel={colorLabelVue}
                    image="/images/vue.png"
                    area="18rem"
                  />
                </CardContent> */}
              </Card>
            </Grid>
            <Grid item data-aos="fade-up" data-aos-delay="400">
              <Card className="cards">
                {/* <CardContent>
                  <CircularProgressWithLabel
                    value={50}
                    name="Solidity"
                    colorLabel={colorLabelSolidity}
                    image="/images/solidity.png"
                    area="3.5rem"
                    restdasds="1.8rem"
                  />
                </CardContent> */}
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Section>
        <div className="sombra-semicirculo" style={{ bottom: -500, right: '10%', width: '100rem' , filter: 'blur(12rem)'}}></div>
    </Grid>
  );
}
