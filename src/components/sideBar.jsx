import React from 'react'

const SideBar = () => {
  return (
    <div
      className="flex flex-col pt-10 pl-5 pr-5"
      style={{ backgroundColor: "#1f5251" , width:'290px !important', height:'3000px'}}
    >
      <div className="pt-2 pb-2 pl-3 m-3 pr-5 border-2 rounded-xl">
        <p className="text-white">Booking</p>
      </div>
      <div className="pt-2 pb-2 pl-3 m-3 pr-5 border-2 rounded-xl">
        <p className="text-white">Inventory</p>
      </div>
      <div className="pt-2 pb-2 pl-3 m-3 pr-5 border-2 rounded-xl">
        <p className="text-white">Room</p>
      </div>
      <div className="pt-2 pb-2 pl-3 m-3 pr-5 border-2 rounded-xl">
        <p className="text-white">Pricing</p>
      </div>
    </div>
  );
}

export default SideBar