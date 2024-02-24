import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  styled,
} from "@mui/material";

export const StyledCard = styled(Card)(({ theme }) => ({
  "&:hover": {
    transform: "translateY(-5px)",
    transition: "transform 0.3s",
  },
  maxWidth: 375,
  position: "relative",
  borderTop: `2px solid ${theme.palette.primary.main}`,
}));

export const StyledButton = styled(Button)({
  width: 40,
  height: 40,
  bottom: 16,
  right: 16,
  objectFit: "contain",
  position: "absolute",
});

export const StyledCardContent = styled(CardContent)({
  paddingBottom: "76px",
  height: "100px",
  width: "500px",
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

export const MainLayoutContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.background.default,
  borderRadius: 2,
}));

export const MainContent = styled(Grid)({
  height: "70vh",
});
