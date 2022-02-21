import React from "react";
import { useTranslation } from "react-i18next";
import "./Nav.css";

const lngs = {
  en: { nativeName: "English" },
  kin: { nativeName: "Kinyarwanda" },
};

const Nav = () => {
  const { i18n } = useTranslation();

  return (
    <div className="harambe_nav">
      <div>
        {Object.keys(lngs).map((lng) => (
          <button
            key={lng}
            style={{
              fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
            }}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
          >
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Nav;
