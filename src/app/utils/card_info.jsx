"use client";
import React from 'react';
// import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

function CardInfo (props)  {
  const { title, content, image } = props;
  return (
    <Box sx={{width: '17rem', height: '20rem',
  margin: '5px',
  fontSize: '30px',
  padding: '20px 30px', 
}} className="card-glass" >
        <Box sx={{height: '9rem',}}>
          <Image src={image} alt="" width={900} height={900} sx={{marginBottom:'5rem'}}/>
        </Box>
        <Box>
          <Typography gutterBottom variant="h5" component="div" className='font-type mt-7'>
            {title}
          </Typography>
          <Typography variant="body2" color="white" className='font-type'>
            {content}
          </Typography>
          <Button size="small" className='font-type' sx={{color: 'white'}}>Go to</Button>
        </Box>
    </Box>
  );
};

export default CardInfo;