import React from "react";
import { Card, Avatar } from "antd";
import { useTranslation } from "react-i18next";
import {
  EditOutlined,
  ArrowRightOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const { Meta } = Card;

const CardItem = ({ name }) => {
  const history = useHistory();
  const goTo = () => {
    history.push("/other-page");
  };

  const { t } = useTranslation();
  return (
    <Card
      cover={
        <img
          alt="example"
          src="https://i.pinimg.com/474x/bc/d4/ac/bcd4ac32cc7d3f98b5e54bde37d6b09e.jpg"
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <ArrowRightOutlined key="ellipsis" onClick={() => goTo()} />,
      ]}
    >
      <Meta
        avatar={
          <Avatar src="https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture-986x1024.jpg" />
        }
        title={name}
        description={`${t("mainContent.desc1")} ${name}. ${t(
          "mainContent.desc2"
        )}`}
      />
    </Card>
  );
};

export default CardItem;
