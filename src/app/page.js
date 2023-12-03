"use client";
import BarItem from "@/components/barItem";
import Navbar from "@/components/navbar";
import { useState } from "react";

export default function Home() {
  const [activeTabIndex, setActiveTabIndex] = useState(1);

  return (
    <>
      <Navbar />

      <div
        className="flex flex-row pt-10 pl-10 justify-start"
        style={{
          borderBottom: "2px solid #4f7e7d",
          color: "#82a4a4",
          alignItems: "flex-end",
        }}
      >

     
          <BarItem
            name="Attributes"
            activeTabIndex={activeTabIndex} 
            itemIndex={1}
            setItemActiveTabIndex={setActiveTabIndex}
          />
          <BarItem
            name="ARI Details"
            activeTabIndex={activeTabIndex} 
            itemIndex={2}
            setItemActiveTabIndex={setActiveTabIndex}
          />
          <BarItem
            name="Address Details"
            activeTabIndex={activeTabIndex} 
            itemIndex={3}
            setItemActiveTabIndex={setActiveTabIndex}
          />

          <BarItem
            name="Description"
            activeTabIndex={activeTabIndex} 
            itemIndex={4}
            setItemActiveTabIndex={setActiveTabIndex}
          />

      </div>
    </>
  );
}
