import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { ICard } from "../../interfaces/card";
import {
  CardContentTypography,
  CompanyTypography,
  EmailTypography,
  StyledBreakWords,
  StyledButton,
  StyledCard,
  StyledCardContent,
  StyledCardMedia,
} from "../styled";
import { Grid, useMediaQuery } from "@mui/material";
import ModalCard from "../Modal/ModalCard";
import literals from "../../stubs/literals.json";

const GeneralInfoCard: React.FC<{ card: ICard }> = ({ card }) => {
  const isMobile = useMediaQuery("(max-width:350px)");
  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => setOpenModal(false);
  const handleOpen = () => setOpenModal(true);

  return (
    <StyledCard>
      <StyledCardContent>
        <CardContentTypography gutterBottom variant='h6'>
          {card.name}
        </CardContentTypography>
        <StyledBreakWords isMobile={isMobile} container>
          <Grid item xs={12} md={"auto"}>
            <Typography variant='body2' color='text.secondary'>
              {literals.sc_COMPANY}
            </Typography>
          </Grid>
          <Grid item xs={12} md>
            <CompanyTypography variant='body2' color='text.secondary'>
              {card.company.name}
            </CompanyTypography>
          </Grid>
        </StyledBreakWords>

        <StyledBreakWords container>
          <Grid item xs={12} md={"auto"}>
            <Typography variant='body2' color='text.secondary'>
              {literals.sc_EMAIL}
            </Typography>
          </Grid>
          <Grid item xs={12} md>
            <EmailTypography variant='body2' color='text.secondary'>
              {card.email}
            </EmailTypography>
          </Grid>
        </StyledBreakWords>
      </StyledCardContent>
      <StyledButton onClick={handleOpen} aria-label='view details'>
        <StyledCardMedia component='img' image='/icon-supervisor.svg' />
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
