import React, { useCallback, useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle, FiUserCheck, FiWind } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog, BiSitemap } from "react-icons/bi";
import { BsFillShieldLockFill, BsShieldLockFill, IconName } from "react-icons/bs";



//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "../../css/SideBar.css";
import { Link } from "react-router-dom";


const UserSideBar = () => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  



  return (
    <>
      <div id="header" className=" bg-primary ">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? "PayRoll" : "PayRoll App"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem  icon={<FiHome />}>Dashboard 
              <Link to='/userdashboard'></Link>
              </MenuItem>
              <MenuItem icon={<FiUserCheck />}>Employee</MenuItem>
              <MenuItem icon={<FiWind />}> Resource<Link to='/RolesWithPermission'></Link></MenuItem>
              <MenuItem icon={<BiSitemap />}> Roles</MenuItem>
              <MenuItem icon={<BiCog />}>Settings</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />} >Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default UserSideBar;