import React from 'react';
import { useState, useEffect } from 'react';
import Footer from './Footer'
import MenuList from './MenuList';
import Header from './Header';


function Coffee() {
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
  return (
    <div className="menu bg-[#0C1023] min-h-[680px]">
    {/* <Header/> */}
      <div className="flex flex-col justify-center items-center">
        <MenuList
          menuList={menuList}
        />
      </div>
      {/* <Footer /> */}
    </div>
  )
}
export default Coffee;