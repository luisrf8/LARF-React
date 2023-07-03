"use client";
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

const CardInfo = (props) => {
  const { title, content, image } = props;

  return (
    <Card sx={{ width: '15rem', height: '20rem' }}>
      {/* <CardMedia
        image= {image}
        title= {title}
      /> */}
      <Image src={image} alt="" width={70} height={70} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ir a la página</Button>
      </CardActions>
    </Card>
    
  );
};

export default CardInfo;