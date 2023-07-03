"use client";
import React from 'react';
import { Grid, Typography } from '@mui/material';
import CardInfo from '../utils/card_info';

export default function Qualities() {
  return (
    <Grid container className="pagination " justifyContent="center">
      <Grid item xs={12} md={8} lg={6} className='mt-4'>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="h5" align="center" gutterBottom>
              Experiencia. 
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={4} justifyContent="center">
              <Grid item>
                <CardInfo
                  title="Pagando"
                  content="Contenido de la tarjeta 1"
                  image="/images/react.png"
                />
              </Grid>
              <Grid item>
                <CardInfo
                  title="Animalitos"
                  content="Contenido de la tarjeta 2"
                  image="/images/react.png"
                />
              </Grid>
              <Grid item>
                <CardInfo
                  title="Tiquera"
                  content="Contenido de la tarjeta 3"
                  image="/images/react.png"
                />
              </Grid>
              <Grid item>
                <CardInfo
                  title="Pagando Wallet"
                  content="Contenido de la tarjeta 4"
                  image="/images/react.png"
                />
              </Grid>
              <Grid item>
                <CardInfo
                  title="Animalitos Admin"
                  content="Contenido de la tarjeta 5"
                  image="/images/react.png"
                />
              </Grid>
              <Grid item>
                <CardInfo
                  title="Kriptorifa"
                  content="Contenido de la tarjeta 6"
                  image="/images/react.png"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
