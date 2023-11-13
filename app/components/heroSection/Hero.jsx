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
  const isMobileSM = useMediaQuery(theme.breakpoints.down("mobileMD"));
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
                fontSize: isMobileSM
                  ? "20px"
                  : isMobile
                  ? "25px"
                  : isTablet
                  ? "25px"
                  : "50px",
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
                fontSize: isMobileSM
                  ? "12px"
                  : isMobile
                  ? "15px"
                  : isTablet
                  ? "15px"
                  : "25px",
                paddingBottom: isTablet ? "10px" : "5px",
              }}
            >
              {t("heroDescription")}
            </Typography>

            <NavbarBtn
              href="#contact"
              size={isTablet ? "small" : "large"}
              sx={{
                marginRight: "1rem",
                fontWeight: "bold",
                // border: "2px solid ",
                // borderColor: "#383d5d",
                height: "31px",
                padding: "4px 10px",
              }}
            >
              {t("hireMe")}
            </NavbarBtn>
            <NavbarBtn
              href="Resume.pdf"
              variant="contained"
              target="_blank"
              size={isTablet ? "small" : "large"}
              sx={{
                bgcolor: "var(--btn-primary-light)",
                color: "var(--txt-primary-dark)",
                height: "31px",
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
              width={isMobileSM ? 200 : isMobile ? 225 : isTablet ? 250 : 350}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Hero;
