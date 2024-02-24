import { Grid } from "@mui/material";
import { useCardsService } from "../../services/cards.service";
import GeneralInfoCard from "./GeneralInfoCard";
import Spinner from "../../components/Spinner";
import SnackBarError from "../../components/SnackBarError";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { StyledCards } from "../styled";

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
        {cards &&
          cards.map((card) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={card.id}
              style={{ marginBottom: 8 }}
            >
              <GeneralInfoCard card={card} />
            </Grid>
          ))}
      </StyledCards>
    </>
  );
};

export default Cards;
