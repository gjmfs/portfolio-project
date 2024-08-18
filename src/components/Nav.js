import { NavLink } from "react-router-dom";

export const Nav = () => {
  const navArr = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "contact",
      name: "Contact",
    },
    {
      path: "about",
      name: "About Us",
    },
  ];
  const nav = navArr.map((navArr, index) => (
    <li key={index} className="nav-item me-5">
      <NavLink className="nav-link" href="#" to={navArr.path}>
        {navArr.name}
      </NavLink>
    </li>
  ));
  return (
    <ul className="nav nav-fill nav-underline bg-dark-subtle p-2">{nav}</ul>
  );
};
