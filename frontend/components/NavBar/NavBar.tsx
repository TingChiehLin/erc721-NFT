import React, { FC } from "react";

interface NavBarTypeProp {
  connectAccount: () => void;
}

const NavBar: FC<NavBarTypeProp> = ({ connectAccount }) => {
  return <div>NavBar</div>;
};

export default NavBar;
