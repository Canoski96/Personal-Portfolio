"use client";
import {
  Container,
  Typography,
  Grid,
  useMediaQuery,
  Tabs,
  Tab,
  Box,
  Stack,
} from "@mui/material";
import Image from "next/image";
import React, { useContext, useState, useTransition } from "react";
import { useTranslation } from "react-i18next";
import aboutImgLight from "../../../public/LogoNavbarLight.png";
import aboutImgDark from "../../../public/LogoNavbarDark.png";
import { ThemeContext } from "@/app/ThemeContext";
import { BreakPointTheme } from "@/app/styles/Styles";
import { Icon } from "@iconify/react";
import { StyledTab } from "@/app/styles/Styles";

function About() {
  const { t } = useTranslation();

  const { mode } = useContext(ThemeContext);
  const imgColor = mode === "light" ? aboutImgDark : aboutImgLight;

  const theme = BreakPointTheme;
  const isMobileSM = useMediaQuery(theme.breakpoints.down("mobileMD"));
  const isMobile = useMediaQuery(theme.breakpoints.down("tabletSM"));
  const isTablet = useMediaQuery(theme.breakpoints.down("desktopSM"));

  const [tab, setTab] = useState("skills");

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Container
      id="about"
      sx={{ height: "100vh", paddingTop: "30px", paddingBottom: "35px" }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: "600",
          fontSize: isMobileSM
            ? "20px"
            : isMobile
            ? "25px"
            : isTablet
            ? "25px"
            : "50px",
          paddingBottom: "50px",
        }}
      >
        {t("aboutTitle")}
      </Typography>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        alignContent="center"
        flexDirection={isMobile ? "column" : "row"}
      >
        <Grid item xs={12} sm={6} textAlign="center">
          <Image
            src={imgColor}
            alt="Image"
            width={isMobileSM ? 200 : isMobile ? 225 : isTablet ? 250 : 350}
          />
        </Grid>
        <Grid item xs={12} sm={6} textAlign="center">
          <Typography
            sx={{
              fontSize: isMobileSM
                ? "12px"
                : isMobile
                ? "15px"
                : isTablet
                ? "15px"
                : "20px",
            }}
          >
            {t("aboutDescription")}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "1rem",
            }}
          >
            <Tabs
              value={tab}
              onChange={handleTabChange}
              TabIndicatorProps={{
                style: {
                  backgroundColor:
                    tab === "skills" ||
                    tab === "education" ||
                    tab === "certifications"
                      ? mode === "light"
                        ? "#383d5d"
                        : "var(--txt-primary-light)"
                      : "transparent",
                },
              }}
            >
              <StyledTab
                sx={{
                  fontSize: isMobileSM
                    ? "12px"
                    : isMobile
                    ? "15px"
                    : isTablet
                    ? "15px"
                    : "20px",
                }}
                label={t("skills")}
                value="skills"
              />
              <StyledTab
                sx={{
                  fontSize: isMobileSM
                    ? "12px"
                    : isMobile
                    ? "15px"
                    : isTablet
                    ? "15px"
                    : "20px",
                }}
                label={t("education")}
                value="education"
              />
              <StyledTab
                sx={{
                  fontSize: isMobileSM
                    ? "12px"
                    : isMobile
                    ? "15px"
                    : isTablet
                    ? "15px"
                    : "20px",
                }}
                label={t("certifications")}
                value="certifications"
              />
            </Tabs>
          </Box>
          <Box paddingTop="1rem" height="5rem">
            {tab === "skills" && (
              <Stack
                spacing={isTablet ? 3 : 5}
                justifyContent="center"
                alignItems="center"
                direction="row"
              >
                <Icon
                  icon="akar-icons:html-fill"
                  color={mode === "light" ? "#383d5d" : "#edeff4"}
                  width={
                    isMobileSM ? "20" : isMobile ? "25" : isTablet ? "30" : "50"
                  }
                />
                <Icon
                  icon="akar-icons:css-fill"
                  color={mode === "light" ? "#383d5d" : "#edeff4"}
                  width={
                    isMobileSM ? "20" : isMobile ? "25" : isTablet ? "30" : "50"
                  }
                />
                <Icon
                  icon="akar-icons:javascript-fill"
                  color={mode === "light" ? "#383d5d" : "#edeff4"}
                  width={
                    isMobileSM ? "20" : isMobile ? "25" : isTablet ? "30" : "50"
                  }
                />
                <Icon
                  icon="akar-icons:react-fill"
                  color={mode === "light" ? "#383d5d" : "#edeff4"}
                  width={
                    isMobileSM ? "20" : isMobile ? "25" : isTablet ? "30" : "50"
                  }
                />
                <Icon
                  icon="akar-icons:nextjs-fill"
                  color={mode === "light" ? "#383d5d" : "#edeff4"}
                  width={
                    isMobileSM ? "25" : isMobile ? "30" : isTablet ? "35" : "50"
                  }
                />
              </Stack>
            )}
            {tab === "education" && (
              <Typography variant={isTablet ? "h6" : "h5"}>
                M.Sc. in Information Science and Technology
              </Typography>
            )}
            {tab === "certifications" && (
              <Typography variant={isTablet ? "h6" : "h5"}>
                Certified Front-End Developer - Connect Academy
              </Typography>
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
export default About;
