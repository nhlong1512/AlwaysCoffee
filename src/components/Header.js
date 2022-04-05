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
          <div className="navbar-tablet-mobile w-[64px] h-[64px] opacity-[1] z-[1] cursor-pointer flex justify-center items-center "
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
              <Link
                to="/menu"
                className="menu-navbar px-[12px] hover:text-primary-color flex items-center py-[25px]"
              >
                <div className="flex items-center leading-[24px]">
                  <a
                    className="after-menu"
                    onClick={() => init.setActiveId(0)}
                  >
                    Menu
                  </a>
                  <span className="text-[10px] pt-[4px] pl-[4px]" ><IoCaretDownOutline /></span>
                </div>
                <ul className="fadeIn03 menu-navbar-hover-list hidden">
                  {init.navItems.map((navItem) => (
                    <Link to={navItem.link}
                      className="menu-navbar-li"
                      key={navItem.id}
                      onClick={() => init.setActiveId(navItem.id)}
                    >
                      <a className="menu-navbar-a">{navItem.content}</a>
                      <ul>
                        {navItem.contentItems.map((contentItem => (
                          <li
                            key={contentItem.id}
                          >
                            <a className="navbar-a-child">{contentItem}</a>
                          </li>
                        )))}
                      </ul>
                    </Link>
                  ))}
                </ul>
              </Link>
              <Link to="/" className="menu-navbar px-[12px] hover:text-primary-color flex items-center py-[25px]">
                <div className="flex items-center leading-[24px]">
                  <a className="after-always-story" href="">Always Chuyện</a>
                  <span className="text-[10px] pt-[4px] pl-[4px]" ><IoCaretDownOutline /></span>
                </div>
                <ul className="fadeIn03 menu-navbar-hover-list hidden">
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
          <div className="header-cart relative">
            <Link to="/cartDetail" className="w-[50px] h-[50px] opacity-[1] z-[1] cursor-pointer flex justify-center items-center">
              <IoCartOutline className="w-full h-full text-primary-color" />
            </Link>
            <div className="top_menu_unseen">
              {init.cartItems.length}
            </div>
            <div className="header-cart-list hidden">
              {init.cartItems.length === 0 && (
                <div className="w-[100%] flex justify-center items-center flex-col">
                  <img 
                  src="https://freepikpsd.com/file/2019/10/empty-cart-png-Transparent-Images.png" 
                  alt="Empty Cart" 
                  className = "p-[24px] pb-[0]"/>
                  <h2 className="text-[24px] mt-[8px] mb-[24px] mx-auto">Chưa Có Sản Phẩm Nào</h2>
                </div>
              )}
              {init.cartItems.length !== 0 && (
                <div className="text-[#333]">
                  <div className="my-[8px] text-[16px] ml-[12px] mr-[8px] font-semibold">
                    GIỎ HÀNG ({init.cartItems.length} sản phẩm)
                  </div>
                  <div className="border-product"></div>
                  <ul className="list-none max-h-[50vh] overflow-y-auto mt-[4px]">
                    {init.cartItems.map((item) => (
                      <Link to ="/menuChildren"
                        key={item.id}
                        className="flex items-center"
                        onClick={() =>init.handleClickMenuChildren(item.id)}
                      >
                        <img src={item.image} alt={item.name} className="header-cart-img" />
                        <div className="w-[100%] mr-[12px]">
                          <div className="flex items-start justify-center flex-col">
                            <h2 className="header-cart-name">{item.name}</h2>
                            <div className="flex items-center justify-center">
                              <h2 className="text-[14px] font-medium text-primary-color ">{item.price.toLocaleString()} đ</h2>
                              <h2 className="text-[9px] text-[#333] mx-[4px]">x</h2>
                              <h2 className="text-[12px] text-[#333]">{item.qty}</h2>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </ul>
                  <div className="p-[16px] flex justify-between items-center">
                    <div className="flex flex-col">
                      <h2 className="text-[#333] text-[16px] font-semibold">Tổng cộng</h2>
                      <div className="text-primary-color">
                        <h2 className="font-semibold">{init.itemsPrice.toLocaleString()} đ</h2>
                      </div>
                    </div>
                    <Link to="/cartDetail" className="flex justify-center items-center bg-primary-color rounded-[8px] py-[8px] px-[20px] hover:opacity-[0.8]">
                      <span className="text-[16px] text-white font-semibold">
                        Xem Giỏ Hàng
                      </span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
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