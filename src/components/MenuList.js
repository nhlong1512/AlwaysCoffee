import React, { useContext } from 'react'
import Menu from './Menu'
import InitContext from '../store/InitContext'
import { Link } from "react-router-dom";
function MenuList({ menuList }) {
  const init = useContext(InitContext)
  return (
    <div className="row pt-[80px] lg:pt-[120px] block lg:flex">
      <div className="flex justify-start text-[20px] mb-[24px] mx-[18px] font-semibold text-black lg:hidden">
        {init.menuList[0].type === init.menuList[7].type &&
          (<div className="flex">
            <Link to="/menu" className="hover:text-primary-color cursor-pointer"
            >
              Menu&nbsp;
            </Link>

            <h1
              className="text-primary-color cursor-pointer"
            >
              <span className="text-black"> {init.menuList.length > 20 ? '' : '/'}</span>
              &nbsp;
              {init.menuList.length > 20 ? '' : init.menuList[0].type}
            </h1>
          </div>
          )
        }
      </div>
      <div className="w-[20%] hidden pr-[36px] border-r-custom lg:flex">
        <div className="sliderbar-menu">
          <ul className="flex flex-col">
            <Link to ="/menu">
              <a className="text-black-rgba-06 pl-[26px] pb-[8px] leading-[22px] hover:text-primary-color" href="">Tất Cả</a>
            </Link>
            <Link to ="/coffee">
              <a className="text-black-rgba-06 pl-[26px] pb-[8px] leading-[22px] hover:text-primary-color" href="">Cà Phê</a>
              <ul>
                <li>
                  <a className="sliderbar-menu-a text-black-rgba-06 pl-[42px] relative pb-[8px] leading-[22px] hover:text-primary-color" href="">Cà Phê Việt Nam</a>
                </li>
                <li>
                  <a className="sliderbar-menu-a text-black-rgba-06 pl-[42px] relative pb-[8px] leading-[22px] hover:text-primary-color" href="">Cà Phê Máy</a>
                </li>
                <li>
                  <a className="sliderbar-menu-a text-black-rgba-06 pl-[42px] relative pb-[8px] leading-[22px] hover:text-primary-color" href="">Cold Brew</a>
                </li>
              </ul>
            </Link>
            <Link to="/tea">
              <a className="text-black-rgba-06 pl-[26px] pb-[8px] leading-[22px] hover:text-primary-color" href="">Trà</a>
              <ul>
                <li>
                  <a className="sliderbar-menu-a text-black-rgba-06 pl-[42px] relative pb-[8px] leading-[22px] hover:text-primary-color" href="">Trà Trái Cây</a>
                </li>
                <li>
                  <a className="sliderbar-menu-a text-black-rgba-06 pl-[42px] relative pb-[8px] leading-[22px] hover:text-primary-color" href="">Trà Sữa Macchiato</a>
                </li>
              </ul>
            </Link>
            <Link to = "/cakeAndSnack">
              <a className="text-black-rgba-06 pl-[26px] pb-[8px] leading-[22px] hover:text-primary-color" href="">Bánh & Snack</a>
              <ul>
                <li>
                  <a className="sliderbar-menu-a text-black-rgba-06 pl-[42px] relative pb-[8px] leading-[22px] hover:text-primary-color" href="">Bánh Mặn</a>
                </li>
                <li>
                  <a className="sliderbar-menu-a text-black-rgba-06 pl-[42px] relative pb-[8px] leading-[22px] hover:text-primary-color" href="">Bánh Ngọt</a>
                </li>
                <li>
                  <a className="sliderbar-menu-a text-black-rgba-06 pl-[42px] relative pb-[8px] leading-[22px] hover:text-primary-color" href="">Snack</a>
                </li>
              </ul>
            </Link>
            <Link to ="/another">
              <a className="text-black-rgba-06 pl-[26px] pb-[8px] leading-[22px] hover:text-primary-color" href="">Món Khác</a>
              <ul>
                <li>
                  <a className="sliderbar-menu-a text-black-rgba-06 pl-[42px] relative pb-[8px] leading-[22px] hover:text-primary-color" href="">Đá Xay</a>
                </li>
                <li>
                  <a className="sliderbar-menu-a text-black-rgba-06 pl-[42px] relative pb-[8px] leading-[22px] hover:text-primary-color" href="">Matcha - Sô cô la</a>
                </li>
              </ul>
            </Link>
          </ul>
        </div>
      </div>
      <div className="lg:w-[80%] flex flex-col md:flex-row flex-wrap mb-[24px] lg:pl-[36px] ">
        {menuList.map(menu => (
          <Menu
            key={menu.id}
            menu={menu}
          />
        ))}
      </div>
    </div>
  )
}
export default MenuList