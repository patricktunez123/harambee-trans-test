import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          mainContent: {
            title: "This is the title",
          },
        },
      },
      kin: {
        translation: {
          mainContent: {
            title: "uyu ni umutwe",
          },
        },
      },
    },
  });

export default i18n;
