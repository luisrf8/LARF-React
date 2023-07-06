"use client";
import React from 'react';
import { Grid, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardInfo from '../utils/card_info';

export default function Experience() {
  return (
    <Grid container className="pagination" justifyContent="center" alignItems="center">
      <Grid item xs={12} md={8} lg={12} >
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="h5" align="center" gutterBottom>
              Habilidades.
            </Typography>
          </Grid>
          <Grid item xs={12}>
          
            <Grid container spacing={4} justifyContent="center">
              <Grid item >
              <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
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
