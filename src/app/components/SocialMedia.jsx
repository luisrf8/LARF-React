"use client";
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';

export default function SocialMedia () {
    return(
    <Grid container className="pagination max-w-3xl mx-auto" justifyContent="center">
        <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >

      <ButtonGroup variant="text" aria-label="text button group">
        <Button>LinkedIn</Button>
        <Button>GitHub</Button>
        <Button>Torre</Button>
        <Button>Instagram</Button>
        <Button>Whatsapp</Button>
        <Button>Telegram</Button>
      </ButtonGroup>
    </Box>
    </Grid>
    )
}