import React, { useContext } from 'react'
import Menu from './Menu'
import InitContext from '../store/InitContext'
import { Link } from "react-router-dom";
function MenuList({ menuList }) {
  const init = useContext(InitContext)
  return (
    <div>
      <div className="flex row flex-row justify-start text-[20px] mt-[24px] font-semibold w-100pt-24 text-white">
        <Link to="/menu" className="hover:text-primary-color cursor-pointer"
        >
          Menu&nbsp;
        </Link>

        <h1
          className="text-primary-color cursor-pointer"
        >
          <span className="text-white"> {init.menuList.length > 7 ? '' : '/'}</span>
          &nbsp;
          {init.menuList.length > 7 ? '' : init.menuList[0].type}
        </h1>
      </div>
      <div className="row flex flex-col md:flex-row flex-wrap mb-[24px]">
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