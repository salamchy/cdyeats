import { NavLink } from "react-router-dom";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "./ui/menubar";

const Navbar = () => {
  const admin = true;
  return (
    <div className="max-w-7xl mx-auto mt-2">
      <div className="flex items-center justify-between">
        <NavLink to="/">
          <h1 className="font-bold md:font-extrabold text-2xl">CDYEATS</h1>
        </NavLink>
        <div className="hidden md:flex items-center gap-10">
          <div className="hidden md:flex items-center gap-6">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/order/status">Orders</NavLink>
          </div>
          {admin && (
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger className="cursor-pointer">
                  Dashboard
                </MenubarTrigger>
                <MenubarContent>
                  <NavLink to="/admin/resturant">
                    <MenubarItem className="cursor-pointer">
                      Resturant
                    </MenubarItem>
                  </NavLink>
                  <MenubarSeparator />
                  <NavLink to="/admin/menu">
                    <MenubarItem className="cursor-pointer">Menu</MenubarItem>
                  </NavLink>
                  <MenubarSeparator />
                  <NavLink to="/admin/orders">
                    <MenubarItem className="cursor-pointer">Orders</MenubarItem>
                  </NavLink>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
