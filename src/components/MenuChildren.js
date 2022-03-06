import React, { useContext } from 'react'
import './Home.css'
import InitContext from '../store/InitContext'
import { BiCoffeeTogo } from "react-icons/bi";
import { RiEBike2Line } from "react-icons/ri";
function MenuChildren() {
  const init = useContext(InitContext)
  return (
    // <div className="food-items text-primary-color flex justify-between flex-col md:flex-row items-center px-[15px] py-[20px] relative before:content-[''] before:block before:absolute before:left-[15px] before:right-[15px] before:bottom-0 before:border-[0.5px] before:border-white-rgba-05 before:border-solid hover:cursor-pointer "
    // >
    //   <div className="food-item flex flex-col md:flex-row items-center">
    //     <img src={init.menuChildren[0].image} alt={init.menuChildren[0].name} className="md:w-[150px] md:mr-[25px] md:max-h-[80px] rounded-[10px] mb-[8px] md:mb-[0]"/>
    //     <p className="text-[20px] mb-[8px] md:mb-[0] hover:text-primary-color">{init.menuChildren[0].name}</p>
    //   </div>
    //   <div className="food-price text-[20px]">
    //     <p>{init.menuChildren[0].price} VND</p>
    //   </div>
    // </div>
    <div className="flex items-center flex-col ">
      <div className="row flex flex-row gap-[24px] my-[24px] justify-start">
        <div className="grow-0 shrink-0 basis-[50%]">
          <img src={init.menuChildren[0].image} alt="{init.menuChildren[0].name}" className="rounded-[4px]" />
        </div>
        <div className="grow-0 shrink-0 basis-[50%]">
          <h1 className="text-[24px] font-semibold mb-[4px]">{init.menuChildren[0].name}</h1>
          <h2 className="text-[24px] text-[#e57905] font-semibold leading-[24px]">{init.menuChildren[0].price} đ</h2>
          <div>
            <p className="mb-[8px] mt-[24px]">Kích Thước</p>
            <button className="px-[24px] py-[12px] bg-[#e57905] text-white font-semibold rounded-[2px] text-[16px] flex flex-row leading-[16px] justify-center items-center">
              <span className="text-[20px]">
                <BiCoffeeTogo />
              </span>
              <p>&nbsp;Vừa</p>
            </button>
          </div>
          <div className="w-[100%] flex">
            <button className="mt-[24px] flex justify-center items-center bg-[#e57905] text-white font-semibold text-[16px] rounded-[12px] px-[24px] py-[12px] flex-col-100">
              <span className="text-[24px]">
                <RiEBike2Line />
              </span>
              <p>
                &nbsp;Đặt Giao Tận Nơi
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className="row flex flex-row gap-[24px] my-[24px] justify-between">
        <div className="grow-0 shrink-0 basis-[30%]">
          <h1 className="text-[20px] font-semibold">Thông Tin</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim laudantium veniam, doloribus voluptatibus quasi, tempora in deleniti hic ipsa magnam eum porro eaque! Quaerat, iste. Nesciunt aspernatur nisi deleniti exercitationem!</p>
        </div>
        <div className="grow-0 shrink-0 basis-[50%]">
          <h1 className="text-[20px] font-semibold">Câu Chuyện</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis itaque nisi recusandae assumenda dolor tenetur expedita libero illum id enim quas voluptatum modi distinctio quod, autem accusantium deserunt, minima voluptatem?</p>
        </div>
      </div>
    </div>
  )

}
export default MenuChildren