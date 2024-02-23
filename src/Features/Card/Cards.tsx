import { Grid } from "@mui/material";
import { useCardsService } from "../../services/cards.service";
import GeneralInfoCard from "./GeneralInfoCard";
import Spinner from "../../components/Spinner";
import SnackBarError from "../../components/SnackBarError";

const Cards = () => {
  const { cards, loadingCards, error } = useCardsService();
  if (loadingCards) {
    return <Spinner />;
  }
  return (
    <>
      <SnackBarError errorMessage={error} />
      <Grid container spacing={2}>
        {cards &&
          cards.map((card) => (
            <Grid item xs={12} sm={6} md={4} key={card.id}>
              <GeneralInfoCard card={card} />
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default Cards;
