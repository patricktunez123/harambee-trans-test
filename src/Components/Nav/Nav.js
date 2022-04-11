import React from "react";
import { useTranslation } from "react-i18next";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "./Nav.css";

const lngs = {
  en: { nativeName: "English" },
  kin: { nativeName: "Kinyarwanda" },
};

const Nav = () => {
  const { i18n, t } = useTranslation();

  const menu = (
    <Menu>
      {Object.keys(lngs).map((lng) => (
        <Menu.Item key={lng} onClick={() => i18n.changeLanguage(lng)}>
          <Button className="app_btn" type="submit">
            {lngs[lng].nativeName}
          </Button>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className="harambe_nav">
      <Dropdown className="menus" overlay={menu} trigger={["click"]}>
        <a
          href="/"
          className="ant-dropdown-link"
          onClick={(e) => e.preventDefault()}
        >
          {t("navContent.changeLang")} <DownOutlined />
        </a>
      </Dropdown>
    </div>
  );
};

export default Nav;
