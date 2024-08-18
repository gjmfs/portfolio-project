import { NavLink } from "react-router-dom";
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="Footer bg-dark-subtle">
      <div className="container p-0">
        <div className="row text-center text-info-emphasis bg-dark-subtle">
          <p className="pt-2">
            &copy;{currentYear}{" "}
            <NavLink
              className="text-info-emphasis link-offset-2 link-underline link-underline-opacity-0"
              to={"https://www.mufees.space"}
            >
              Tech with Mufees
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};
