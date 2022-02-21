import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import "./Loader.css";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Loader = () => {
  return (
    <div className="app_loader">
      <Spin indicator={antIcon} />
    </div>
  );
};

export default Loader;
