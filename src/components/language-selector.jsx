import React from "react";
import { useTranslation } from "react-i18next";
const languages = [
  { code: "en", lang: "english" },
  { code: "uz", lang: "uzbek" },
  { code: "ru", lang: "russian" },
];

const Languageselector = () => {
  const {i18n}=useTranslation()
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  };
  return (
    <div>
      {languages.map((lng) => {
        return (
          <button
            className={lng.code===i18n.language?'bg-slate-400':'bg-slate-100'}
            key={lng.code}
            onClick={() => changeLanguage(lng.code)}
          >
            {lng.lang}
          </button>
        );
      })}
    </div>
  );
};

export default Languageselector;
