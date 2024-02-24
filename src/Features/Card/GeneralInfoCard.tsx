import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { ICard } from "../../interfaces/card";
import {
  BoldTypography,
  StyledBreakWords,
  StyledButton,
  StyledCard,
  StyledCardContent,
} from "../styled";
import { CardMedia, Grid, useMediaQuery } from "@mui/material";
import ModalCard from "../Modal/ModalCard";

const GeneralInfoCard: React.FC<{ card: ICard }> = ({ card }) => {
  const isMobile = useMediaQuery("(max-width:350px)");
  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => setOpenModal(false);
  const handleOpen = () => setOpenModal(true);

  return (
    <StyledCard>
      <StyledCardContent>
        <Typography
          sx={{ fontWeight: (theme) => theme.typography.fontWeightBold }}
          gutterBottom
          variant='h6'
        >
          {card.name}
        </Typography>
        <StyledBreakWords isMobile={isMobile} container>
          <Typography variant='body2' color='text.secondary'>
            company:
          </Typography>

          <BoldTypography variant='body2' color='text.secondary'>
            {card.company.name}
          </BoldTypography>
        </StyledBreakWords>
        <StyledBreakWords isMobile={isMobile} container>
          <Typography variant='body2' color='text.secondary'>
            email:
          </Typography>
          <BoldTypography variant='body2' color='text.secondary'>
            {card.email}
          </BoldTypography>
        </StyledBreakWords>
      </StyledCardContent>
      <StyledButton onClick={handleOpen} aria-label='view details'>
        <CardMedia
          sx={{ width: "30px" }}
          component='img'
          image='/icon-supervisor.svg'
        />
      </StyledButton>
      <ModalCard
        card={card}
        openModal={openModal}
        handleCloseModal={handleCloseModal}
      />
    </StyledCard>
  );
};

export default GeneralInfoCard;
