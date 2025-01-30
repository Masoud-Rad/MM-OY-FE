import React, { useEffect, useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";

export const Header = ({ setTheme, theme }) => {
  const [companyName, setCompanyName] = useState("");
  const [logoUrl, setLogoUrl] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(true);

  const fetchCompanyData = async () => {
    try {
      const response = await fetch('https://mm-oy.onrender.com/api/companyDetails');
      const data = await response.json();
      setCompanyName(data.companyDetails[0].company_name);
      setLogoUrl(data.companyDetails[0].logo_url);
    } catch (error) {
      console.error('Error fetching company info:', error);
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

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary alert alert-warning">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <button type="button" className="btn" onClick={toggleCollapse}>
            <IoMenu size={30} />
          </button>
          <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Values">Our-Values</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/About">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="d-flex justify-content-center align-items-center flex-shrink-0 logo-container">
  <img src={logoUrl} alt="company's logo" className="company-logo" />
</div>
          <div className="d-flex align-items-center" style={{ marginRight: '5px', marginLeft: '10px' }}>
            <button type="button" className="btn btn-info btn-lg btn-sm-lg" onClick={handleThemeChange}>
              {theme === 'light' ? <MdOutlineDarkMode size={30} /> : <MdOutlineLightMode size={30} />}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;