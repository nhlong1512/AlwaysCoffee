import React, { useContext } from 'react';
import './Home.css'
import { Link } from "react-router-dom"
import OurMenuList from './OurMenuList'
import InitContext from '../store/InitContext'
import { VscStarFull } from "react-icons/vsc"
function Home() {
  const init = useContext(InitContext)
  return (
    <div className=""
      onClick={() => init.setIsOpenHamburger(false)}
    >
      <div className="h-screen bg-[url('https://images.unsplash.com/photo-1587755922380-9151dd764ae1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-no-repeat bg-cover bg-center relative flex items-center justify-center before:absolute before:w-full before:h-full before:content-[''] before:block before:bg-black-rgba-03">
        <div className="absolute flex justify-center items-center text-center flex-col" >
          <h1 className="font-quintessential text-[50px] text-primary-color mb-[16px] mx-[24px]"
          >
            Always Coffee
          </h1>
          <h2 className="text-[36px] font-medium text-white mb-[24px] mx-[24px]">
            A Palate-altering Experience
          </h2>
          <button className="flex justify-center items-center box-border text-[24px] leading-[16px] px-[40px] py-[20px] text-primary-color bg-transparent rounded-[50px] font-semibold hover:bg-transparent duration-[300ms] border-[2px] border-primary-color border-solid hover:text-black hover:bg-primary-color"
          >
            SHOP NOW
          </button>
        </div>
      </div>
      <div className="about bg-main-color">
        <div className="flex justify-center items-center flex-col">
          <div className="row">
            <div>
              <h2 data-title="About Us" className="font-quintessential text-[50px] text-primary-color mt-[36px] mb-[24px] leading-[50px]">About Us</h2>
            </div>
          </div>
          <div className="row mb-[50px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] mb-[24px]">
              <div className="about-content">
                <h2 className="mb-[16px] text-[32px] text-black">Welcome Muggles To Always</h2>
                <p className="text-black text-[18px] mb-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam luctus lacus rhoncus ipsum consectetur facilisis nec sed nunc. Ut faucibus maximus pellentesque. Sed maximus nunc id iaculis interdum. Phasellus sed neque enim. Fusce sit amet sapien quis ex vehicula porta. Nullam molestie enim quam, ut bibendum odio iaculis ut. Proin tincidunt vehicula urna, nec bibendum velit aliquam quis. Vivamus vitae tellus urna. </p>
              </div>
              <div className="about-img">
                <div className="relative">
                  <span className="absolute top-[50%] left-[50%] text-primary-color text-[30px] translate-x-[-50%] translate-y-[-50%] italic">10+ Years Experience</span>
                  <img src="https://s24990.pcdn.co/wp-content/uploads/2020/02/Coffee-Shop-Business-1.jpg" alt="About Image" className="rounded-[16px]" />
                </div>
              </div>
            </div>
            <div className="mx-auto flex justify-center items-center">
              <button className="flex justify-center items-center box-border text-[24px] leading-[24px] px-[40px] py-[20px] text-primary-color bg-transparent rounded-[50px] font-semibold hover:bg-transparent duration-[300ms] border-[2px] border-primary-color border-solid hover:text-black hover:bg-primary-color"
              >
                DETAILS
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="flex flex-col justify-center items-center mb-[50px]">
          <div className="row">
            <div className="flex justify-center items-center">
              <h2 data-title="Order Now" className="font-quintessential text-[50px] text-primary-color mt-[36px] mb-[24px] leading-[50px]">Our Menu</h2>
            </div>
          </div>
          <OurMenuList
            className="bg-[#191F3A]"
            ourMenuList={init.ourMenu}
          />
          <Link to="/menu" className="flex">
            <button className="flex justify-center items-center box-border text-[24px] leading-[24px] px-[40px] py-[20px] text-primary-color bg-transparent rounded-[50px] font-semibold hover:bg-transparent duration-[300ms] border-[2px] border-primary-color border-solid hover:text-black hover:bg-primary-color"
            >
              VIEW MORE
            </button>
          </Link>
        </div>
      </div>
      <div className="feedback bg-main-color text-black">
        <div className="flex flex-col justify-center items-center">
          <div className="row">
            <div className="flex justify-center items-center">
              <h2 data-title="Some Feedback" className="font-quintessential text-[50px] text-primary-color mt-[36px] mb-[24px] leading-[50px]">Some Feedback</h2>
            </div>
            <div className="feedback-items grid-cols-1 lg:grid-cols-3 gap-[24px] flex mb-[48px] mt-[8px] flex-col lg:flex-row">
              <div className="feedback-item border-[2px] border-solid border-[#0c1023] px-[16px] py-[24px] rounded-[16px]">
                <div className="flex justify-between mb-[24px]">
                  <div className="flex flex-col justify-center">
                    <h1 className="text-[24px] text-primary-color font-semibold">Huu Long</h1>
                    <p className="text-[18px]">Luv Cappuccino</p>
                  </div>
                  <div>
                    <img
                      src="https://f17-zpc.zdn.vn/3726462895640412840/f1c0a8c209dac6849fcb.jpg" alt="Long-Image"
                      className="w-[150px] rounded-[100px]" />
                  </div>
                </div>
                <p className="mb-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quaerat ipsa ullam consequuntur, neque animi soluta, at, laborum nesciunt aliquid ipsam ea accusantium error. Possimus perferendis vel harum odio deleniti.
                </p>
                <div className="rate-star flex bg-primary text-primary-color text-[40px] ">
                  {/* reacticon */}
                  <VscStarFull className="mr-[4px]" />
                  <VscStarFull className="mr-[4px]" />
                  <VscStarFull className="mr-[4px]" />
                  <VscStarFull className="mr-[4px]" />
                  <VscStarFull className="mr-[4px]" />
                </div>
              </div>
              <div className="feedback-item border-[2px] border-solid border-[#0c1023] px-[16px] py-[24px] rounded-[16px]">
                <div className="flex justify-between mb-[24px]">
                  <div className="flex flex-col justify-center">
                    <h1 className="text-[24px] text-primary-color font-semibold">Truong Son</h1>
                    <p className="text-[18px]">Luv Americano</p>
                  </div>
                  <div>
                    <img
                      src="https://f19-zpc.zdn.vn/3288745191852983150/37756e6ccf74002a5965.jpg" alt="Son-Image"
                      className="w-[150px] h-[150px] rounded-[100px]" />
                  </div>
                </div>
                <p className="mb-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quaerat ipsa ullam consequuntur, neque animi soluta, at, laborum nesciunt aliquid ipsam ea accusantium error. Possimus perferendis vel harum odio deleniti.
                </p>
                <div className="rate-star flex bg-primary text-primary-color text-[40px] ">
                  {/* reacticon */}
                  <VscStarFull className="mr-[4px]" />
                  <VscStarFull className="mr-[4px]" />
                  <VscStarFull className="mr-[4px]" />
                  <VscStarFull className="mr-[4px]" />
                  <VscStarFull className="mr-[4px]" />
                </div>
              </div>
              <div className="feedback-item border-[2px] border-solid border-[#0c1023] px-[16px] py-[24px] rounded-[16px]">
                <div className="flex justify-between mb-[24px]">
                  <div className="flex flex-col justify-center">
                    <h1 className="text-[24px] text-primary-color font-semibold">Beckham</h1>
                    <p className="text-[18px]">Luv Latte</p>
                  </div>
                  <div>
                    <img
                      src="https://icdn.dantri.com.vn/k:2016/33fbd8e400000578-0-image-a-37-1462803925584-1462855260870/david-beckham-lai-khien-fan-nu-lao-dao-vi-qua-dep-trai.jpg" alt="Beckham-Image"
                      className="w-[150px] rounded-[100px] h-[150px]" />
                  </div>
                </div>
                <p className="mb-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quaerat ipsa ullam consequuntur, neque animi soluta, at, laborum nesciunt aliquid ipsam ea accusantium error. Possimus perferendis vel harum odio deleniti.
                </p>
                <div className="rate-star flex bg-primary text-primary-color text-[40px] ">
                  {/* reacticon */}
                  <VscStarFull className="mr-[4px]" />
                  <VscStarFull className="mr-[4px]" />
                  <VscStarFull className="mr-[4px]" />
                  <VscStarFull className="mr-[4px]" />
                  <VscStarFull className="mr-[4px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home