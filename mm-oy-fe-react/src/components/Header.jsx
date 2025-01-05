import React, { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import "../styles.css";
import { useTranslation } from 'react-i18next';

export const Header = ({ setTheme, theme }) => {
  const [companyName, setCompanyName] = useState("");
  const [logoUrl, setlogoUrl] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { t, i18n } = useTranslation();

  const fetchCompanyData = async () => {
    try {
      const response = await fetch("https://mm-oy.onrender.com/api/companyDetails");
      const data = await response.json();
      setCompanyName(data.companyDetails[0].company_name);
      setlogoUrl(data.companyDetails[0].logo_url);
    } catch (error) {
      console.error("Error fetching company info:", error);
    }
  };

  useEffect(() => {
    fetchCompanyData();
  }, []);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleThemeChange = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'fi' : 'en');
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button type="button" className="btn" onClick={toggleCollapse}>
            <IoMenu size={30} />
          </button>
          <div className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">{t('home')}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/About">{t('about')}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Contact">{t('contact')}</a>
              </li>
            </ul>
          </div>
          <div className="d-flex align-items-center" style={{ marginRight: '5px', marginLeft: '10px' }}>
            <button type="button" className="btn btn-info btn-lg btn-sm-lg" onClick={handleThemeChange}>
              {theme === 'light' ? <MdOutlineDarkMode  /> : <MdOutlineLightMode  />}
            </button>
            <button type="button" className="btn btn-warning btn-lg btn-sm-lg ms-2" onClick={toggleLanguage}>
              {i18n.language === 'en' ? 'EN' : 'FI'}
            </button>
          </div>
          <div className="d-flex">
            <img src={logoUrl} alt="company's logo" className="company-logo" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;