import React, { useContext } from 'react'
import Menu from './Menu'
import InitContext from '../store/InitContext'
import { Link } from "react-router-dom";
function MenuList({ menuList }) {
  const init = useContext(InitContext)
  return (
    <div className="row pt-[100px] block lg:flex">
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
          <ul className="">
            <li>
              <a className="text-black-rgba-06 pl-[26px] pb-[8px] leading-[22px]" href="">Tất Cả</a>
            </li>
            <li>
              <a className="text-black-rgba-06 pl-[26px] pb-[8px] leading-[22px]" href="">Cà Phê</a>
              <ul>
                <li>
                  <a className="sliderbar-menu-a text-black-rgba-06 pl-[42px] relative pb-[8px] leading-[22px]" href="">Cà Phê Việt Nam</a>
                </li>
                <li>
                  <a className="sliderbar-menu-a text-black-rgba-06 pl-[42px] relative pb-[8px] leading-[22px]" href="">Cà Phê Máy</a>
                </li>
                <li>
                  <a className="sliderbar-menu-a text-black-rgba-06 pl-[42px] relative pb-[8px] leading-[22px]" href="">Cold Brew</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="text-black-rgba-06 pl-[26px] pb-[8px] leading-[22px]" href="">Trà</a>
              <ul>
                <li>
                  <a className="sliderbar-menu-a text-black-rgba-06 pl-[42px] relative pb-[8px] leading-[22px]" href="">Trà Trái Cây</a>
                </li>
                <li>
                  <a className="sliderbar-menu-a text-black-rgba-06 pl-[42px] relative pb-[8px] leading-[22px]" href="">Trà Sữa Macchiato</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="text-black-rgba-06 pl-[26px] pb-[8px] leading-[22px]" href="">Bánh & Snack</a>
              <ul>
                <li>
                  <a className="sliderbar-menu-a text-black-rgba-06 pl-[42px] relative pb-[8px] leading-[22px]" href="">Bánh Mặn</a>
                </li>
                <li>
                  <a className="sliderbar-menu-a text-black-rgba-06 pl-[42px] relative pb-[8px] leading-[22px]" href="">Bánh Ngọt</a>
                </li>
                <li>
                  <a className="sliderbar-menu-a text-black-rgba-06 pl-[42px] relative pb-[8px] leading-[22px]" href="">Snack</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="text-black-rgba-06 pl-[26px] pb-[8px] leading-[22px]" href="">Món Khác</a>
              <ul>
                <li>
                  <a className="sliderbar-menu-a text-black-rgba-06 pl-[42px] relative pb-[8px] leading-[22px]" href="">Đá Xay</a>
                </li>
                <li>
                  <a className="sliderbar-menu-a text-black-rgba-06 pl-[42px] relative pb-[8px] leading-[22px]" href="">Matcha - Sô cô la</a>
                </li>
              </ul>
            </li>
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