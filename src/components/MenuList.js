import React, { useContext } from 'react'
import Menu from './Menu'
import InitContext from '../store/InitContext'
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
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
            {init.navItems.map((navItem) => (
              <Link to={navItem.link}
                key={navItem.id}
                onClick={() => init.setActiveId(navItem.id)}
              >
                {init.activeId === navItem.id ? (
                  <a className="pl-[26px] pb-[8px] leading-[22px] text-primary-color"
                  >
                    {navItem.content}
                  </a>
                ) : (
                  <a className="text-black-rgba-06 pl-[26px] pb-[8px] leading-[22px] hover:text-primary-color"
                  >
                    {navItem.content}
                  </a>
                )}
                <ul>
                  {navItem.contentItems.map((contentItem) => (
                    <li
                      key={uuidv4()}
                    >
                      <a className="sliderbar-menu-a text-black-rgba-06 pl-[42px] relative pb-[8px] leading-[22px] hover:text-primary-color" href="">{contentItem}</a>
                    </li>
                  ))
                  }
                </ul>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className="lg:w-[80%] flex flex-col md:flex-row flex-wrap mb-[24px] lg:pl-[36px] ">
        <div className="coffee-banner mx-[8px] mb-[40px] md:mx-[15px]">
          <img className="" src="https://t4.ftcdn.net/jpg/02/34/63/15/360_F_234631554_fFopmou1B5oeEIeFZZUWLPjfXupNG5am.jpg" alt="" />
        </div>
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