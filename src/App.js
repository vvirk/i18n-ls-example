import React, { useState, useRef, useEffect } from "react";
import { withTranslation } from "react-i18next";

//styles
import s from "./styles/app.module.scss";

export const App = ({ i18n, t }) => {
  const lsLanguage = localStorage.getItem("language");
  const [language, setLanguage] = useState(lsLanguage ? lsLanguage : "ua");
  const [menu, toggleMenu] = useState(false);
  const node = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleClickOutside = e => {
    if (node.current.contains(e.target)) {
      return;
    }
    toggleMenu(false);
  };
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
      <h1 className={s.title}>{t("title")}</h1>
      <div>{t("description")}</div>
      <div className={s.wrap} ref={node}>
        <nav className={menu ? s.menu : `${s.menu} ${s.close}`}>
          <button
            className={s.menuItem}
            onClick={() => languageChange("ua")}
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
          title="Click to change language"
        >
          {language} &#x025BE;
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(App);
