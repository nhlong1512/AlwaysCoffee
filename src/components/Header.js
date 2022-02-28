import React from 'react'
import { useState } from 'react'
import './Home.css'
import { Link } from "react-router-dom"
import { VscChromeClose, VscThreeBars, VscStarFull, VscTwitter } from "react-icons/vsc"
import Logo from '../img/LogoAlways.png'
import { IoCartOutline } from "react-icons/io5"
function Header() {
  const [isOpenHamburger, setIsOpenHamburger] = useState(false)
  const handleClickHamburger = (e) => {
    setIsOpenHamburger(!isOpenHamburger)
    e.stopPropagation()
  }
  return (
    <div className=""
      onClick={() => setIsOpenHamburger(false)}
    >
      <div className="activeTop fixed z-[10] bg-main-color top-[0] right-[0] left-[0] w-screen ">
        <div className="max-w-[1200px] flex items-center justify-between px-[24px] py-[12px] mx-auto">
          <div className="w-[50px] h-[50px] opacity-[1] z-[1] cursor-pointer flex justify-center items-center "
            onClick={handleClickHamburger}
          >
            <VscThreeBars className="w-full h-full text-primary-color" />
          </div>
          <div className="">
            <a href=""><img src={Logo} alt="LogoAlways" className="h-[44px]" /></a>
          </div>
          <div className="w-[50px] h-[50px] opacity-[1] z-[1] cursor-pointer flex justify-center items-center">
            <IoCartOutline className="w-full h-full text-primary-color" />
          </div>
        </div>
      </div>
      {/* {
        isOpenHamburger && (
          <div
            className="font-quintessential text-primary-color fixed w-[300px] h-screen bg-black-rgba-07 top-[0]  flex justify-center items-center flex-col z-[10] font-bold text-[20px] right-0 duration-[500ms] animate-fade-in-right-to-left "
            onClick={(e) => {
              e.stopPropagation()
            }}
          >
            <button
              className="w-[50px] h-[50px] absolute top-[12px] left-[12px] opacity-[1] z-[20] cursor-pointer flex justify-center items-center"
              onClick={() => setIsOpenHamburger(false)}
            >
              <VscChromeClose className="w-full h-full text-primary-color relative z-[25] hover:rotate-90 hover:duration-300" />
            </button>
            <li className="leading-[40px] list-none">
              <a href="">Trang Chủ</a>
            </li>
            <li className="leading-[40px] list-none">
              <a href="">Về Chúng Tôi</a>
            </li>
            <li className="leading-[40px] list-none">
              <a href="">Hệ Thống Cửa Hàng</a>
            </li>
            <li className="leading-[40px] list-none">
              <a href="">Hình Ảnh</a>
            </li>
            <li className="leading-[40px] list-none">
              <a href="">Tin Tức</a>
            </li>
            <li className="leading-[40px] list-none">
              <a href="">Liên Hệ</a>
            </li>
          </div>
        )
      } */}
      {
        isOpenHamburger && (
          <div
            className="font-quintessential text-primary-color fixed w-[300px] h-screen bg-black-rgba-07 top-[0]  flex justify-center items-center flex-col z-[10] font-bold text-[20px] right-0 duration-[500ms] animate-fade-in-right-to-left "
            onClick={(e) => {
              e.stopPropagation()
            }}
          >
            <button
              className="w-[50px] h-[50px] absolute top-[12px] left-[12px] opacity-[1] z-[20] cursor-pointer flex justify-center items-center"
              onClick={() => setIsOpenHamburger(false)}
            >
              <VscChromeClose className="w-full h-full text-primary-color relative z-[25] hover:rotate-90 hover:duration-300" />
            </button>
            <Link to="/" className="leading-[40px] list-none hover:text-white">
              <a href=".">Home</a>
            </Link>
            <Link to="/coffee" className="leading-[40px] list-none hover:text-white">
              <a href="">Coffee</a>
            </Link>
            <li className="leading-[40px] list-none hover:text-white">
              <a href="">Hệ Thống Cửa Hàng</a>
            </li>
            <li className="leading-[40px] list-none hover:text-white">
              <a href="">Hình Ảnh</a>
            </li>
            <li className="leading-[40px] list-none hover:text-white">
              <a href="">Tin Tức</a>
            </li>
            <li className="leading-[40px] list-none hover:text-white">
              <a href="">Liên Hệ</a>
            </li>
          </div>
        )
      }
    </div>
  )
}
export default Header