import React from 'react'
function Menu({menu}) {
  return (
    <div className="food-items text-white flex justify-between flex-col md:flex-row items-center md:w-[50%] px-[15px] py-[20px] relative before:content-[''] before:block before:absolute before:left-[15px] before:right-[15px] before:bottom-0 before:border-[0.5px] before:border-white-rgba-05 before:border-solid hover:cursor-pointer hover:text-primary-color">
      <div className="food-item flex flex-col md:flex-row items-center">
        <img src={menu.image} alt={menu.name} className="md:w-[150px] md:mr-[25px] md:max-h-[80px] rounded-[10px] mb-[8px] md:mb-[0]"/>
        <p className="text-[20px] mb-[8px] md:mb-[0]">{menu.name}</p>
      </div>
      <div className="food-price text-[20px]">
        <p>{menu.price} VND</p>
      </div>
    </div>
  )
}
export default Menu