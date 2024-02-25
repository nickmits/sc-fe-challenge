import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  styled,
  CardMediaProps,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const StyledCard = styled(Card)(({ theme }) => ({
  "&:hover": {
    transform: "translateY(-5px)",
    transition: "transform 0.3s",
  },
  position: "relative",
  borderTop: `2px solid ${theme.palette.primary.main}`,
  width: "100%",
  maxWidth: "100%",
  height: "auto",
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
  height: "auto",
  width: "300px",
  minHeight: "100px",
});

export const StyledBoxModal = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  border: "2px solid #000",
  width: "40%",
  wordBreak: "break-all",
  animationDuration: "2000ms",
  animationName: "fadeInModal",
  "@keyframes fadeInModal": {
    "0%": {
      opacity: 0,
      transform: "translate(-50%, -50%)",
    },
    "100%": {
      opacity: 1,
      transform: "translate(-50%, -50%)",
    },
  },

  [theme.breakpoints.down("sm")]: { width: "70%", marginTop: "20%" },
  backgroundColor: theme.palette.background.paper,
  borderBottom: `5px solid ${theme.palette.primary.main}`,
}));

export const ModalGeneralInfo = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  marginBottom: "20px",
  paddingBottom: "20px",
}));

export const StyledCards = styled(Grid, {
  shouldForwardProp: (prop) => prop !== "isMobile",
})<{ isMobile?: boolean }>(({ theme, isMobile }) => ({
  width: isMobile ? "80%" : "60%",
}));

export const StyledBreakWords = styled(Grid, {
  shouldForwardProp: (prop) => prop !== "isMobile",
})<{ isMobile?: boolean }>(({ theme, isMobile }) => ({
  overflowWrap: isMobile ? "break-word" : "inherit",
  display: isMobile ? "block" : "flex",
}));

export const BoldTypography = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
}));

export const CardContentTypography = styled(BoldTypography)`
  ${() => `
   @media (max-width: 350px){
    word-break: break-all;
  }
    @media (max-width: 280px) and (min-width: 203px) {
      word-break: break-all;
      width: 100px;
    }

    @media (max-width: 202px) and (min-width: 163px) {
      word-break: break-all;
      width: 70px;
    }

    @media (max-width: 162px) and (min-width: 137px) {
      word-break: break-all;
      width: 50px;
    }

    @media (max-width: 136px) {
      word-break: break-all;
      width: 30px;
    }
  `}
`;

export const EmailTypography = styled(CardContentTypography)<{}>`
  ${({}) => `
    @media (max-width: 350px){
    word-break: break-all;
    }
    
    @media (max-width: 1000px) and (min-width: 900px) {
      word-break: break-all;
      width: 140px ;
    }
    @media (max-width: 624px) and (min-width: 600px) {
      word-break: break-all;
      width: 150px ;
    }
    @media (max-width: 690px) and (min-width: 624px) {
      word-break: break-all;
      width: 180px ;
    }
  `}
`;

export const CompanyTypography = styled(CardContentTypography)<{}>`
  ${({}) => `
  @media (max-width: 350px){
    word-break: break-all;
  }
    
    @media (max-width: 920px) and (min-width: 900px) {
      word-break: break-all;
      width: 130px ;
    }
    @media (max-width: 1000px) and (min-width: 920px) {
      word-break: break-all;
      width: 140px ;
    }
  `}
`;

export const UsernameModalTitle = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  textAlign: "center",
  [theme.breakpoints.between(900, 949)]: { width: "100px" },
}));

export const StyleGeneralCard = styled(Grid)({
  marginBottom: 8,
});

export const StyledCardMedia = styled(CardMedia)<CardMediaProps>({
  width: "30px",
});

export const HeaderBody = styled(Grid)(({ theme }) => ({
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const TypographyHeader = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightLight,
  alignSelf: "center",
  inlineSize: "430px",
  overflowWrap: "break-word",
}));

export const TypographyBold = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
}));

export const TypographyRegular = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightRegular,
}));

export const CardNameModal = styled(Typography)(({ theme }) => ({
  marginTop: "20px",
  marginLeft: "20px",
  fontWeight: theme.typography.fontWeightBold,
}));

export const CardNameContentModal = styled(TypographyRegular)({
  marginLeft: "20px",
});

export const CloseIconStyled = styled(Grid)({
  marginTop: "10px",
  paddingRight: "10px",
});

export const TypographyLight = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightLight,
}));

export const IconCloseMargin = styled(CloseIcon)({
  width: "30px",
});
