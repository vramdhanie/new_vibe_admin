import React, { useContext } from "react";
import { withRouter, NavLink, useHistory, useLocation } from "react-router-dom";
import { MdHome } from "react-icons/md";
import logo from "../../images/logo_full.png";
import { FirebaseContext } from "../../firebase";

const Header = () => {
  const { user, firebase } = useContext(FirebaseContext);
  const history = useHistory();
  const location = useLocation();

  return (
    <header className="flex justify-between p-1 border-b">
      <div className="flex items-center flex-1">
        <NavLink to="/" className="p-1">
          <img src={logo} className="w-32" alt="xtracart logo" />
        </NavLink>
      </div>
      <div className="flex items-center">
        {user ? (
          <>
            <div>{user.displayName}</div>
            <div className="px-1">|</div>
            <div
              className="cursor-pointer hover:text-teal-500 text-blue-800"
              onClick={() => {
                firebase.logout();
                history.push("/");
              }}
            >
              logout
            </div>
          </>
        ) : !location.pathname.startsWith("/login") ? (
          <NavLink
            to={`/login${location.pathname}`}
            className="p-1 hover:text-teal-500 text-blue-800"
          >
            Login
          </NavLink>
        ) : (
          <NavLink to="/" className="p-1 hover:text-teal-500 text-blue-800">
            <MdHome />
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default withRouter(Header);
