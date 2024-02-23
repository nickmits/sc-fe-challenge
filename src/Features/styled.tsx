import { Card, CardContent, styled } from "@mui/material";
import CardMedia, { CardMediaProps } from "@mui/material/CardMedia";

export const StyledCard = styled(Card)({
  "&:hover": {
    transform: "translateY(-5px)",
    transition: "transform 0.3s",
  },
  maxWidth: 375,
  position: "relative",
});

export const StyledCardMedia = styled(CardMedia)<CardMediaProps>(
  ({ theme }) => ({
    width: 40,
    height: 40,
    bottom: 16,
    right: 16,
    objectFit: "contain",
    position: "absolute",
  })
);

export const StyledCardContent = styled(CardContent)({
  paddingBottom: "76px",
  height: "100px",
  width: "500px",
});
