import { Col, Row } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import CardItem from "../Card/Card";
import "./OtherPage.css";

import { Data } from "../DammyData";
import { Link } from "react-router-dom";

const OtherPage = () => {
  const { t } = useTranslation();
  return (
    <div className="harambee_main">
      <div className="title">
        <h1>{t("mainContent.otherPage")}</h1>
      </div>
      <Link to="/">{t("mainContent.goback")}</Link> <br /> <br />
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

export default OtherPage;
