import React, {useContext} from 'react'
import './Home.css'
import InitContext from '../store/InitContext'
import { Link } from "react-router-dom"
function Menu({menu}) {
  const init = useContext(InitContext)
  return (
    <Link to ="/menuChildren" 
    // className="text-white flex justify-between flex-col md:flex-row items-center md:w-[50%] px-[15px] py-[20px] relative before:content-[''] before:block before:absolute before:left-[15px] before:right-[15px] before:bottom-0 before:border-[0.5px] before:border-white-rgba-05 before:border-solid hover:cursor-pointer "
    //flex-col-50-16 mx-[8px] mb-[24px]
    className="menu text-black flex justify-between flex-col flex-col-50-16 mx-[8px] mb-[24px] min-h-[145px]"
    onClick={() =>init.handleClickMenuChildren(menu.id)}
    >
      <div className="flex flex-col items-center">
        <img src={menu.image} alt={menu.name} className="rounded-[10px] box-shadow-custom"/>
      </div>
      <p className="text-[16px] mb-[4px] mt-[12px] font-bold hover:text-primary-color">{menu.name}</p>
      <div className="text-[14px] mb-[10px]">
        <p>{menu.price} đ</p>
      </div>
    </Link>
  )
}
export default Menu