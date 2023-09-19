"use client";
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";

function CardInfo(props) {
  const { title, content, image, goto } = props;
  return (
    <Box
      sx={{
        width: "17rem",
        height: "22rem",
        marginLeft: "5px",
        marginRight: "5px",
      }}
      className="card-glass"
    >
      <Box sx={{ height:"8rem", width:"12rem", margin: "2rem" }} className="flex ">
        <Image
          src={image}
          alt=""
          width={900}
          height={900}
          sx={{  }}
        />
      </Box>
      <Box className="" sx={{display:"flex", flexDirection:"column", marginLeft:"1rem"}}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="font-type"
        >
          {title}
        </Typography>
        <Typography variant="body2" color="white" className="font-type">
          {content}
        </Typography>
      </Box>
      <a href={goto} target="_blank">
        <Button className="font-type got-to-button" sx={{ marginTop:""}}>
          Go to
        </Button>
        </a>
    </Box>
  );
}

export default CardInfo;