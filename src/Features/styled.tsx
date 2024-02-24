import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  styled,
} from "@mui/material";

export const StyledCard = styled(Card)(({ theme }) => ({
  "&:hover": {
    transform: "translateY(-5px)",
    transition: "transform 0.3s",
  },
  position: "relative",
  borderTop: `2px solid ${theme.palette.primary.main}`,
  width: "100%",
  maxWidth: "100%",
}));

export const StyledButton = styled(Button)({
  width: 40,
  height: 40,
  bottom: 3,
  right: -11,
  objectFit: "contain",
  position: "absolute",
});

export const StyledCardContent = styled(CardContent)({
  height: "150px",
  width: "300px",
});

export const StyledBoxModal = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "20%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  border: "2px solid #000",
  overflowY: "auto",
  backgroundColor: theme.palette.background.paper,
  borderBottom: `5px solid ${theme.palette.primary.main}`,
}));

export const ModalGeneralInfo = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  marginBottom: "20px",
  paddingBottom: "20px",
}));

interface StyledCardsProps {
  isMobile?: boolean;
}

export const StyledCards = styled(Grid)<StyledCardsProps>(
  ({ theme, isMobile }) => ({
    width: isMobile ? "80%" : "60%",
  })
);

export const StyledBreakWords = styled(Grid)<StyledCardsProps>(
  ({ theme, isMobile }) => ({
    overflowWrap: isMobile ? "break-word" : "inherit",
    inlineSize: isMobile ? "40px" : "200px",
  })
);

export const BoldTypography = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
}));
