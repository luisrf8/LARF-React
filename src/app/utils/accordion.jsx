"use client";
import React from "react";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function AccordionInfo(props) {
  const { title, content, image } = props;
  return (
    <Accordion sx={{ width: "30rem",  }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{height: '7rem'}}>
        <Typography sx={{ display: "flex" }}>
          <svg
            className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0 mt-4"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
          </svg>
          {content}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default AccordionInfo;
