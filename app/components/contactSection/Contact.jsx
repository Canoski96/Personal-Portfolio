"use client";
import { ThemeContext } from "@/app/ThemeContext";
import { BreakPointTheme } from "@/app/styles/Styles";
import {
  Button,
  Container,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import emailjs from "emailjs-com";
import { CircularProgress } from "@mui/material";

function Contact() {
  const { t } = useTranslation();

  const { mode } = useContext(ThemeContext);
  const containerClassName = mode === "light" ? "heroBGLight" : "heroBGDark";

  const theme = BreakPointTheme;
  const isMobile = useMediaQuery(theme.breakpoints.down("tabletSM"));
  const isTablet = useMediaQuery(theme.breakpoints.down("desktopSM"));

  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data) => {
    setIsSubmitting(true);
    emailjs
      .send("service_57emddb", "template_r4pzvax", data, "mL2WS0og0SWy_9pNn")
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success(t("messageSucess"));
          setIsSubmitting(false);
        },
        (error) => {
          console.log("FAILED...", error);
          toast.error(t("messageError"));
          setIsSubmitting(false);
        }
      );
    reset();
  };

  return (
    <>
      <ToastContainer position="top-center" />
      <div className={containerClassName} id="contact">
        <Container
          sx={{
            height: "100vh",
            paddingTop: "30px",
          }}
        >
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            //   sx={{ height: "100%" }}
          >
            <Typography
              align="center"
              sx={{
                fontWeight: "600",
                fontSize: isMobile ? "30px" : isTablet ? "40px" : "50px",
              }}
            >
              {t("leaveMessage")}
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                fullWidth
                label={t("formNameLabel")}
                {...register("name", { required: "Name is required" })}
                error={!!errors.name}
                helperText={errors.name?.message}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label={t("formEmailLabel")}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label={t("formMessageLabel")}
                {...register("message", { required: "Message is required" })}
                error={!!errors.message}
                helperText={errors.message?.message}
                margin="normal"
                multiline
                rows={4}
                required
              />
              <Stack direction="column" alignItems="center">
                <Button
                  variant="contained"
                  type="submit"
                  disabled={!isValid || isSubmitting}
                  sx={{
                    bgcolor: "var(--btn-primary-light)",
                    "&:hover": {
                      bgcolor: "var(--btn-primary-dark)",
                      color: "var(--txt-primary-light)",
                    },
                  }}
                >
                  {t("sendMessage")}
                </Button>
              </Stack>
            </form>
          </Stack>
        </Container>
      </div>
    </>
  );
}

export default Contact;
