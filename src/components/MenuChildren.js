import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import './Home.css'
import InitContext from '../store/InitContext'
import { BiCoffeeTogo } from "react-icons/bi";
import { RiEBike2Line } from "react-icons/ri";
import { FaStore } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoStorefrontOutline } from "react-icons/io5";


function MenuChildren() {
  const init = useContext(InitContext)
  const handleClickBtn1 = () => {
    document.querySelector('.btn1').classList.add('active-btn')
    document.querySelector('.btn2').classList.remove('active-btn')
    document.querySelector('.btn3').classList.remove('active-btn')
  }
  const handleClickBtn2 = () => {
    document.querySelector('.btn1').classList.remove('active-btn')
    document.querySelector('.btn2').classList.add('active-btn')
    document.querySelector('.btn3').classList.remove('active-btn')
  }
  const handleClickBtn3 = () => {
    document.querySelector('.btn1').classList.remove('active-btn')
    document.querySelector('.btn2').classList.remove('active-btn')
    document.querySelector('.btn3').classList.add('active-btn')
  }
  const handleClickBtn4 = () => {
    document.querySelector('.btn4').classList.toggle('active-btn')
    document.querySelector('.btn5').classList.remove('active-btn')
  }
  const handleClickBtn5 = () => {
    document.querySelector('.btn4').classList.remove('active-btn')
    document.querySelector('.btn5').classList.toggle('active-btn')
  }
  return (
    <div className="flex flex-col justify-center items-center pt-[74px]">
      <div className="row w-100pt-48">
        <div className="flex text-[20px] mt-[26px] font-semibold md:w-100pt-48 flex-wrap leading-[36px]">
          <Link to="/menu" className="hover:text-primary-color cursor-pointer"
          >
            Menu
          </Link>
          <span> &nbsp;/ &nbsp;</span>
          <Link
            to={init.menuChildren[0].type === 'Cà Phê' ? '/coffee' : (init.menuChildren[0].type === 'Trà' ? '/tea' : (init.menuChildren[0].type === 'Bánh & Snack' ? '/cakeAndSnack' : (init.menuChildren[0].type === 'Các Món Khác' ? '/another' : '/')))} className="hover:text-primary-color cursor-pointer"
          >
            {init.menuChildren[0].type}
          </Link>
          <span>&nbsp;/ &nbsp;</span>
          <h1 className="text-primary-color" >{init.menuChildren[0].name}</h1>
        </div>
      </div>
      <div className="flex row my-[24px] justify-center w-100pt-48 flex-col md:flex-row">
        <div className="grow-0 shrink-0 basis-[50%] md:pr-[12px] mb-[16px] md:mb-0">
          <img src={init.menuChildren[0].image} alt="{init.menuChildren[0].name}" className="rounded-[4px] w-[100%]" />
        </div>
        <div className="grow-0 shrink-0 basis-[50%] md:ml-[12px]">
          <h1 className="text-[24px] font-semibold mb-[8px]">{init.menuChildren[0].name}</h1>
          <h2 className="text-[32px] text-[#e57905] font-semibold leading-[24px]">{init.menuChildren[0].price} đ</h2>
          <div>
            <p className="mb-[8px] mt-[24px] font-medium">Kích Thước</p>
            <div className="flex flex-col lg:flex-row">
              <button className="active-btn btn1 px-[24px] py-[12px] bg-white text-[#666] font-semibold rounded-[2px] text-[16px] flex flex-row leading-[16px] justify-center items-center border-[1px] border-[#bdb1ac] mr-0 lg:mr-[16px] mb-[12px] hover:bg-[#e57905] hover:text-white"
                onClick={handleClickBtn1}
              >
                <span className="text-[20px]">
                  <BiCoffeeTogo />
                </span>
                <p>&nbsp;Nhỏ</p>
              </button>
              <button className="btn2 px-[24px] py-[12px] bg-white text-[#666] hover:bg-[#e57905] hover:text-white font-semibold rounded-[2px] text-[16px] flex flex-row leading-[16px] justify-center items-center border-[1px] border-[#bdb1ac] mr-0 lg:mr-[16px] mb-[12px]"
                onClick={handleClickBtn2}
              >
                <span className="text-[20px]">
                  <BiCoffeeTogo />
                </span>
                <p>&nbsp;Vừa + 5.000 đ</p>
              </button>
              <button className="btn3 px-[24px] py-[12px] bg-white text-[#666] font-semibold rounded-[2px] text-[16px] flex flex-row leading-[16px] justify-center items-center border-[1px] border-[#bdb1ac] mr-0 md:lg-[16px] mb-[12px] hover:bg-[#e57905] hover:text-white"
                onClick={handleClickBtn3}
              >
                <span className="text-[20px]">
                  <BiCoffeeTogo />
                </span>
                <p>&nbsp;Lớn + 10.000 đ</p>
              </button>
            </div>
          </div>
          <div>
            <p className="mb-[8px] mt-[12px] font-medium">Topping</p>
            <div className="flex flex-col lg:flex-row">
              <button className="btn4 px-[24px] py-[12px] bg-white text-[#666] font-semibold rounded-[2px] text-[16px] flex flex-row leading-[16px] justify-center items-center border-[1px] border-[#bdb1ac] mr-0 lg:mr-[16px] mb-[12px] hover:bg-[#e57905] hover:text-white"
                onClick={handleClickBtn4}
              >
                <p>&nbsp;Espresso + 10.000đ</p>
              </button>
              <button className="btn5 px-[24px] py-[12px] bg-white text-[#666] font-semibold rounded-[2px] text-[16px] flex flex-row leading-[16px] justify-center items-center border-[1px] border-[#bdb1ac] mr-0 lg:mr-[16px] mb-[12px] hover:bg-[#e57905] hover:text-white"
                onClick={handleClickBtn5}
              >
                <p>&nbsp;Extra foam + 10.000đ</p>
              </button>
            </div>
          </div>
          <div className="flex">
            <button 
            className="mt-[12px] flex justify-center items-center bg-[#e57905] text-white font-semibold text-[16px] rounded-[12px] py-[12px] flex-col-100 box-shadow-custom hover:opacity-[0.8]"
            onClick = {() => init.onAdd(init.menuChildren[0])}
            >
              <span className="text-[24px]">
                <RiEBike2Line />
              </span>
              <p>
                &nbsp;Đặt Giao Tận Nơi
              </p>
            </button>
          </div>
          <div className="w-[100%] flex justify-center items-center">
            <div className="btn-buy flex gap-[24px] flex-col w-[100%] md:flex-row mt-[24px] justify-center">
              <button className="flex justify-center items-center bg-[#fff7e6] text-[#e57905] font-semibold text-[16px] rounded-[12px] py-[12px] flex-col-50 box-shadow-custom hover:opacity-[0.7]">
                <span className="text-[24px]">
                  <IoStorefrontOutline />
                </span>
                <p>
                  &nbsp;Mua Tại Cửa Hàng
                </p>
              </button>
              <button className="flex justify-center items-center bg-[#fff7e6] text-[#e57905] font-semibold text-[16px] rounded-[12px] py-[12px] flex-col-50 box-shadow-custom hover:opacity-[0.7]">
                <span className="text-[24px]">
                  <IoIosPhonePortrait />
                </span>
                <p>
                  &nbsp;Mua Mang Đi
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row flex gap-[24px] my-[36px] justify-between flex-col md:flex-row">
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