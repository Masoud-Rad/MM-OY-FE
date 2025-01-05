import React, { useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import "../styles.css";

export const Header = ({ setTheme, theme }) => {
  const [companyName, setCompanyName] = React.useState("");
  const [logoUrl, setlogoUrl] = React.useState("");
  const [isCollapsed, setIsCollapsed] = React.useState(true);

  const fetchCompanyData = async () => {
    try {
      const response = await fetch(
        "https://mm-oy.onrender.com/api/companyDetails"
      );
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

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button type="button" className="btn" onClick={toggleCollapse}>
            <IoMenu size={30} />
          </button>
          <div
            className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/About">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div >
          <button type="button" className="btn" onClick={handleThemeChange}>
              {theme === 'light' ? <MdOutlineDarkMode size={24} /> : <MdOutlineLightMode size={24} />}
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
