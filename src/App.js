import React, { useState } from "react";
import { withTranslation } from "react-i18next";

//import { LanguagesNav } from './components/LanguagesNav/LanguagesNav';

//styles
import s from "./styles/app.module.scss";

export const App = ({ i18n, t }) => {
  const lsLanguage = localStorage.getItem("language");
  const [language, setLanguage] = useState(lsLanguage ? lsLanguage : "ua");
  const [menu, toggleMenu] = useState(false);
  const languageChange = lang => {
    return (
      i18n.changeLanguage(lang),
      localStorage.setItem("language", lang),
      setLanguage(lang),
      toggleMenu(false)
    )
  };
  return (
    <div className={s.app}>
      <h1>{t("title")}</h1>
      <div>{t("description")}</div>
      <div className={s.wrap}>
        <nav className={menu ? s.menu : `${s.menu} ${s.close}`}>
          <button
            className={s.menuItem}
            onClick={() => languageChange("ua") }
          >
            ua
          </button>
          <button
            className={s.menuItem}
            onClick={() => languageChange("ru")}
          >
            ru
          </button>
          <button
            className={s.menuItem}
            onClick={() => languageChange("en")}
          >
            en
          </button>
        </nav>
        <div
          className={s.currentLanguage}
          onClick={() => (menu ? toggleMenu(false) : toggleMenu(true))}
        >
          {language}
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(App);
