import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { ICard } from "../../interfaces/card";
import { StyledButton, StyledCard, StyledCardContent } from "../styled";
import { CardMedia, Grid } from "@mui/material";
import ModalCard from "../Modal/ModalCard";

const GeneralInfoCard: React.FC<{ card: ICard }> = ({ card }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => setOpenModal(false);
  const handleOpen = () => setOpenModal(true);

  return (
    <>
      <StyledCard>
        <StyledCardContent>
          <Typography
            sx={{ fontWeight: (theme) => theme.typography.fontWeightBold }}
            gutterBottom
            variant='h6'
          >
            {card.name}
          </Typography>
          <Grid container>
            <Typography variant='body2' color='text.secondary'>
              company:
            </Typography>

            <Typography
              variant='body2'
              color='text.secondary'
              sx={{ fontWeight: (theme) => theme.typography.fontWeightBold }}
            >
              {card.company.name}
            </Typography>
          </Grid>
          <Grid container>
            <Typography variant='body2' color='text.secondary'>
              email:
            </Typography>
            <Typography
              variant='body2'
              color='text.secondary'
              sx={{ fontWeight: (theme) => theme.typography.fontWeightBold }}
            >
              {card.email}
            </Typography>
          </Grid>
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
