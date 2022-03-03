import React from 'react'
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube } from "react-icons/io5"
import { FaRegCopyright } from "react-icons/fa"
import { useState, useEffect, useContext } from 'react';
import InitContext from '../store/InitContext'
function Footer() {
  const init = useContext(InitContext)
  return (
    <div className="footer bg-[url('https://images.unsplash.com/photo-1484659619207-9165d119dafe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] relative before:absolute before:w-full before:h-full before:content-[''] before:block before:bg-black-rgba-05 before:z-0 flex flex-col justify-center mx-auto"
      onClick={() => init.setIsOpenHamburger(false)}
    >
      <div className="footer-items flex justify-center items-center pt-[24px] md:pt-[36px] lg:pt-[80px] text-white z-[8]">
        <div className="footer-item text-center w-4/12">
          <h2 className="text-[24px] mb-[12px] text-primary-color">Địa Chỉ</h2>
          <p className="text-[18px] mb-[12px]">8B Hàng Tre<br /> Hoàn Kiếm, Hà Nội</p>
        </div>
        <div className="footer-item text-center w-4/12">
          <h2 className="text-[24px] mb-[12px] text-primary-color">Giờ Mở Cửa</h2>
          <p className="text-[18px] mb-[12px]">09:30 - 21:00<br /> Các Ngày Trong Tuần</p>
        </div>
        <div className="footer-item text-center w-4/12">
          <h2 className="text-[24px] mb-[12px] text-primary-color">Liên Hệ</h2>
          <p className="text-[18px] mb-[12px]">Phone: 0123456789<br /> Email: email@gm.com</p>
          <div className="flex justify-center mb-[12px] text-[20px] ">
            <IoLogoFacebook className="mx-[8px] cursor-pointer hover:text-primary-color" />
            <IoLogoInstagram className="mx-[8px] cursor-pointer hover:text-primary-color" />
            <IoLogoTwitter className="mx-[8px] cursor-pointer hover:text-primary-color" />
            <IoLogoYoutube className="mx-[8px] cursor-pointer hover:text-primary-color" />
          </div>
        </div>
      </div>
      <div className="text-white flex justify-center items-center pb-[16px] pt-[16px] lg:pt-[36px] z-[10]">
        <h1 className="flex md:text-[18px] text-center">
          Copyright &nbsp;
          <span className=""><FaRegCopyright /></span>
          &nbsp;2022,&nbsp;
          <span className="underline cursor-pointer">
            Always Coffee.
          </span>
          &nbsp;Powered by&nbsp;
          <span className="underline cursor-pointer">Nguyen Huu Long.</span>
        </h1>
      </div>
    </div>
  )
}
export default Footer