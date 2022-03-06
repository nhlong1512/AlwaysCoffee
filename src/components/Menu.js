import React, {useContext} from 'react'
import InitContext from '../store/InitContext'
import { Link } from "react-router-dom"
function Menu({menu}) {
  const init = useContext(InitContext)
  return (
    <Link to ="/menuChildren" className="food-items text-white flex justify-between flex-col md:flex-row items-center md:w-[50%] px-[15px] py-[20px] relative before:content-[''] before:block before:absolute before:left-[15px] before:right-[15px] before:bottom-0 before:border-[0.5px] before:border-white-rgba-05 before:border-solid hover:cursor-pointer "
    onClick={() =>init.handleClickMenuChildren(menu.id)}
    >
      <div className="food-item flex flex-col md:flex-row items-center">
        <img src={menu.image} alt={menu.name} className="md:w-[150px] md:mr-[25px] md:max-h-[80px] rounded-[10px] mb-[8px] md:mb-[0]"/>
        <p className="text-[20px] mb-[8px] md:mb-[0] hover:text-primary-color">{menu.name}</p>
      </div>
      <div className="food-price text-[20px]">
        <p>{menu.price} VND</p>
      </div>
    </Link>
  )
}
export default Menu