import React from "react";
import { useTranslation } from "react-i18next";
import "./Footer.css";

const Footer = () => {
  const { t } = useTranslation();
  return <div className="harambee_footer">{t("footer.text")}</div>;
};

export default Footer;
