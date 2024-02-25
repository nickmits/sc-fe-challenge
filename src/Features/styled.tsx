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
  // "@keyframes slideLeft": {
  //   from: {
  //     transform: "translateX(300%)",
  //   },
  // },

  // "@keyframes slideRight": {
  //   to: {
  //     transform: "translateX(300%)",
  //   },
  // },

  // "@keyframes shrink": {
  //   "50%": {
  //     transform: "scale(1,0)",
  //   },
  // },

  [theme.breakpoints.down("sm")]: { width: "70%", marginTop: "20%" },
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
    display: isMobile ? "block" : "flex",
  })
);

export const BoldTypography = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
}));

export const CardContentTypography = styled(BoldTypography)<{
  isMobile: boolean;
}>`
  ${({ isMobile }) => `
    word-break: ${isMobile ? "break-all" : "normal"};
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

export const EmailTypography = styled(CardContentTypography)<{
  isMobile: boolean;
}>`
  ${({ isMobile }) => `
    word-break: ${isMobile ? "break-all" : "normal"};
    @media (max-width: 1000px) and (min-width: 900px) {
      word-break: break-all;
      width: 140px ;
    }
    @media (max-width: 624px) and (min-width: 600px) {
      word-break: break-all;
      width: 150px ;
    }
  `}
`;

export const CompanyTypography = styled(CardContentTypography)<{
  isMobile: boolean;
}>`
  ${({ isMobile }) => `
    word-break: ${isMobile ? "break-all" : "normal"};
    @media (max-width: 920px) and (min-width: 900px) {
      word-break: break-all;
      width: 130px ;
    }
  `}
`;
