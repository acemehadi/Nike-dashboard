import { useState } from "react";

const Menu = () => {
  const [isDropdownvisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };
  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <nav className="navbar">
      <ul className="main-menu">
        <li
          className="menu-item"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a href="https://www.nike.com/men">Men</a>
          {isDropdownvisible && (
            <div className="dropdown-menu">
              <div className="dropdown-section">
                <h4>New Releases </h4>
                <ul>
                  <li>
                    <a href="#">Shoes</a>
                  </li>
                </ul>
              </div>
              <div className="dropdown-section">
                <h4>Featured</h4>
                <ul>
                  <li>
                    <a href="#"></a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};
export default Menu;
