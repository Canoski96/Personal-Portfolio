"use client";
import {
  useMediaQuery,
  createTheme,
  styled,
  Button,
  Container,
  Tab,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

export const BreakPointTheme = createTheme({
  breakpoints: {
    values: {
      mobileSM: 0,
      mobileMD: 400,
      mobileLG: 480,
      tabletSM: 601,
      tabletMD: 768,
      tabletLG: 1024,
      desktopSM: 1280,
      desktopMD: 1440,
      desktopLG: 1920,
    },
  },
});

export const NavbarBtn = styled(Button)({
  color: "var(--txt-primary-light)",
  textDecoration: " none",
  "&:hover": {
    backgroundColor: "var(--btn-primary-light)",
    boxShadow: "0px 0px 20px 15px rgba(237, 239, 244, 0.1) ",
    color: "var(--bg-primary-light)",
    fontWeight: "600",
  },
});

export const MobileNavbarBtn = styled(Button)({
  color: "var(--txt-primary-light)",
  textDecoration: " none",
  width: "100%",
  textAlign: " center",
  padding: "10px auto",
});

export const StyledTab = styled((props) => <Tab {...props} />)(({ theme }) => ({
  color: "var(--txt-primary)",
  borderBottom: "none",
  "&.Mui-selected": {
    color:
      theme.palette.mode === "light" ? "#383d5d" : "var(--txt-primary-light)",
    borderBottom:
      theme.palette.mode === "light"
        ? "1px solid #383d5d"
        : "1px solid var(--txt-primary-light)",
    fontWeight: "bold",
  },
}));

export const StyledCard = styled(Card)({
  backgroundColor: "var(--bg-primary-light)",
  borderRadius: 12,
  boxShadow: "0 6px 18px 0 rgba(0,0,0,0.2)",
  transition: "0.3s",
});

export const StyledCardMedia = styled(CardMedia)({
  paddingTop: "56.25%",
  transition: "all 0.3s",
  "&:hover": {
    transform: "scale(1.1)",
  },
});

export const StyledCardContent = styled(CardContent)({
  textAlign: "center",
});
