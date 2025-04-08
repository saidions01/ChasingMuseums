import React from "react";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { i18n } = useTranslation();

  return (
    <header className="header">
      <h1>Chasing Museums</h1>
      <div className="language-toggle">
        <button onClick={() => i18n.changeLanguage("en")}>EN</button>
        <button onClick={() => i18n.changeLanguage("ar")}>AR</button>
      </div>
    </header>
  );
};
