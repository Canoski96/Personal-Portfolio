"use client";
import {
  AppBar,
  Drawer,
  Toolbar,
  IconButton,
  useTheme,
  useMediaQuery,
  List,
  ListItem,
  ListItemText,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import LogoHeaderWhite from "../../../public/LogoNavbarLight.png";
import LogoHeaderBlack from "../../../public/LogoNavbarDark.png";
import MenuIcon from "@mui/icons-material/Menu";
import {
  BreakPointTheme,
  MobileNavbarBtn,
  NavbarBtn,
} from "@/app/styles/Styles";
import { Icon } from "@iconify/react";
import { useContext } from "react";
import { ThemeContext } from "@/app/ThemeContext";
import { useTranslation } from "react-i18next";

function Header() {
  const { mode, toggleMode } = useContext(ThemeContext);

  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleLanguageMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleLanguageMenuClose = () => {
    setAnchorEl(null);
  };
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    handleLanguageMenuClose();
  };

  const theme = BreakPointTheme;
  const isSmall = useMediaQuery(theme.breakpoints.down("tabletLG"));

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div>
      {isSmall && (
        <Toolbar sx={{ gap: "20px", justifyContent: "space-between" }}>
          <Link href="/">
            <Image
              src={mode === "light" ? LogoHeaderBlack : LogoHeaderWhite}
              alt="Logo"
              width={150}
              priority
            />
          </Link>

          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={toggleMobileMenu}
            sx={{ display: " block" }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      )}
      <Drawer anchor="right" open={mobileMenuOpen} onClose={toggleMobileMenu}>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            bgcolor: "var(--bg-primary-light)",
            height: "100%",
            margin: "0 auto",
          }}
        >
          <List>
            <ListItem button onClick={closeMobileMenu}>
              <ListItemText>
                <MobileNavbarBtn href="#home">{t("home")}</MobileNavbarBtn>
              </ListItemText>
            </ListItem>

            <ListItem button onClick={closeMobileMenu}>
              <ListItemText>
                <MobileNavbarBtn href="#about">{t("about")}</MobileNavbarBtn>
              </ListItemText>
            </ListItem>

            <ListItem button onClick={closeMobileMenu}>
              <ListItemText>
                <MobileNavbarBtn href="#projects">
                  {t("projects")}
                </MobileNavbarBtn>
              </ListItemText>
            </ListItem>

            <ListItem button onClick={closeMobileMenu}>
              <ListItemText>
                <MobileNavbarBtn href="#contact">
                  {t("contact")}
                </MobileNavbarBtn>
              </ListItemText>
            </ListItem>
          </List>
          <List>
            <ListItem button>
              <ListItemText>
                <Button
                  aria-controls="language-menu"
                  aria-haspopup="true"
                  onClick={handleLanguageMenuOpen}
                  sx={{
                    color: "var(--txt-primary-light)",
                    textDecoration: "none",
                    width: "100%",
                    textAlign: " center",
                    padding: "10px auto",
                    "&:hover": {
                      boxShadow: "0px 0px 20px 15px rgba(237,239,255,0.1)  ",
                    },
                  }}
                >
                  <Icon
                    icon="akar-icons:language"
                    color={mode === "light" ? "#383d5d" : "#edeff4"}
                    width="30"
                  />
                </Button>
                <Menu
                  id="language-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleLanguageMenuClose}
                >
                  <MenuItem onClick={() => changeLanguage("en")}>
                    English
                  </MenuItem>
                  <MenuItem onClick={() => changeLanguage("de")}>
                    Deutsch
                  </MenuItem>
                  <MenuItem onClick={() => changeLanguage("sq")}>
                    Shqip
                  </MenuItem>
                  <MenuItem onClick={() => changeLanguage("tr")}>
                    Türkçe
                  </MenuItem>
                  <MenuItem onClick={() => changeLanguage("mk")}>
                    Mакедонски
                  </MenuItem>
                </Menu>
              </ListItemText>
            </ListItem>

            <ListItem button>
              <ListItemText>
                <Button
                  onClick={toggleMode}
                  sx={{
                    width: "100%",
                    textAlign: " center",
                    padding: "10px auto",
                    color: "var(--txt-primary-light)",
                    "&:hover": {
                      boxShadow: "0px 0px 20px 15px rgba(237,239,255,0.1)  ",
                    },
                  }}
                >
                  <Icon
                    icon={
                      mode === "light"
                        ? "material-symbols:light-mode"
                        : "material-symbols:dark-mode"
                    }
                    color={mode === "light" ? "#383d5d" : "#edeff4"}
                    width="30"
                  />
                </Button>
              </ListItemText>
            </ListItem>
          </List>
        </List>
      </Drawer>

      {!isSmall && (
        <AppBar
          position="static"
          elevation={0}
          sx={{ bgcolor: "var(--bg-primary-light)" }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: "5px",
            }}
          >
            <Link href="/">
              <Image
                src={mode === "light" ? LogoHeaderBlack : LogoHeaderWhite}
                alt="Logo"
                width={300}
                height={90}
                priority
              />
            </Link>
            <Toolbar sx={{ gap: "20px" }}>
              <NavbarBtn href="#home">{t("home")}</NavbarBtn>
              <NavbarBtn href="#about">{t("about")}</NavbarBtn>

              <NavbarBtn href="#projects">{t("projects")}</NavbarBtn>
              <NavbarBtn href="#contact">{t("contact")}</NavbarBtn>
            </Toolbar>
            <Toolbar>
              <Button
                aria-controls="langauge-menu"
                aria-haspopup="true"
                onClick={handleLanguageMenuOpen}
                sx={{
                  color: "var(--txt-primary-light)",
                  "&:hover": {
                    boxShadow: "0px 0px 20px 15px rgba(237,239,255,0.1)  ",
                  },
                }}
              >
                <Icon
                  icon="akar-icons:language"
                  width="30"
                  color={mode === "light" ? "#383d5d" : "#edeff4"}
                />
              </Button>
              <Menu
                id="language-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleLanguageMenuClose}
              >
                <MenuItem onClick={() => changeLanguage("en")}>
                  English
                </MenuItem>
                <MenuItem onClick={() => changeLanguage("de")}>
                  Deutsch
                </MenuItem>
                <MenuItem onClick={() => changeLanguage("sq")}>Shqip</MenuItem>
                <MenuItem onClick={() => changeLanguage("tr")}>Türkçe</MenuItem>
                <MenuItem onClick={() => changeLanguage("mk")}>
                  Mакедонски
                </MenuItem>
              </Menu>
              <Button
                onClick={toggleMode}
                sx={{
                  color: "var(--txt-primary-light)",
                  "&:hover": {
                    boxShadow: "0px 0px 20px 15px rgba(237,239,255,0.1)  ",
                  },
                }}
              >
                <Icon
                  icon={
                    mode === "light"
                      ? "material-symbols:dark-mode"
                      : "material-symbols:light-mode"
                  }
                  color={mode === "light" ? "#383d5d" : "#edeff4"}
                  width="30"
                />
              </Button>
            </Toolbar>
          </Toolbar>
        </AppBar>
      )}
    </div>
  );
}

export default Header;
