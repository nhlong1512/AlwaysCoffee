import React from 'react';
import { useContext } from 'react';
import MenuList from './MenuList';
import InitContext from '../store/InitContext'


function Another() {
  const init = useContext(InitContext)
  init.setMenuList(init.another)
  return (
    <div className="bg-white lg:pb-[48px]"
      onClick={() => init.setIsOpenHamburger(false)}
    >
      <div className="flex flex-col justify-center items-center">
        <MenuList
          menuList={init.menuList}
        />
      </div>
    </div>
  )
}
export default Another;