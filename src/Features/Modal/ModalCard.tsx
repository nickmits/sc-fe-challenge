import React from "react";
import { Modal, Typography, IconButton, Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ICard } from "../../interfaces/card";
import { ModalGeneralInfo, StyledBoxModal } from "../styled";
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
            <Typography
              sx={{
                marginTop: "20px",
                marginLeft: "20px",
                fontWeight: (theme) => theme.typography.fontWeightBold,
              }}
              id='modal-title'
              variant='h6'
              color='text.primary'
            >
              {card.name}
            </Typography>
            <Typography
              sx={{
                marginLeft: "20px",
                fontWeight: (theme) => theme.typography.fontWeightRegular,
              }}
              id='modal-title'
              variant='body1'
            >
              {card.company.name}
            </Typography>
          </Grid>
          <Grid
            sx={{ marginTop: "10px", paddingRight: "10px" }}
            item
            xs={6}
            display={"flex"}
            justifyContent={"flex-end"}
          >
            <IconButton aria-label='close' onClick={handleCloseModal}>
              <CloseIcon sx={{ width: "30px" }} />
            </IconButton>
          </Grid>
        </ModalGeneralInfo>
        <Grid
          paddingBottom={"30px"}
          paddingTop={"10px"}
          textAlign={"center"}
          spacing={2}
          container
        >
          <Grid container flexDirection={"column"} item xs={12} sm={6} md={3}>
            <Typography
              sx={{
                textAlign: "center",
                fontWeight: (theme) => theme.typography.fontWeightBold,
              }}
              variant='body1'
            >
              {literals.sc_USERNAME}
            </Typography>
            <Typography
              sx={{ fontWeight: (theme) => theme.typography.fontWeightLight }}
              variant='body1'
            >
              {card.username}
            </Typography>
          </Grid>
          <Grid container flexDirection={"column"} item xs={12} sm={6} md={3}>
            <Typography
              sx={{ fontWeight: (theme) => theme.typography.fontWeightBold }}
              variant='body1'
            >
              {literals.sc_ADDRESS}
            </Typography>
            <Typography
              sx={{ fontWeight: (theme) => theme.typography.fontWeightLight }}
              variant='body1'
            >
              {card.address.street}
            </Typography>
            <Typography
              sx={{ fontWeight: (theme) => theme.typography.fontWeightLight }}
              variant='body1'
            >
              {card.address.city}
            </Typography>
            <Typography
              sx={{ fontWeight: (theme) => theme.typography.fontWeightLight }}
              variant='body1'
            >
              {card.address.suite}
            </Typography>
          </Grid>
          <Grid container flexDirection={"column"} item xs={12} sm={6} md={3}>
            <Typography
              sx={{ fontWeight: (theme) => theme.typography.fontWeightBold }}
              variant='body1'
            >
              {literals.sc_PHONE}
            </Typography>
            <Typography
              sx={{ fontWeight: (theme) => theme.typography.fontWeightLight }}
              variant='body1'
            >
              {card.phone}
            </Typography>
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
            <Typography
              textAlign={"center"}
              sx={{ fontWeight: (theme) => theme.typography.fontWeightBold }}
              variant='body1'
            >
              {literals.sc_MAIL}
            </Typography>
            <Typography
              sx={{ fontWeight: (theme) => theme.typography.fontWeightLight }}
              variant='body1'
            >
              {card.email}
            </Typography>
            <Typography
              sx={{ fontWeight: (theme) => theme.typography.fontWeightBold }}
              variant='body1'
            >
              {literals.sc_WEBSITE}
            </Typography>
            <Typography
              sx={{ fontWeight: (theme) => theme.typography.fontWeightLight }}
              variant='body1'
            >
              {card.website}
            </Typography>
          </Grid>
        </Grid>
      </StyledBoxModal>
    </Modal>
  );
};

export default ModalCard;
