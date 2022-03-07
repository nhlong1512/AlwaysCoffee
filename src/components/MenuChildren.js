import React, { useContext } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import './Home.css'
import InitContext from '../store/InitContext'
import { BiCoffeeTogo } from "react-icons/bi";
import { RiEBike2Line } from "react-icons/ri";
function MenuChildren() {
  const init = useContext(InitContext)
  return (

    <div className="flex flex-col justify-center items-center">
      <div className="flex row flex-row justify-start text-[20px] mt-[24px] font-semibold w-100pt-24">
        <Link to="/menu" className="hover:text-primary-color cursor-pointer"
        >
          Menu
        </Link>
        <span> &nbsp;/ &nbsp;</span>
        <Link
          to={init.menuChildren[0].type === 'Cà Phê' ? '/coffee' :(init.menuChildren[0].type === 'Trà' ? '/tea' : (init.menuChildren[0].type === 'Bánh & Snack' ? '/cakeAndSnack' : (init.menuChildren[0].type === 'Các Món Khác' ? '/another' : '/'))) } className="hover:text-primary-color cursor-pointer"
        >
          {init.menuChildren[0].type}
        </Link>
        <span>&nbsp;/ &nbsp;</span>
        <h1 className="text-primary-color" >{init.menuChildren[0].name}</h1>
      </div>


      <div className="flex row my-[24px] justify-center w-100pt-24">
        <div className="grow-0 shrink-0 basis-[50%] pr-[12px] ml-[24px]">
          <img src={init.menuChildren[0].image} alt="{init.menuChildren[0].name}" className="rounded-[4px]" />
        </div>
        <div className="grow-0 shrink-0 basis-[50%] pr-[24px] ml-[12px]">
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
          <div className="flex">
            <button className="mt-[24px] flex justify-center items-center bg-[#e57905] text-white font-semibold text-[16px] rounded-[12px] py-[12px] flex-col-100">
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