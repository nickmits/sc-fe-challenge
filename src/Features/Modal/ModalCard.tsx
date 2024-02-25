import React from "react";
import { Modal, IconButton, Grid } from "@mui/material";
import { ICard } from "../../interfaces/card";
import {
  CardNameContentModal,
  CardNameModal,
  CloseIconStyled,
  IconCloseMargin,
  ModalGeneralInfo,
  StyledBoxModal,
  TypographyBold,
  TypographyLight,
  UsernameModalTitle,
} from "../styled";
import literals from "../../stubs/literals.json";

const ModalCard: React.FC<{
  card: ICard;
  openModal: boolean;
  handleCloseModal: () => void;
}> = ({ card, openModal, handleCloseModal }) => {
  return (
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby='modal-title'
      aria-describedby='modal-description'
    >
      <StyledBoxModal>
        <ModalGeneralInfo container>
          <Grid container flexDirection={"column"} item xs={6}>
            <CardNameModal id='modal-title' variant='h6' color='text.primary'>
              {card.name}
            </CardNameModal>
            <CardNameContentModal id='modal-title' variant='body1'>
              {card.company.name}
            </CardNameContentModal>
          </Grid>
          <CloseIconStyled
            item
            xs={6}
            display={"flex"}
            justifyContent={"flex-end"}
          >
            <IconButton aria-label='close' onClick={handleCloseModal}>
              <IconCloseMargin />
            </IconButton>
          </CloseIconStyled>
        </ModalGeneralInfo>
        <Grid
          paddingBottom={"30px"}
          paddingTop={"10px"}
          textAlign={"center"}
          spacing={2}
          container
        >
          <Grid container flexDirection={"column"} item xs={12} sm={6} md={3}>
            <UsernameModalTitle variant='body1'>
              {literals.sc_USERNAME}
            </UsernameModalTitle>
            <TypographyLight variant='body1'>{card.username}</TypographyLight>
          </Grid>
          <Grid container flexDirection={"column"} item xs={12} sm={6} md={3}>
            <TypographyBold variant='body1'>
              {literals.sc_ADDRESS}
            </TypographyBold>
            <TypographyLight variant='body1'>
              {card.address.street}
            </TypographyLight>
            <TypographyLight variant='body1'>
              {card.address.city}
            </TypographyLight>
            <TypographyLight variant='body1'>
              {card.address.suite}
            </TypographyLight>
          </Grid>
          <Grid container flexDirection={"column"} item xs={12} sm={6} md={3}>
            <TypographyBold variant='body1'>{literals.sc_PHONE}</TypographyBold>
            <TypographyLight variant='body1'>{card.phone}</TypographyLight>
          </Grid>
          <Grid
            display={"flex"}
            justifyContent={"center"}
            container
            flexDirection={"column"}
            item
            xs={12}
            sm={6}
            md={3}
          >
            <TypographyBold textAlign={"center"} variant='body1'>
              {literals.sc_MAIL}
            </TypographyBold>
            <TypographyLight variant='body1'>{card.email}</TypographyLight>
            <TypographyBold variant='body1'>
              {literals.sc_WEBSITE}
            </TypographyBold>
            <TypographyLight variant='body1'>{card.website}</TypographyLight>
          </Grid>
        </Grid>
      </StyledBoxModal>
    </Modal>
  );
};

export default ModalCard;
