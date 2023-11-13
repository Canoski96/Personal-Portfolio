import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Button,
  CardActions,
  useMediaQuery,
  Box,
} from "@mui/material";

import {
  BreakPointTheme,
  NavbarBtn,
  StyledCard,
  StyledCardActions,
  StyledCardContent,
  StyledCardMedia,
} from "@/app/styles/Styles";

export default function SingleProject({ project }) {
  const theme = BreakPointTheme;
  const isMobileSM = useMediaQuery(theme.breakpoints.down("mobileMD"));
  const isMobile = useMediaQuery(theme.breakpoints.down("tabletSM"));
  const isTablet = useMediaQuery(theme.breakpoints.down("desktopSM"));

  return (
    <Grid item xs={12} sm={6} md={4}>
      <StyledCard
        sx={{
          height: isMobileSM
            ? "280px"
            : isMobile
            ? "300px"
            : isTablet
            ? "350px"
            : "380px",
        }}
      >
        <CardMedia
          component="img"
          height="auto"
          image={project.imageUrl}
          alt={project.name}
        />
        <StyledCardContent sx={{ gap: "2" }}>
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontSize: isMobile ? "15px" : isTablet ? "20px" : "25px",
              fontWeight: "600",
            }}
          >
            {project.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: isMobile ? "10px" : isTablet ? "15px" : "20px",
            }}
          >
            {project.description}
          </Typography>
        </StyledCardContent>
        <StyledCardActions>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            p={1}
            sx={{ width: "100%" }}
            gap={2}
          >
            <NavbarBtn
              size="small"
              color="primary"
              href={project.html_url}
              target="_blank"
            >
              GitHub
            </NavbarBtn>
            {project.homepage && (
              <NavbarBtn
                size="small"
                color="primary"
                href={project.homepage}
                target="_blank"
              >
                Website
              </NavbarBtn>
            )}
          </Box>
        </StyledCardActions>
      </StyledCard>
    </Grid>
  );
}
