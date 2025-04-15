import { useState } from "react";
import { Button, Menu, MenuItem, Avatar, IconButton, Divider } from "@mui/material"; // MUI components
import { ShoppingCart, AccountCircle, ExitToApp } from "@mui/icons-material"; // MUI Icons
// import "./Header.scss";

const Header = ({ user = { name: "John Doe" }, onLogout }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    onLogout();
    handleMenuClose();
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src="/logo.png" alt="Logo" className="logo" />
      </div>

      <div className="header-right">
        <IconButton>
          <ShoppingCart />
        </IconButton>

        <IconButton onClick={handleMenuOpen} className="user-icon">
          <Avatar alt={user.name} src="/default-avatar.png" />
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <div className="dropdown-user-name">{user.name}</div>
          <MenuItem onClick={handleMenuClose}>
            <AccountCircle className="mr-2" />
            Profile
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleLogout}>
            <ExitToApp className="mr-2" />
            Logout
          </MenuItem>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
