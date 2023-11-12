"use client";
import { useContext } from "react";
import { ThemeContext } from "@/app/ThemeContext";
import {
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { BreakPointTheme, NavbarBtn } from "@/app/styles/Styles";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import heroImg from "../../../public/emoji.png";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  const { t } = useTranslation();

  const { mode } = useContext(ThemeContext);
  const containerClassName = mode === "light" ? "heroBGLight" : "heroBGDark";

  const theme = BreakPointTheme;
  const isMobile = useMediaQuery(theme.breakpoints.down("tabletSM"));
  const isTablet = useMediaQuery(theme.breakpoints.down("desktopSM"));

  return (
    <div className={containerClassName} id="home">
      <Container
        sx={{
          height: "100vh",
        }}
      >
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="center"
          alignContent="center"
          flexDirection={isMobile ? "column" : "row"}
          sx={{ minHeight: isMobile ? "" : "70%" }}
        >
          <Grid item xs={12} sm={6} textAlign="center">
            <Typography
              sx={{
                fontSize: isMobile ? "30px" : isTablet ? "40px" : "50px",
                fontWeight: "600",
                paddingTop: "20px",
              }}
            >
              <span>{t("heroTitle")}</span>
              <br />
              <TypeAnimation
                sequence={[
                  t("heroTitleName"),
                  1000,
                  t("heroTitleWD"),
                  1000,
                  t("heroTitleMD"),
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </Typography>
            <Typography
              sx={{
                fontSize: isMobile ? "15px" : isTablet ? "20px" : "25px",
                paddingBottom: isMobile ? "10px" : "0px",
              }}
            >
              {t("heroDescription")}
            </Typography>
            <br />
            <NavbarBtn
              href="#contact"
              sx={{
                marginRight: "1rem",
                fontWeight: "bold",
                border: "2px solid ",
                borderColor: "#383d5d",
              }}
            >
              {t("hireMe")}
            </NavbarBtn>
            <NavbarBtn
              href="Resume.pdf"
              variant="contained"
              target="_blank"
              sx={{
                bgcolor: "var(--btn-primary-light)",
                color: "var(--txt-primary-dark)",
                "&:hover": {
                  bgcolor: "var(--btn-primary-dark)",
                  color: "var(--txt-primary-light)",
                },
              }}
            >
              {t("resume")}
            </NavbarBtn>
          </Grid>
          <Grid item xs={12} sm={6} textAlign="center">
            <Image
              src={heroImg}
              className="heroImageClass"
              alt="Gafur Canoski"
              width={isMobile ? 250 : isTablet ? 250 : 300}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Hero;
