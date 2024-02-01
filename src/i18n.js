import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./lng/en.json";
import chi from "./lng/chi.json";

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    chi: {
      translation: chi,
    },
  },
  lng: localStorage.getItem("lng") || "en",
});

export default i18next;
