// import React from 'react'
import React, { useState } from "react";
// Bootstrap imported here
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
// React icons imported here from react Icons
import { BsPeople, BsInbox } from "react-icons/bs";
import { MdOutlineHome, MdFormatAlignCenter } from "react-icons/md";
import {
  FiHome,
  FiHardDrive,
  FiEdit,
  FiActivity,
  FiCreditCard,
  FiUser,
  FiCalendar,
  FiMessageSquare,
  FiFileText,
  FiBell,
} from "react-icons/fi";
import "./SideNavbar.css";

const SideNavbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isReportCollapsed, setIsReportCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  const ReporttoggleCollapse = () => {
    setIsReportCollapsed(!isReportCollapsed);
  };
  return (
    <div className="SideNav">
      <span className="text-white mt-">
        <h5 className="pt-5 mx-5">
          {" "}
          Task <b>React</b>
        </h5>
        <hr />
      </span>
      <ul className="nav flex-column mx-2">
        <li className="nav-item">
          <a className="nav-link fs-6 p-3 fw-bold  text-dark DashBoard_Nav_link" href="#" data-aos="fade-left">
            <FiHome className="fs-4 text-primary me-2" /> Dashboard
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link fs-6 fw-semibold p-3 text-white" href="#" data-aos="fade-up-left">
            <BsPeople className="fs-4" /> Registred Campus
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link fs-6 fw-semibold p-3 text-white" href="#" data-aos="fade-up-left">
            <BsPeople className="fs-4" /> Registred Corporate
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link fs-6 fw-semibold p-3 text-white" href="#" data-aos="fade-up-left">
            <BsPeople className="fs-4" /> Registred Student
          </a>
        </li>
        {/* SIDE NAVBAR PLACEMENT ASSISTANCE DROP DOWN MENU  */}
        <li className="nav-item">
          <a className="nav-link fs-6 fw-semibold p-3 text-white" href="#" data-aos="fade-up-left">
            <FiHardDrive className="fs-5" /> Placement Assistance
          </a>
        </li>
        <div className="container-fluid p-3" data-aos="fade-up-left">
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleCollapse}
            aria-expanded={!isCollapsed}
            aria-label="Toggle navigation"
          >
            <li className="nav-item">
              <a
                className="fs-6 text-decoration-none fw-semibold  text-white dropdown-toggle"
                href="#"
              >
                <FiEdit className="fs-5" /> Invitation mgmt
              </a>
            </li>
          </button>
        </div>
        <div
          className={`collapse ${!isCollapsed ? "show" : ""}`}
          id="navbarToggleExternalContent"
        >
          <div className="mx-2 p-2 text-white shadow fs-6">
            <li>
              <a class="dropdown-item fw-semibold p-2" href="#">
                <FiActivity /> Campus Invitation
              </a>
            </li>
            <li>
              <a class="dropdown-item fw-semibold p-2" href="#">
                <FiActivity /> Corporate Invitation
              </a>
            </li>
            <li>
              <a class="dropdown-item  fw-semibold p-2" href="#">
                <FiActivity /> Student Invitation
              </a>
            </li>
          </div>
        </div>
        {/*  SIDE NAVBAR PLACEMENT ASSISTANCE DROP DOWN MENU END HERE*/}

        <li className="nav-item">
          <a className="nav-link fs-6 fw-semibold p-3 text-white" href="#" data-aos="fade-left">
            <FiCreditCard className="fs-5" /> Training Workshop
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link fs-6 fw-semibold p-3 text-white" href="#" data-aos="zoom-out-left">
            <FiUser className="fs-4" /> Student Assessment
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link fs-6 fw-semibold p-3 text-white" href="#" data-aos="zoom-out-left">
            <FiCalendar className="fs-4" /> Interview
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link fs-6 fw-semibold p-3 text-white" href="#">
            <FiUser className="fs-4" /> CRM
          </a>
        </li>
        <hr className="text-white" />
        {/* SIDE NAVBAR DROPDOWN MENU FOR REPORTS  */}
        <div className="container-fluid p-3" data-aos="zoom-out-left">
          <button
            className="navbar-toggler"
            type="button"
            onClick={ReporttoggleCollapse}
            aria-expanded={!isReportCollapsed}
            aria-label="Toggle navigation"
          >
            <li className="nav-item">
              <span
                className="fs-6 text-decoration-none fw-semibold  text-white dropdown-toggle"
                href="#" 
              >
                <BsInbox className="fs-5" /> Reports
              </span>
            </li>
          </button>
        </div>
        <div
          className={`collapse ${!isReportCollapsed ? "show" : ""}`}
          id="navbarToggleExternalContent"
        >
          <div className="mx-2 p-2 text-white  fs-6">
            <li>
              <a class="dropdown-item fw-semibold p-2" href="#"  data-aos="zoom-out-left">
                <FiActivity /> Campus
              </a>
            </li>
            <li>
              <a class="dropdown-item fw-semibold p-2" href="#"  data-aos="zoom-out-left">
                <FiActivity /> Corporate
              </a>
            </li>
          </div>
        </div>
        {/* SIDE NAVBAR DROPDOWN MENU FOR REPORTS End Here */}

        <li className="nav-item">
          <a className="nav-link fs-6 fw-semibold p-3 text-white" href="#"  data-aos="zoom-out-left">
            <FiMessageSquare className="fs-4" /> Support
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link fs-6 fw-semibold p-3 text-white" href="#"  data-aos="zoom-out-left">
            <FiFileText className="fs-4" /> Blog
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link fs-6 fw-semibold p-3 text-white" href="#"  data-aos="zoom-out-left">
            <FiBell className="fs-4" /> Notification
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideNavbar;
