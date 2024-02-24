import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { ICard } from "../../interfaces/card";
import { StyledButton, StyledCard, StyledCardContent } from "../styled";
import { CardMedia } from "@mui/material";
import ModalCard from "../Modal/ModalCard";

const GeneralInfoCard: React.FC<{ card: ICard }> = ({ card }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => setOpenModal(false);
  const handleOpen = () => setOpenModal(true);

  return (
    <>
      <StyledCard>
        <StyledCardContent>
          <Typography gutterBottom variant='h6' component='div'>
            {card.name}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            company: {card.company.name}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            email: {card.email}
          </Typography>
        </StyledCardContent>
        <StyledButton onClick={handleOpen} aria-label='view details'>
          <CardMedia component='img' image='/icon-supervisor.svg' />
        </StyledButton>
        <ModalCard
          card={card}
          openModal={openModal}
          handleCloseModal={handleCloseModal}
        />
      </StyledCard>
    </>
  );
};

export default GeneralInfoCard;
