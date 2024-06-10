import React from "react";
import { Link } from "react-router-dom";
import { ArrowForward } from "@mui/icons-material";
import packagepilot from "../../assets/logos/PackagePilot-Logo.png";
import "./footer.css";
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation("global");
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img
            className="logo-footer"
            src={packagepilot}
            alt=""
            title="PackagePilot"
          />
          <h1>PackagePilot</h1>
        </div>
        <div className="footer-grid">
          <div className="footer-item">
            <div className="footer-title">{t("footer.footer-company")}</div>
            <Link to="/us" className="footer-link">
              {t("header.menu-aboutUs")}
            </Link>
            <Link to="/team" className="footer-link">
            {t("header.menu-ourTeam")}
            </Link>
            <Link to="/shipments" className="footer-link">
            {t("header.menu-contact")}
            </Link>
          </div>
      
          <div className="footer-item">
            <div className="footer-title">{t("footer.social-media")}</div>
            <span className="social-link">
              <a
                href="https://github.com/PackagePilot"
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
                <ArrowForward />
              </a>
            </span>
            <span className="social-link">
              <a
                href="https://www.linkedin.com/company/packagepilot/"
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
                <ArrowForward />
              </a>
            </span>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} PackagePilot. {t("footer.all-rights-reserved")}
        </div>
      </div>
    </div>
  );
};

export default Footer;
