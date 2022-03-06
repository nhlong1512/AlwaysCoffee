import React, { useContext } from 'react'
import './Home.css'
import { Link } from "react-router-dom"
import { VscChromeClose, VscThreeBars} from "react-icons/vsc"
import Logo from '../img/LogoAlways.png'
import { IoCartOutline } from "react-icons/io5"
import InitContext from '../store/InitContext'
function Header() {
  const init = useContext(InitContext)
  const handleClickHamburger = (e) => {
    init.setIsOpenHamburger(!init.isOpenHamburger)
    e.stopPropagation()
  }
  return (
    <div className="pb-[74px]"
      onClick={() => init.setIsOpenHamburger(false)}
    >
      <div className="fixed z-[10] bg-main-color top-[0] left-[0] w-screen ">
        <div className="max-w-[1200px] flex items-center justify-between px-[24px] py-[12px] mx-auto">
          <div className="w-[50px] h-[50px] opacity-[1] z-[1] cursor-pointer flex justify-center items-center "
            onClick={handleClickHamburger}
          >
            <VscThreeBars className="w-full h-full text-primary-color" />
          </div>
          <Link to="/" className="">
            <a href=""><img src={Logo} alt="LogoAlways" className="h-[44px]" /></a>
          </Link>
          <div className="w-[50px] h-[50px] opacity-[1] z-[1] cursor-pointer flex justify-center items-center">
            <IoCartOutline className="w-full h-full text-primary-color" />
          </div>
        </div>
      </div>
      {
        init.isOpenHamburger && (
          <div
            className="font-quintessential text-primary-color fixed w-[300px] h-screen bg-black-rgba-07 top-[0]  flex justify-center items-center flex-col z-[10] font-bold text-[20px] right-0 duration-[500ms] animate-fade-in-right-to-left "
            onClick={(e) => {
              e.stopPropagation()
            }}
          >
            <button
              className="w-[50px] h-[50px] absolute top-[12px] left-[12px] opacity-[1] z-[20] cursor-pointer flex justify-center items-center"
              onClick={() => init.setIsOpenHamburger(false)}
            >
              <VscChromeClose className="w-full h-full text-primary-color relative z-[25] hover:rotate-90 hover:duration-300" />
            </button>
            <Link to="/" className="leading-[40px] list-none hover:text-white">
              <a href=".">Trang Chủ</a>
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
            <Link to ="/" className="leading-[40px] list-none hover:text-white">
              <a href="">Always Chuyện</a>
            </Link>
            <Link to ="/" className="leading-[40px] list-none hover:text-white">
              <a href="">Tin Tức</a>
            </Link>
            <Link to ="/" className="leading-[40px] list-none hover:text-white">
              <a href="">Liên Hệ</a>
            </Link>
          </div>
        )
      }
    </div>
  )
}
export default Header