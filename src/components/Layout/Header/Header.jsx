import React, { useState } from "react";
import Logo from "../../../assets/svg/logo.svg";
import "./Header.scss";
import { Link } from "react-router-dom";
import User from "../../../assets/svg/user.svg";
import Heart from "../../../assets/svg/heart.svg";
import Basket from "../../../assets/svg/basket.svg";
import Close from "../../../assets/svg/close.svg";
const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const handleCloseButtonClick = () => {
    setActiveMenu(null);
  };
  return (
    <header className="site-header py-[5px] w-full fixed">
      <div className="container">
        <div className="site-header-wrapper w-full p-[4px] flex items-center flex-col">
          <div className="bg-[#D9D9D9] pt-[4px] pb-[4px] ps-[4px] pe-[32px] flex items-center justify-between w-full rounded-[12px]">
            <div className="flex items-center">
              <img className="pe-[20px]" src={Logo} alt="logo" />
              <ul className="flex">
                <li>
                  <Link
                    className={`uppercase font-bold px-[24px] border-s-[1px] border-[#BFBFBF] ${
                      activeMenu === "men" ? "active" : ""
                    }`}
                    onClick={() => handleMenuClick("men")}
                  >
                    MEN
                  </Link>
                </li>
                <li>
                  <Link
                    className={`uppercase font-bold px-[24px] border-s-[1px] border-[#BFBFBF] ${
                      activeMenu === "women" ? "active" : ""
                    }`}
                    onClick={() => handleMenuClick("women")}
                  >
                    women
                  </Link>
                </li>
                <li>
                  <Link
                    className={`uppercase font-bold px-[24px] border-s-[1px] border-[#BFBFBF] ${
                      activeMenu === "children" ? "active" : ""
                    }`}
                    onClick={() => handleMenuClick("children")}
                  >
                    children
                  </Link>
                </li>
                <li>
                  <Link
                    className={`uppercase font-bold px-[24px] border-s-[1px] border-[#BFBFBF] ${
                      activeMenu === "sale" ? "active" : ""
                    }`}
                    onClick={() => handleMenuClick("sale")}
                  >
                    sale
                  </Link>
                </li>
                <li>
                  <Link
                    className={`uppercase font-bold px-[24px] border-s-[1px] border-[#BFBFBF] ${
                      activeMenu === "collection" ? "active" : ""
                    }`}
                    onClick={() => handleMenuClick("collection")}
                  >
                    collection
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex items-center overflow-hidden">
              <select className="bg-transparent text-[12px] font-medium leading-normal text-[#000] outline-none">
                <option
                  className="text-[12px] font-medium leading-normal"
                  value="eng"
                >
                  English
                </option>
                <option
                  className="text-[12px] font-medium leading-normal"
                  value="ru"
                >
                  Russia
                </option>
                <option
                  className="text-[12px] font-medium leading-normal"
                  value="uz"
                >
                  Uzbek
                </option>
              </select>
              <div className=" bg-[#BFBFBF] h-[50px] w-[1px] mx-[36px]"></div>
              <div className="flex items-center">
                <img className="pe-[16px]" src={User} alt="" />
                <div className="w-[1px] h-[16px] bg-[#BFBFBF] me-[16px]"></div>
                <div className="flex items-center flex-col pe-[16px]">
                  <img src={Heart} alt="" />
                  <div className="w-[4px] h-[4px] bg-[#FB1919] rounded"></div>
                </div>
                <div className="w-[1px] h-[16px] bg-[#BFBFBF] me-[16px]"></div>
                <div className="flex items-center flex-col gap-1">
                  <img src={Basket} alt="" />
                  <div className="w-[4px] h-[4px] bg-[#FB1919] rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {activeMenu && (
          <div className="menu-items w-full bg-[#1E1E1E] mt-[-15px] rounded-br-[12px] rounded-bl-[12px] pt-[45px] px-[56px] pb-[32px]">
            {activeMenu === "men" && (
              <div>
                <div className="w-full flex items-center justify-between pb-[10px] mb-[20px] border-b-[1px] border-[#333] px-[8px]">
                  <h2 className="font-bold leading-normal text-[16px] text-[#fff]">
                    MEN
                  </h2>
                  <button
                    className="close-button border-s-[1px] border-[#333] ps-[21px] "
                    onClick={handleCloseButtonClick}
                  >
                    <img src={Close} alt="" />
                  </button>
                </div>
                <ul>
                  <li>Menu item 1</li>
                  <li>Menu item 2</li>
                  <li>Menu item 3</li>
                </ul>
              </div>
            )}
            {activeMenu === "women" && (
              <ul>
                <li>Menu item 4</li>
                <li>Menu item 5</li>
                <li>Menu item 6</li>
              </ul>
            )}
            {activeMenu === "children" && (
              <ul>
                <li>Menu item 7</li>
                <li>Menu item 8</li>
                <li>Menu item 9</li>
              </ul>
            )}
            {activeMenu === "sale" && (
              <ul>
                <li>Menu item 10</li>
                <li>Menu item 11</li>
                <li>Menu item 12</li>
              </ul>
            )}
            {activeMenu === "collection" && (
              <ul>
                <li>Menu item 13</li>
                <li>Menu item 14</li>
                <li>Menu item 15</li>
              </ul>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
