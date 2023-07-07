"use client";
import React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

function CardInfo (props)  {
  const { title, content, image } = props;
  return (
    <Box sx={{width: '15rem', height: '20rem',}}>
        <Image src={image} alt="" width={200} height={200} sx={{marginBottom:'5rem'}}/>
        <Typography gutterBottom variant="h5" component="div" >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" >
          {content}
        </Typography>
        <Button size="small" >Ir a la página</Button>
        </Box>
  );
};

export default CardInfo;