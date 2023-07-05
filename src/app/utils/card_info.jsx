"use client";
import React from 'react';
import { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import WebFont from 'webfontloader';
import Image from 'next/image';

function CardInfo (props)  {
  const { title, content, image } = props;
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Unica One', 'Chilanka']
      }
    });
   }, []);
  return (
    <Card sx={{ width: '15rem', height: '20rem', }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Unica One'}}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Unica One'}}>
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ fontFamily: 'Unica One'}}>Ir a la página</Button>
      </CardActions>
    </Card>
  );
};

export default CardInfo;