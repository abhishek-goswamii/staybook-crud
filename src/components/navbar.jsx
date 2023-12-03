import React from "react";


const Navbar = () => {
  return (
    <div
      className="flex justify-between p-4"
      style={{ background: "linear-gradient(to bottom, #205351, #ffffff)" }}
    >
      <input className="m-4 p-1 w-500 rounded-xl pl-3" type="text" placeholder="search" />

      <img src='/images/brand_logo.svg' alt="logo"
      className="w-10"
      />
    </div>
  );
};

export default Navbar;
