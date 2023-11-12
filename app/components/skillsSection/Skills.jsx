"use client";
import { ThemeContext } from "@/app/ThemeContext";
import { BreakPointTheme } from "@/app/styles/Styles";
import { Container, Stack, Typography, useMediaQuery } from "@mui/material";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";

function Skills() {
  const { t } = useTranslation();

  const { mode } = useContext(ThemeContext);
  const containerClassName = mode === "light" ? "aboutBGLight" : "aboutBGDark";

  const theme = BreakPointTheme;
  const isMobile = useMediaQuery(theme.breakpoints.down("tabletSM"));
  const isTablet = useMediaQuery(theme.breakpoints.down("desktopSM"));

  return (
    <div className={containerClassName} id="skills">
      <Container
        sx={{
          height: "95vh",
          paddingTop: isMobile ? "13rem" : isTablet ? " 18rem" : "10rem",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "600",
            fontSize: isMobile ? "30px" : isTablet ? "40px" : "50px",
            paddingBottom: isMobile ? "3rem" : isTablet ? "5rem" : "7rem",
          }}
        >
          {t("skills")}
        </Typography>
        <Stack
          spacing={5}
          justifyContent="center"
          alignItems="center"
          direction={isMobile ? "column" : "row"}
        >
          <Icon
            icon="akar-icons:html-fill"
            color={mode === "light" ? "#383d5d" : "#edeff4"}
            width="50"
          />
          <Icon
            icon="akar-icons:css-fill"
            color={mode === "light" ? "#383d5d" : "#edeff4"}
            width="50"
          />
          <Icon
            icon="akar-icons:javascript-fill"
            color={mode === "light" ? "#383d5d" : "#edeff4"}
            width="50"
          />
          <Icon
            icon="akar-icons:react-fill"
            color={mode === "light" ? "#383d5d" : "#edeff4"}
            width="50"
          />
          <Icon
            icon="akar-icons:nextjs-fill"
            color={mode === "light" ? "#383d5d" : "#edeff4"}
            width="50"
          />
        </Stack>
      </Container>
    </div>
  );
}

export default Skills;
