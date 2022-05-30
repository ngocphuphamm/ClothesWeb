import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import "../../../assets/styles/admin/narbaradmin.css";
import Logo from "../../../assets/images/hyperX.jpeg";
import { useCookies } from "react-cookie";
import { useEffect } from 'react';
import Auth from "../../auth/auth";
import avatar from "../../../assets/images/avatar.jpeg";
import axiosMethod from "../../../middlewares/axios";

export default function NavbarAppAdmin() {
  const [cookies, setCookie, removeCookie] = useCookies(["user","accessToken"]);
  const handleClickLogOut = async () => {
		try {
			const res = await axiosMethod("authJWT/logout","POST");
			if(res.success === true)
			{
				
				removeCookie("accessToken");
   
			}
		
		} catch (err) {
			console.log(err);
		}
	};
	return (
        <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <span className="logo"><div id="center-logo" className="mt-4">
					<img
						id="logo"
						src={Logo}
						alt=""
						className="logo-Img"
					></img>
				</div></span>
          </div>
          <div className="topRight">
            <div className="topbarIconContainer">
              <NotificationsNone />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <Language />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer" >
                   
              <span onClick={handleClickLogOut}>
								Đăng xuất
							</span>
            </div>
            <img src={avatar} alt="" className="topAvatar" />

          </div>
        </div>
      </div>
    )
}
