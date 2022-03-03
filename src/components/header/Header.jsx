import "./_header.scss";

import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";

export const Header = ({ handleToggleSidebar }) => {
  return (
    <div className="border border-dark header">
      <FaBars
        className="header_menu"
        size={26}
        onClick={() => handleToggleSidebar()}
      />

      <img
        src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
        alt=""
        className="header_logo"
      />

      <form>
        <input type="text" placeholder="search anything" />
        <button type="button">
          <AiOutlineSearch size={22}></AiOutlineSearch>
        </button>
      </form>
      <div className="header_icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img
          src="https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=20&m=476085198&s=170667a&w=0&h=FXkT-N6vISLOCUefa9MyQg0pH-6loMX9zBZjgLK458c="
          alt=""
        />
      </div>
    </div>
  );
};
