import React from 'react';
import Logo from '../img/LogoAlways.png'
import AboutImg2 from '../img/AboutImg2.jpg'
import { useState, useEffect } from 'react';
import './Home.css'
import MenuList from './MenuList'
import { VscChromeClose, VscThreeBars } from "react-icons/vsc"
function Home() {
  const [menuList, setMenuList] = useState([
    {
      id: 0,
      image: 'https://images.unsplash.com/photo-1559423044-a0bbfaa0a56b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
      name: 'Espresso',
      price: 150000,
    },
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1413745094207-a01b234cc32f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
      name: 'Piccolo',
      price: 100000,
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1480348709911-be15f2c579ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
      name: 'Cappuccino',
      price: 120000,
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1571658734974-e513dfb8b86b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80',
      name: 'Latte',
      price: 90000,
    },
    {
      id: 4,
      image: 'https://bonjourcoffee.vn/blog/wp-content/uploads/2020/01/Ca-phe-mocha.jpeg',
      name: 'Mocha',
      price: 110000,
    },
    {
      id: 5,
      image: 'https://www.mamascafe.net/wp-content/uploads/2019/05/ca-phe-Americano-1.jpg',
      name: 'Americano',
      price: 120000,
    },
    {
      id: 6,
      image: 'https://static.wixstatic.com/media/bd5b87_cb42b6724d1043d1b74ae17c21f3582a~mv2.jpg/v1/fill/w_1000,h_668,al_c,q_90,usm_0.66_1.00_0.01/bd5b87_cb42b6724d1043d1b74ae17c21f3582a~mv2.jpg',
      name: 'Filter',
      price: 140000,
    },
  ])
  const [coffee, setCoffee] = useState([
    {
      id: 0,
      image: 'https://images.unsplash.com/photo-1559423044-a0bbfaa0a56b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
      name: 'Espresso',
      price: 150000,
    },
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1413745094207-a01b234cc32f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
      name: 'Piccolo',
      price: 100000,
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1480348709911-be15f2c579ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
      name: 'Cappuccino',
      price: 120000,
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1571658734974-e513dfb8b86b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80',
      name: 'Latte',
      price: 90000,
    },
    {
      id: 4,
      image: 'https://bonjourcoffee.vn/blog/wp-content/uploads/2020/01/Ca-phe-mocha.jpeg',
      name: 'Mocha',
      price: 110000,
    },
    {
      id: 5,
      image: 'https://www.mamascafe.net/wp-content/uploads/2019/05/ca-phe-Americano-1.jpg',
      name: 'Americano',
      price: 120000,
    },
    {
      id: 6,
      image: 'https://static.wixstatic.com/media/bd5b87_cb42b6724d1043d1b74ae17c21f3582a~mv2.jpg/v1/fill/w_1000,h_668,al_c,q_90,usm_0.66_1.00_0.01/bd5b87_cb42b6724d1043d1b74ae17c21f3582a~mv2.jpg',
      name: 'Filter',
      price: 140000,
    },
  ])
  const [tea, setTea] = useState([
    {
      id: 0,
      image: 'http://congaiba.com/wp-content/uploads/2018/05/pha-che-tra-vai.jpg',
      name: 'Trà Vải',
      price: 150000,
    },
    {
      id: 1,
      image: 'https://meta.vn/Data/image/2020/06/18/uong-tra-hoa-cuc-co-tac-dung-gi-4.jpg',
      name: 'Trà Hoa Cúc',
      price: 100000,
    },
    {
      id: 2,
      image: 'https://bizweb.dktcdn.net/100/165/677/files/tra-hoa-nhai.jpg?v=1566449680275',
      name: 'Trà Hoa Nhài',
      price: 120000,
    },
    {
      id: 3,
      image: 'https://trivietphat.net/wp-content/uploads/2021/09/tra-gung-co-tac-dung-gi-1.jpg',
      name: 'Trà Gừng',
      price: 90000,
    },
    {
      id: 4,
      image: 'https://www.bartender.edu.vn/wp-content/uploads/2015/09/tra-dao-tuoi.jpg',
      name: 'Trà Đào',
      price: 110000,
    },
    {
      id: 5,
      image: 'https://meta.vn/Data/image/2021/05/20/tra-dao-cam-sa-22.jpg',
      name: 'Trà Đào Cam Xả',
      price: 120000,
    },
  ])
  const [cakeAndSnack, setCakeAndSnack] = useState([
    {
      id: 0,
      image: 'https://i-raovat.vnecdn.net/2017/08/02/5981896b6b4d9-69bc8f2ab98754d90d96.jpg?w=1280&h=768&q=100&dpr=1&rt=fit&g=no&wmi=&wmg=ce&wmo=50&wms=30&wmx=0&wmy=0&s=qiUPKlYDBVpEgDRWHvJzkg',
      name: 'Bánh Chà Bông Phô Mai',
      price: 60000,
    },
    {
      id: 1,
      image: 'https://alittleitalian.com.vn/wp-content/uploads/2021/09/banh-bong-lan-trung-muoi-1.jpg',
      name: 'Bánh Chà Bông Trừng Muối',
      price: 60000,
    },
    {
      id: 2,
      image: 'https://bizweb.dktcdn.net/100/080/957/files/mit-say-kho-thom-ngon.jpg',
      name: 'Mít Sấy',
      price: 40000,
    },
    {
      id: 3,
      image: 'https://daychuyenchebien.vn/wp-content/uploads/2019/10/chu%E1%BB%91i-s%E1%BA%A5y-ngon.jpg',
      name: 'Chuối Sấy',
      price: 40000,
    },
    {
      id: 4,
      image: 'https://cdn.daylambanh.edu.vn/wp-content/uploads/2020/01/mut-hat-sen-thom-ngon-600x400.jpg',
      name: 'Mứt Hạt Sen',
      price: 40000,
    },
  ])
  const [another, setAnother] = useState([
    {
      id: 0,
      image: 'https://channel.mediacdn.vn/2021/4/29/photo-2-16196950948791442505481.jpg',
      name: 'Bia Bơ Harry Potter',
      price: 150000,
    },
    {
      id: 1,
      image: 'https://merchandise.hogwarts.vn/wp-content/uploads/2013/07/notebook-4-houses-mockup.jpg',
      name: 'Sổ Tay 4 nhà Harry Potter',
      price: 200000,
    },
    {
      id: 2,
      image: 'https://cf.shopee.vn/file/8941624cb2dd3dffd0f169283db6bcc9',
      name: 'Đũa Phép',
      price: 300000,
    },
    {
      id: 3,
      image: 'https://cf.shopee.vn/file/855e6545937dd126bbadbb63d81a2475',
      name: 'Búp Bê Nhồi Bông Harry Potter',
      price: 180000,
    },
    {
      id: 4,
      image: 'https://cdn.vatgia.vn/pictures/thumb/0x0/2016/01/ban1452331843.jpg',
      name: 'Dây Chuyền',
      price: 180000,
    },
    {
      id: 5,
      image: 'https://cf.shopee.vn/file/7a3fedf026fb261f3f7639a18f7caad0',
      name: 'Set Đồ Harry Potter',
      price: 669000,
    },
  ])
  const [isOpenHamburger, setIsOpenHamburger] = useState(false)
  const handleClickHamburger = (e) => {
    setIsOpenHamburger(!isOpenHamburger)
    e.stopPropagation()
  }
  window.addEventListener('scroll', function () {
    const x = window.scrollY
    if (x > 120) {
      document.querySelector('.activeTop').classList.add('topActive')
    } else {
      document.querySelector('.activeTop').classList.remove('topActive')
    }
  })
  const handleClickCoffee = () => {
    setMenuList(coffee)
    document.querySelector('.coffee').classList.add('active')
    document.querySelector('.tea').classList.remove('active')
    document.querySelector('.cakeAndSnack').classList.remove('active')
    document.querySelector('.another').classList.remove('active')
  }
  const handleClickTea = () => {
    setMenuList(tea)
    document.querySelector('.coffee').classList.remove('active')
    document.querySelector('.tea').classList.add('active')
    document.querySelector('.cakeAndSnack').classList.remove('active')
    document.querySelector('.another').classList.remove('active')
  }
  const handleClickCakeAndSnack = () => {
    setMenuList(cakeAndSnack)
    document.querySelector('.coffee').classList.remove('active')
    document.querySelector('.tea').classList.remove('active')
    document.querySelector('.cakeAndSnack').classList.add('active')
    document.querySelector('.another').classList.remove('active')
  }
  const handleClickAnother = () => {
    setMenuList(another)
    document.querySelector('.coffee').classList.remove('active')
    document.querySelector('.tea').classList.remove('active')
    document.querySelector('.cakeAndSnack').classList.remove('active')
    document.querySelector('.another').classList.add('active')
  }
  return (
    <div className="h-[5000px] font-quintessential" onClick={() => setIsOpenHamburger(false)}>
      <div className="activeTop fixed z-[10] bg-main-color top-[0] right-[0] left-[0] ">
        <div className="max-w-[1200px] flex items-center justify-between px-[24px] py-[12px] mx-auto">
          <div className="">
            <a href=""><img src={Logo} alt="LogoAlways" className="h-[44px]" /></a>
          </div>
          <div className="w-[50px] h-[50px] opacity-[1] z-[1] cursor-pointer flex justify-center items-center "
            onClick={handleClickHamburger}
          >
            <VscThreeBars className="w-full h-full text-primary-color" />
          </div>

        </div>
      </div>
      <div className="w-screen h-screen bg-[url('https://images.unsplash.com/photo-1484659619207-9165d119dafe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-no-repeat bg-cover bg-center relative flex items-center justify-center before:absolute before:w-full before:h-full before:content-[''] before:block before:bg-black-rgba-05">
        <div className="absolute flex justify-center items-center text-center flex-col">
          <h1 className="text-[50px] text-primary-color mb-[16px] mx-[24px]"
          >
            Always Coffee
          </h1>
          <h2 className="text-[24px] text-white mb-[16px] mx-[24px]">
            A Hidden Place In The Heart Of Ha Noi. Let's Explore Our Special Potions And Get Magic Experience To Be A Wizard!
          </h2>
          <button className="font-quintessential flex justify-center items-center box-border text-[24px] leading-[24px] px-[40px] py-[20px] text-primary-color bg-transparent rounded-[50px] font-semibold hover:bg-transparent duration-[300ms] border-[2px] border-primary-color border-solid hover:text-black hover:bg-primary-color"
          >
            MENU
          </button>
        </div>
      </div>
      {
        isOpenHamburger && (
          <div
            className="font-quintessential text-primary-color fixed w-[300px] h-screen bg-black-rgba-07 top-[0]  flex justify-center items-center flex-col z-[10] font-bold text-[20px] right-0 duration-[500ms] animate-fade-in-right-to-left "
            onClick={(e) => {
              e.stopPropagation()
            }}
          >
            <button
              className="w-[50px] h-[50px] absolute top-[12px] left-[12px] opacity-[1] z-[20] cursor-pointer flex justify-center items-center"
              onClick={() => setIsOpenHamburger(false)}
            >
              <VscChromeClose className="w-full h-full text-primary-color relative z-[25] hover:rotate-90 hover:duration-300" />
            </button>
            <li className="leading-[40px] list-none">
              <a href="">Trang Chủ</a>
            </li>
            <li className="leading-[40px] list-none">
              <a href="">Về Chúng Tôi</a>
            </li>
            <li className="leading-[40px] list-none">
              <a href="">Hệ Thống Cửa Hàng</a>
            </li>
            <li className="leading-[40px] list-none">
              <a href="">Hình Ảnh</a>
            </li>
            <li className="leading-[40px] list-none">
              <a href="">Tin Tức</a>
            </li>
            <li className="leading-[40px] list-none">
              <a href="">Liên Hệ</a>
            </li>
          </div>
        )
      }
      <div className="about bg-main-color">
        <div className="flex justify-center items-center flex-col">
          <div className="row">
            <div>
              <h2 data-title="Our Story" className="text-[50px] text-primary-color mt-[36px] mb-[16px] leading-[50px]">About Us</h2>
            </div>
          </div>
          <div className="row mb-[50px]">
            <div className="grid grid-cols-2 gap-[16px]">
              <div className="about-content">
                <h2 className="mb-[16px] text-[32px] text-white">Welcome Muggles To Always</h2>
                <p className="text-white text-[18px] mb-[16px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores voluptates tenetur dolor commodi voluptate vitae, maiores sequi omnis quo? Itaque, distinctio. Repellat non aspernatur mollitia magni, ex enim ipsa nobis?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ullam exercitationem quasi explicabo cumque, quidem aperiam optio, harum corrupti sit doloremque accusantium repudiandae! Officia hic blanditiis nobis corporis ipsam nisi? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates ipsam corrupti ratione! </p>
                <button className="flex justify-center items-center box-border text-[24px] leading-[24px] px-[40px] py-[20px] text-primary-color bg-transparent rounded-[50px] font-semibold hover:bg-transparent duration-[300ms] border-[2px] border-primary-color border-solid hover:text-black hover:bg-primary-color"
                >
                  DETAILS
                </button>
              </div>
              <div className="about-img">
                <div className="relative">
                  <span className="absolute top-[50%] left-[50%] text-white text-[30px] translate-x-[-50%] translate-y-[-50%] italic">10+ Years Experience</span>
                  <img src={AboutImg2} alt="About Image" className="rounded-[16px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="menu bg-[#0C1023] min-h-[680px]">
        <div className="flex flex-col justify-center items-center">
          <div className="row">
            <div className="flex justify-center items-center">
              <h2 data-title="Order Now" className="text-[50px] text-primary-color mt-[36px] mb-[16px] leading-[50px]">Our Menu</h2>
            </div>
          </div>
          <div className="row">
            <div className="flex justify-center items-center text-white">
              <button
                className="coffee bg-transparent mx-[12px] my-[10px] text-[20px] hover:text-primary-color active"
                onClick={handleClickCoffee}
              >
                Cà Phê
              </button>
              <button
                className="tea bg-transparent mx-[12px] my-[10px] text-[20px] hover:text-primary-color"
                onClick={handleClickTea}
              >
                Trà
              </button>
              <button
                className="cakeAndSnack bg-transparent mx-[12px] my-[10px] text-[20px] hover:text-primary-color"
                onClick={handleClickCakeAndSnack}
              >
                Bánh & Snack
              </button>
              <button
                className="another bg-transparent mx-[12px] my-[10px] text-[20px] hover:text-primary-color"
                onClick={handleClickAnother}
              >Món Khác
              </button>
            </div>
          </div>
          <MenuList
            menuList={menuList}
          />
        </div>
      </div>
    </div>
  )
}
export default Home