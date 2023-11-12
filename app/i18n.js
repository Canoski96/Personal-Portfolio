import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslation from "./locales/en.json";
import deTranslation from "./locales/de.json";
import sqTranslation from "./locales/sq.json";
import trTranslation from "./locales/tr.json";
import mkTranslation from "./locales/mk.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      de: { translation: deTranslation },
      sq: { translation: sqTranslation},
      tr: { translation: trTranslation},
      mk: { translation: mkTranslation}
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
    },
    lng: "en", // Set default language to English
  });

export default i18n;