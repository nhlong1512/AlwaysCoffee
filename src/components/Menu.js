import React from 'react'
function Menu({menu}) {
  return (
    <div className="food-items text-white flex justify-between items-center w-[50%] px-[15px] py-[20px] relative before:content-[''] before:block before:absolute before:left-[15px] before:right-[15px] before:bottom-0 before:border-[0.5px] before:border-white-rgba-05 before:border-solid hover:cursor-pointer hover:text-primary-color">
      <div className="food-item flex items-center">
        <img src={menu.image} alt={menu.name} className="w-[150px] mr-[25px] max-h-[80px] rounded-[10px]" />
        <p className="text-[20px]">{menu.name}</p>
      </div>
      <div className="food-price text-[20px]">
        <p>{menu.price} VND</p>
      </div>
    </div>
  )
}
export default Menu