import React from "react";
import { Modal, Box, Typography, IconButton, Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ICard } from "../../interfaces/card";

const ModalCard: React.FC<{
  card: ICard;
  openModal: boolean;
  handleCloseModal: () => void;
}> = ({ card, openModal, handleCloseModal }) => {
  const style = {
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    border: "2px solid #000",
    boxShadow: 24,
    overflowY: "auto",
    bgcolor: "background.paper",
    borderBottom: "5px solid hsl(180, 62%, 55%)",
  };

  return (
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby='modal-title'
      aria-describedby='modal-description'
    >
      <Box sx={style}>
        <Grid
          sx={{
            backgroundColor: "rgba(0,0,0,0.02)",
            marginBottom: "20px",
            paddingBottom: "20px",
          }}
          container
        >
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
        </Grid>
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
      </Box>
    </Modal>
  );
};

export default ModalCard;
