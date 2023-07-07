"use client";
import React from 'react';
import { Grid, Typography } from '@mui/material';
import CardInfo from '../utils/card_info';

export default function Experience() {

  return (
    <Grid container className="pagination" justifyContent="center" alignItems="center">
      <Grid item xs={12} md={8} lg={12} >
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="h2" align="center" gutterBottom >
              Experiencia. 
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={4} justifyContent="center">
              <Grid item>
                <CardInfo
                  title="Pagando"
                  content="Contenido de la tarjeta 1"
                  image="/images/Isotipo_1.svg"
                />
              </Grid>
              <Grid item>
                <CardInfo
                  title="Animalitos"
                  content="Contenido de la tarjeta 2"
                  image="/images/isotipo-animales.svg"
                />
              </Grid>
              <Grid item>
                <CardInfo
                  title="Tiquera"
                  content="Contenido de la tarjeta 3"
                  image="/images/Logo-tiquera-ticket.png"
                />
              </Grid>
              <Grid item>
                <CardInfo
                  title="Pagando Wallet"
                  content="Contenido de la tarjeta 4"
                  image="/images/Isotipo_1.svg"
                />
              </Grid>
              <Grid item>
                <CardInfo
                  title="Animalitos Admin"
                  content="Contenido de la tarjeta 5"
                  image="/images/isotipo-animales.svg"
                />
              </Grid>
              <Grid item>
                <CardInfo
                  title="Kriptorifa"
                  content="Contenido de la tarjeta 6"
                  image="/images/logo-carrousel-kriptorifa.webp"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
