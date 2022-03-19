import React, { useContext } from 'react'
import './Home.css'
import { Link } from "react-router-dom"
import { VscChromeClose, VscThreeBars } from "react-icons/vsc"
import Logo from '../img/LogoAlwaysEdit4.png'
import { IoCartOutline, IoCaretDownOutline } from "react-icons/io5"
import InitContext from '../store/InitContext'
function Header() {
  const init = useContext(InitContext)
  const handleClickHamburger = (e) => {
    init.setIsOpenHamburger(!init.isOpenHamburger)
    e.stopPropagation()
  }
  return (
    <div className=""
      onClick={() => init.setIsOpenHamburger(false)}
    >
      <div className="fixed z-[10] bg-white-rgba-09 top-[0] left-[0] w-screen border-b-custom">
        <div className="max-w-[1200px] flex items-center justify-between px-[24px] mx-auto">
          <div className="navbar-tablet-mobile w-[50px] h-[50px] opacity-[1] z-[1] cursor-pointer flex justify-center items-center "
            onClick={handleClickHamburger}
          >
            <VscThreeBars className="w-full h-full text-primary-color" />
          </div>
          <Link to="/" className="">
            <a href=""><img src={Logo} alt="LogoAlways" className="h-[44px]" /></a>
          </Link>
          <div className="navbar-pc hidden">
            <ul className="flex justify-between items-center font-semibold text-[18px] ">
              <Link to="/" className="px-[12px] hover:text-primary-color py-[25px]">
                <a href="">Trang Chủ</a>
              </Link>
              <Link to="/menu" className="menu-navbar px-[12px] hover:text-primary-color flex items-center py-[25px]">
                <div className="flex items-center leading-[24px]">
                  <a className="after-menu" href="">Menu</a>
                  <span className="text-[10px] pt-[4px] pl-[4px]" ><IoCaretDownOutline /></span>
                </div>
                <ul className="menu-navbar-hover-list hidden">
                  <li to ="/menu" className="menu-navbar-li">
                    <a className="menu-navbar-a" href="">Tất Cả</a>
                  </li>
                  <Link to="/coffee" className="menu-navbar-li">
                    <a className="menu-navbar-a" href="">Cà Phê</a>
                    <ul>
                      <li className="">
                        <a className="navbar-a-child" href="">Cà Phê Việt Nam</a>
                      </li>
                      <li>
                        <a className="navbar-a-child" href="">Cà Phê Máy</a>
                      </li>
                      <li>
                        <a className="navbar-a-child" href="">Cold Brew</a>
                      </li>
                    </ul>
                  </Link>
                  <Link to = "/tea" className="menu-navbar-li">
                    <a className="menu-navbar-a" href="">Trà</a>
                    <ul>
                      <li>
                        <a className="navbar-a-child" href="">Trà Trái Cây</a>
                      </li>
                      <li>
                        <a className="navbar-a-child" href="">Trà Sữa Macchiato</a>
                      </li>
                    </ul>
                  </Link>
                  <Link to ='/cakeAndSnack' className="menu-navbar-li">
                    <a className="menu-navbar-a" href="">Bánh & Snack</a>
                    <ul>
                      <li>
                        <a className="navbar-a-child" href="">Bánh Mặn</a>
                      </li>
                      <li>
                        <a className="navbar-a-child" href="">Bánh Ngọt</a>
                      </li>
                      <li>
                        <a className="navbar-a-child" href="">Snack</a>
                      </li>
                    </ul>
                  </Link>
                  <Link to="/another" className="menu-navbar-li">
                    <a className="menu-navbar-a" href="">Món Khác</a>
                    <ul>
                      <li>
                        <a className="navbar-a-child" href="">Đá Xay</a>
                      </li>
                      <li>
                        <a className="navbar-a-child" href="">Matcha - Sô cô la</a>
                      </li>
                    </ul>
                  </Link>
                </ul>
              </Link>
              <Link to="/" className="menu-navbar px-[12px] hover:text-primary-color flex items-center py-[25px]">
                <div className="flex items-center leading-[24px]">
                  <a className="after-always-story" href="">Always Chuyện</a>
                  <span className="text-[10px] pt-[4px] pl-[4px]" ><IoCaretDownOutline /></span>
                </div>
                <ul className="menu-navbar-hover-list hidden">
                  <li className="menu-navbar-li">
                    <a className="menu-navbar-a" href="">Coffeeholic</a>
                    <ul>
                      <li className="">
                        <a className="navbar-a-child" href="">#chuyencaphe</a>
                      </li>
                      <li>
                        <a className="navbar-a-child" href="">#phacaphe</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-navbar-li">
                    <a className="menu-navbar-a" href="">Teaholic</a>
                    <ul>
                      <li>
                        <a className="navbar-a-child" href="">#cauchuyenvetra</a>
                      </li>
                      <li>
                        <a className="navbar-a-child" href="">#phatra</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-navbar-li">
                    <a className="menu-navbar-a" href="">Blog</a>
                    <ul>
                      <li>
                        <a className="navbar-a-child" href="">#inthemood</a>
                      </li>
                      <li>
                        <a className="navbar-a-child" href="">#review</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </Link>
              <Link to="/" className="px-[12px] hover:text-primary-color py-[25px]">
                <a href="">Tin Tức</a>
              </Link>
              <Link to="/" className="px-[12px] hover:text-primary-color py-[25px]">
                <a href="">Liên Hệ</a>
              </Link>
            </ul>
          </div>
          <div className="w-[50px] h-[50px] opacity-[1] z-[1] cursor-pointer flex justify-center items-center">
            <IoCartOutline className="w-full h-full text-primary-color" />
          </div>
        </div>
      </div>
      {
        init.isOpenHamburger && (
          <div
            className="font-quintessential text-primary-color fixed w-[300px] h-screen bg-black-rgba-07 top-[0]  flex justify-center items-center flex-col z-[10] font-bold text-[20px] left-0 duration-[500ms] animate-fade-in-left-to-right"
            onClick={(e) => {
              e.stopPropagation()
            }}
          >
            <button
              className="w-[50px] h-[50px] absolute top-[12px] right-[12px] opacity-[1] z-[20] cursor-pointer flex justify-center items-center"
              onClick={() => init.setIsOpenHamburger(false)}
            >
              <VscChromeClose className="w-full h-full text-primary-color relative z-[25] hover:rotate-90 hover:duration-300" />
            </button>
            <Link to="/" className="leading-[40px] list-none hover:text-white">
              <a href="">Trang Chủ</a>
            </Link>
            <Link to="/menu" className="leading-[40px] list-none hover:text-white">
              <a href="">Menu</a>
            </Link>
            <Link to="/coffee" className="leading-[40px] list-none hover:text-white">
              <a href="">Cà Phê</a>
            </Link>
            <Link to="/tea" className="leading-[40px] list-none hover:text-white">
              <a href="">Trà</a>
            </Link>
            <Link to="/cakeAndSnack" className="leading-[40px] list-none hover:text-white">
              <a href="">Bánh & Snack</a>
            </Link>
            <Link to="/another" className="leading-[40px] list-none hover:text-white">
              <a href="">Món Khác</a>
            </Link>
            <Link to="/" className="leading-[40px] list-none hover:text-white">
              <a href="">Always Chuyện</a>
            </Link>
            <Link to="/" className="leading-[40px] list-none hover:text-white">
              <a href="">Tin Tức</a>
            </Link>
            <Link to="/" className="leading-[40px] list-none hover:text-white">
              <a href="">Liên Hệ</a>
            </Link>
          </div>
        )
      }
    </div>
  )
}
export default Header