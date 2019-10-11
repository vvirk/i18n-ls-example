import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/common.json";
import ru from "./locales/ru/common.json";
import ua from "./locales/ua/common.json";

const language = localStorage.getItem("language");

i18n
  .use(initReactI18next)
  .init({
    resources: {
        en: {
          common: en,
        },
        ru: {
          common: ru,
        },
        ua: {
            common: ua,
          },
      },
    lng: language ? language : "en",
    ns: ['common'],
    defaultNS: 'common',
    keySeparator: true,
  });

  export default i18n;