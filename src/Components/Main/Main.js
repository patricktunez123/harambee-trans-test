import React from "react";
import { useTranslation } from "react-i18next";
import "./Main.css";

const Main = () => {
  const { t } = useTranslation();
  return <div className="harambee_main">{t("mainContent.title")}</div>;
};

export default Main;
