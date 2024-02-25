import { Grid, Typography } from "@mui/material";
import { useCardsService } from "../../services/cards.service";
import GeneralInfoCard from "./GeneralInfoCard";
import Spinner from "../../components/Spinner";
import SnackBarError from "../../components/SnackBarError";
import useMediaQuery from "@mui/material/useMediaQuery";
import { StyleGeneralCard, StyledCards } from "../styled";
import literals from "../../stubs/literals.json";

const Cards = () => {
  const isTablet = useMediaQuery("(min-width:1300px)");
  const { cards, loadingCards, error } = useCardsService();
  if (loadingCards) {
    return <Spinner />;
  }

  return (
    <>
      <SnackBarError errorMessage={error} />
      <StyledCards isMobile={!isTablet} container spacing={2}>
        {cards ? (
          cards.map((card) => (
            <StyleGeneralCard item xs={12} sm={6} md={4} key={card.id}>
              <GeneralInfoCard card={card} />
            </StyleGeneralCard>
          ))
        ) : (
          <Grid container justifyContent='center'>
            <Typography variant='body1'>
              {literals.sc_CARD_AVAILABLE}
            </Typography>
          </Grid>
        )}
      </StyledCards>
    </>
  );
};

export default Cards;
