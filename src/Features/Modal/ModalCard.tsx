import React from "react";
import { Modal, Typography, IconButton, Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ICard } from "../../interfaces/card";
import { ModalGeneralInfo, StyledBoxModal } from "../styled";

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
              sx={{ marginTop: "20px", marginLeft: "20px" }}
              id='modal-title'
              variant='h6'
            >
              {card.name}
            </Typography>
            <Typography
              sx={{ marginLeft: "20px" }}
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
          paddingRight={"40px"}
        >
          <Grid container flexDirection={"column"} item xs={3}>
            <Typography variant='subtitle1'>Username:</Typography>
            <Typography variant='body1'>{card.username}</Typography>
          </Grid>
          <Grid container flexDirection={"column"} item xs={3}>
            <Typography variant='subtitle1'>Address:</Typography>
            <Typography variant='body1'>{card.address.street}</Typography>
            <Typography variant='body1'>{card.address.city}</Typography>
            <Typography variant='body1'>{card.address.suite}</Typography>
          </Grid>
          <Grid container flexDirection={"column"} item xs={3}>
            <Typography variant='subtitle1'>Phone:</Typography>
            <Typography variant='body1'>{card.phone}</Typography>
          </Grid>
          <Grid container flexDirection={"column"} item xs={3}>
            <Typography variant='subtitle1'>Email:</Typography>
            <Typography variant='body1'>{card.email}</Typography>
            <Typography variant='subtitle1'>Website:</Typography>
            <Typography variant='body1'>{card.website}</Typography>
          </Grid>
        </Grid>
      </StyledBoxModal>
    </Modal>
  );
};

export default ModalCard;
