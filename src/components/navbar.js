// import '../stylings/navbar.css';

// const Navbar = () => {
//   return (
    
//     <div className="Navbar">
//       <div>
//         <h1>Navbar</h1>
//       </div>
//     </div>
//     );

// };
// export default Navbar;

import { Link } from "react-router-dom";
import "../stylings/navbar.css";

const Navbar = () => {
  const navbarList = ["About", "Gallery", "Contact"];

  return (
    <div className="NavbarStyled">
      {navbarList.map((navbarItem, i) => {
        let path = "/" + navbarItem;
        return (
          <div className="NavItemStyled" key={i}>
            <Link to={path}>{navbarItem}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;
