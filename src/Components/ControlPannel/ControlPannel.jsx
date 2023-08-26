import React from "react";

// User Images imported from assets folder
import UserImg4 from "../../assets/profile-5.jpg";


// react icons
import { BsChevronRight, BsFillBellFill } from "react-icons/bs";
import {
  FiUser,FiEdit,FiLock,FiHelpCircle,FiToggleRight,
  FiSearch,FiRefreshCcw,

} from "react-icons/fi";

import "./ControlPannel.css";
import Transactions from "../../Pages/Transactions/Transactions";
import Notices from "../../Pages/Notices/Notices";
import Activity from "../../Pages/Activity/Activity";
import Schedules from "../../Pages/Schedules/Schedules";
import AdminDataSwipper from "../../Pages/Swipper/AdminDataSwipper";
import SalesReport from "../../Pages/SalesReport/SalesReport";
import Stores from "../../Pages/Stores/Stores";
import WeaklyTopProduct from '../../Pages/Stores/WeaklyTopProduct'


const Controlpannel = () => {
  return (
    <div className="Dashboard">
      {/* Dashboard Navbar Start from Here */}
      <div className="mt-4 row p-2 mx-2">
        <div className="col">
          <span className="text-info fs-6 mx-3">
            Dashboard <BsChevronRight />{" "}
            <span className="text-dark">Dashboard</span>
          </span>
        </div>
        <div className="col text-end">
          <div className="row">
            <div className="col-9">
              <input
                type="text"
                className="form-control rounded-pill  box border-white"
                placeholder="Search..."
              />
              <i
                className="position-absolute my-auto top-0 bottom-0 me-4 end-0 mt-1"
                data-feather="search"
              >
                <FiSearch />
              </i>
            </div>
            <div className="col-1">
              <button type="button" class="btn btn-secondary position-relative">
                <BsFillBellFill className="fs-5" />
                <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle"></span>
              </button>
            </div>
            <div className="col-2">
              <button
                class="btn btn-light"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={UserImg4}
                  alt="UserProfile"
                  width="35"
                  height="35"
                  className="UserProfile_Icon"
                />
              </button>
              <ul class="dropdown-menu">
                <hr />
                <li>
                  <a class="dropdown-item rounded-pill text-dark fw-semibold   rounded-pill" href="#">
                   <FiUser className="me-2" /> Profile
                  </a>
                </li>
                <li>
                  <a class="dropdown-item rounded-pill text-dark fw-semibold  " href="#">
                 <FiEdit className="me-2" /> Add Account 
                  </a>
                </li>
                <li>
                  <a class="dropdown-item rounded-pill text-dark fw-semibold  " href="#">
                    <FiLock className="me-2" /> Reset Password
                  </a>
                </li>
                <li>
                  <a class="dropdown-item rounded-pill text-dark fw-semibold  " href="#">
                   <FiHelpCircle className="me-2" /> Help
                  </a>
                </li>
                <hr />
                <li>
                  <a class="dropdown-item rounded-pill text-dark fw-semibold " href="#">
                  <FiToggleRight className="me-2" />  Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="text-secondary" />
      </div>
      {/* Dashboard Navbar End Here */}
{/*  NEXT SECTION AFTER CONTROL PANNEL NAV END  */}
<div className="row">
    <div className="col-9 border-end">
            <div className="text-end">
                <span className="text-info btn btn-"><FiRefreshCcw className="me-2"/>Reload Data</span>
            </div>
{/* DASHBOARD HOME  */}
    <div className="mx-3">
    <AdminDataSwipper />
    <SalesReport />
    <Stores />
    <WeaklyTopProduct />
    </div>

    </div>


   {/*RIGHT SIDE ALL COMPONETS PAGES CALL HERE  */}
    <div className="col-3">
         <Transactions />
         <Activity />
         <Notices />
         <Schedules />
    </div>
</div>
    </div>
  );
};

export default Controlpannel;
