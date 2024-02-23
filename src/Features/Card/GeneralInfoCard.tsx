import React from "react";
import Typography from "@mui/material/Typography";
import { ICard } from "../../interfaces/card";
import { StyledCard, StyledCardContent, StyledCardMedia } from "../styled";

const GeneralInfoCard: React.FC<{ card: ICard }> = ({ card }) => {
  return (
    <StyledCard>
      <StyledCardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {card.name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          company: {card.company.name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          email: {card.email}
        </Typography>
      </StyledCardContent>
      <StyledCardMedia component='img' image='/icon-supervisor.svg' />
    </StyledCard>
  );
};

export default GeneralInfoCard;
