"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
export default function NavBar({
  onRoomTypeChange,
  onPriceChange,
  onSetLocation,
}) {
  const triggerRef = useRef(null);
  const router = useRouter();
  const [selectedRoom, setSelectedRoom] = useState("All Types");
  const [selectedPrice, setSelectedPrice] = useState("Any Budget");
  const [location, setLocation] = useState("");

  const handleSelect = (value) => {
    setSelectedRoom(value);
    onRoomTypeChange(value);
  };

  const handlePriceSelect = (value) => {
    setSelectedPrice(value);
    onPriceChange(value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    if (onSetLocation) {
      onSetLocation(e.target.value);
    }
  };

  const handleSearch = () => {
    // Trigger search functionality if needed
    router.push("/login");
    console.log("Search clicked:", { location, selectedRoom, selectedPrice });
  };

  return (
    <section className="w-full max-w-6xl px-6 mx-auto my-8">
      <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Location Input */}
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Location
            </label>
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="City, Area"
                value={location}
                onChange={handleLocationChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Property Type Dropdown */}
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Property Type
            </label>
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <DropdownMenu>
                <DropdownMenuTrigger className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-left bg-white hover:bg-gray-50 flex items-center justify-between">
                  <span className="text-gray-700">{selectedRoom}</span>
                  <ChevronDown className="h-4 w-4 text-gray-400 absolute right-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                  <DropdownMenuItem onSelect={() => handleSelect("All Types")}>
                    All Types
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onSelect={() => handleSelect("single room")}
                  >
                    Single Room
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onSelect={() => handleSelect("double room")}
                  >
                    Double Room
                  </DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => handleSelect("flat")}>
                    Flat
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onSelect={() => handleSelect("shared room")}
                  >
                    Shared Room
                  </DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => handleSelect("apartment")}>
                    Apartment
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Budget Dropdown */}
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Budget
            </label>
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <DropdownMenu>
                <DropdownMenuTrigger className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-left bg-white hover:bg-gray-50 flex items-center justify-between">
                  <span className="text-gray-700">{selectedPrice}</span>
                  <ChevronDown className="h-4 w-4 text-gray-400 absolute right-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                  <DropdownMenuItem
                    onSelect={() => handlePriceSelect("Any Budget")}
                  >
                    Any Budget
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onSelect={() => handlePriceSelect("Under ₹5,000")}
                  >
                    Under ₹5,000
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onSelect={() => handlePriceSelect("₹5,000 - ₹10,000")}
                  >
                    ₹5,000 - ₹10,000
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onSelect={() => handlePriceSelect("₹10,000 - ₹20,000")}
                  >
                    ₹10,000 - ₹20,000
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onSelect={() => handlePriceSelect("Above ₹20,000")}
                  >
                    Above ₹20,000
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Search Button */}
          <div className="flex items-end">
            <button
              onClick={handleSearch}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-bold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
