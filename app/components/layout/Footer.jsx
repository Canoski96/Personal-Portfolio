import { Box, Divider, IconButton, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";

function Footer() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: " 10px",
        }}
      >
        <Typography>© 2023 Gafur Canoski</Typography>
        <Box>
          <Link
            href="https://www.linkedin.com/in/gafur-canoski/"
            target="_blank"
          >
            <IconButton>
              <LinkedInIcon sx={{ color: "var(--txt-primary-light)" }} />
            </IconButton>
          </Link>
          <Link href="https://twitter.com/gafur_cana" target="_blank">
            <IconButton>
              <TwitterIcon sx={{ color: "var(--txt-primary-light)" }} />
            </IconButton>
          </Link>
          <Link href="https://www.instagram.com/gafurcana/" target="_blank">
            <IconButton>
              <InstagramIcon sx={{ color: "var(--txt-primary-light)" }} />
            </IconButton>
          </Link>
          <Link href="https://www.facebook.com/gafur.cana " target="_blank">
            <IconButton>
              <FacebookIcon sx={{ color: "var(--txt-primary-light)" }} />
            </IconButton>
          </Link>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
