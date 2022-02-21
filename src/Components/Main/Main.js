import { Col, Row } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import CardItem from "../Card/Card";
import "./Main.css";

import { Data } from "../DammyData";

const Main = () => {
  const { t } = useTranslation();
  return (
    <div className="harambee_main">
      <div className="title">
        <h1>
          {t("mainContent.title")} {t("footer.text")}
        </h1>
      </div>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {Data.map((user) => (
          <Col className="gutter-row app_col" span={6}>
            <CardItem key={user.id} {...user} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Main;
