"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX, FiShoppingCart, FiSearch } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //   const { cartItems, userInfo } = state;
  const cartItems = 0;

  const categories = [
    "Fishing",
    "Boating",
    "Shooting",
    "Hunting",
    "Camping",
    "Men",
    "Women",
    "Kids",
    "Outdoor Rec",
    "Home & Gifts",
    "Bargain Cave",
  ];

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-red-600 text-white text-sm py-2 flex items-center justify-center space-x-2">
        <span>HOLIDAY SAVINGS</span>
        <span>|</span>
        <span>
          <Link href="/shop">
            <div className="hover:underline">SHOP NOW</div>
          </Link>
        </span>
      </div>

      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <Link href="/">
            <div>
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                alt="Logo"
                className="h-10 w-auto"
              />
            </div>
          </Link>

          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-600 text-2xl"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>

          <div className="hidden md:flex flex-1 mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="What can we help you find?"
                className="w-full px-4 py-2 border rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <FiSearch className="absolute top-2.5 right-3 text-gray-500" />
            </div>
          </div>

          <div className="hidden md:flex space-x-4">
            <button aria-label="User Profile">
              <FaUserCircle className="text-2xl text-gray-600 hover:text-gray-900" />
            </button>
            <button aria-label="Shopping Cart" className="relative">
              <FiShoppingCart className="text-2xl text-gray-600 hover:text-gray-900" />
              <span className="absolute -top-1 -right-2 bg-yellow-500 text-xs text-white font-bold rounded-full px-1">
                {cartItems}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-2 px-4 py-4">
            <Link href="/search">
              <div className="flex items-center space-x-2 text-gray-600 hover:text-red-600">
                <FiSearch />
                <span>Search</span>
              </div>
            </Link>
            <Link href="/profile">
              <div className="flex items-center space-x-2 text-gray-600 hover:text-red-600">
                <FaUserCircle />
                <span>Profile</span>
              </div>
            </Link>
            <Link href="/cart">
              <div className="flex items-center space-x-2 text-gray-600 hover:text-red-600">
                <FiShoppingCart />
                <span>Cart ({cartItems})</span>
              </div>
            </Link>
            <hr className="border-gray-200" />
            {categories.map((category) => (
              <Link key={category} href={`/category/${category.toLowerCase()}`}>
                <div className="text-gray-600 hover:text-red-600">
                  {category}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="hidden md:block bg-white shadow">
        <div className="container mx-auto flex justify-center space-x-8 py-2">
          {categories.map((category) => (
            <Link key={category} href={`/category/${category.toLowerCase()}`}>
              <div className="text-sm font-medium text-gray-600 hover:text-red-600">
                {category}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
