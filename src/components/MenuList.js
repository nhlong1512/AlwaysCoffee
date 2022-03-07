import React, { useContext } from 'react'
import Menu from './Menu'
import InitContext from '../store/InitContext'
import { Link } from "react-router-dom";
function MenuList({ menuList }) {
  const init = useContext(InitContext)
  return (
    <div className ="row">
      <div className="flex justify-start text-[20px] mb-[24px] mx-[18px] font-semibold text-black">
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
      <div className="flex flex-col md:flex-row flex-wrap mb-[24px]">
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