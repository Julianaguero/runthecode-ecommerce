import { HiOutlineUser } from "react-icons/hi";
import { NavLink } from "react-router-dom";

function UserIconContainer() {
  return (
    <NavLink
      to="/user/profile"
      aria-label="user login"
      className="h-[24px] bg-red"
    >
      <HiOutlineUser className="w-6 h-6 hover:text-persimmon" aria-hidden />
    </NavLink>
  );
}

export default UserIconContainer;
