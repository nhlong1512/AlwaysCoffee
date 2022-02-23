import React from 'react';
import Menu from './Menu'
function MenuList({menuList}) {
  return (
    <div className="row flex flex-wrap mb-[24px]">
      {menuList.map(menu => (
        <Menu
          key = {menu.id}
          menu = {menu}
        />
      ))}
    </div>
  )
}
export default MenuList