import React from "react";
import { Link, Outlet } from "react-router-dom";
import { MdDashboard, MdDashboardCustomize } from "react-icons/md";
import {
  FaEdit,
  FaLocationArrow,
  FaPlusCircle,
  FaQuestionCircle,
  FaRegUser,
  FaShoppingBag,
  FaUser,
} from "react-icons/fa";
import logo from "/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import Login from "../components/Login";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const DashboardLayout = () => {
  const {loading} = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();

  const sharedLinks = (
    <>
      <li>
        <Link to="/home">
          <MdDashboard />
          Home
        </Link>
      </li>
      <li>
        <Link to="/menu">
          <FaCartShopping />
          Menu
        </Link>
      </li>
      <li>
        <Link to="/home">
          <FaLocationArrow />
          Orders Tracking
        </Link>
      </li>
      <li>
        <Link to="/home">
          <FaQuestionCircle />
          Customer Support
        </Link>
      </li>
    </>
  );

  return (
    <div>
      {isAdmin ? (
        <div>
          <div className="drawer sm:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col sm:items-start sm:justify-start justify-center">
              <div className="flex items-center justify-between my-4">
                <label
                  htmlFor="my-drawer-2"
                  className="btn btn-primary drawer-button lg:hidden"
                >
                  <MdDashboardCustomize />
                </label>
                <button className="btn rounded-full px-6 bg-green text-white sm:hidden flex items-center gap-2">
                  <FaRegUser />
                  Logout
                </button>
              </div>
              <div className="mt-5 md:mt-2 mx-4">
                <Outlet />
              </div>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-2"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}
                <li>
                  <Link to="/dashboard" className="flex justify-start mb-3">
                    <img src={logo} alt="" className="w-20" />
                    <div className="badge badge-primary">Admin</div>
                  </Link>
                </li>
                <hr />
                <li>
                  <Link to="/dashboard">
                    <MdDashboard />
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard">
                    <FaShoppingBag />
                    Manage Bookings
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard">
                    <FaPlusCircle />
                    Add Menu
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard">
                    <FaEdit />
                    Manage Items
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="/dashboard/users">
                    <FaUser />
                    All Users
                  </Link>
                </li>

                {/* Shared Navlinks */}
                <hr />
                {sharedLinks}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default DashboardLayout;
