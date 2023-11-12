import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Grid, Typography, useMediaQuery } from "@mui/material";
import SingleProject from "./SingleProject";
import { BreakPointTheme } from "@/app/styles/Styles";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  const theme = BreakPointTheme;
  const isMobile = useMediaQuery(theme.breakpoints.down("tabletSM"));
  const isTablet = useMediaQuery(theme.breakpoints.down("desktopSM"));

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .all([
        axios.get("https://api.github.com/users/Canoski96/repos"),
        axios.get("/projectImages.json"),
      ])
      .then(
        axios.spread((repoResponse, imageResponse) => {
          const projectsWithImage = repoResponse.data.map((project) => {
            const imageUrl = imageResponse.data[project.name];
            return { ...project, imageUrl };
          });
          setProjects(projectsWithImage);
        })
      )
      .catch((error) => {
        console.log("Error fetching data: ", error);
      });
  }, []);

  return (
    <Container id="projects" sx={{ height: "100vh", paddingBottom: "15px" }}>
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: "600",
          fontSize: isMobile ? "30px" : isTablet ? "40px" : "50px",
          paddingBottom: "50px",
        }}
      >
        {t("myProjects")}
      </Typography>
      <Grid container spacing={2}>
        {projects.map((project, index) => (
          <SingleProject project={project} key={index} />
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
