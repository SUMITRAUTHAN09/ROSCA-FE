"use client";

import Footer from "@/components/custom/footer";
import NavBar from "@/components/custom/navbar";
import UserHeader from "@/components/custom/user_header";
import { useState } from "react";
import Main from "../../../components/custom/Main";

export default function Page() {
  const [roomType, setRoomType] = useState("All Types");
  const [priceRange, setPriceRange] = useState("Any Budget");
  const [location, setLocation] = useState("");

  return (
    <div className="mt-20">
      <UserHeader />

      <NavBar
        onRoomTypeChange={setRoomType}
        onPriceChange={setPriceRange}
        onSetLocation={setLocation}
      />

      <Main roomType={roomType} priceRange={priceRange} location={location} />

      <Footer id="footer" />
    </div>
  );
}
