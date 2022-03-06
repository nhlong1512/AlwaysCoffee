import React, { createContext, useState } from 'react'
// Initiate Context
const InitContext = createContext();
// Provide Context
export const ProviderContext = ({ children }) => {
  const [isOpenHamburger, setIsOpenHamburger] = useState(false)
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
      image: 'https://phunuvietnam.mediacdn.vn/thumb_w/700/179072216278405120/2021/6/1/tra-vai-1622554326746992404395-0-0-563-900-crop-16225544148881196783087.jpg',
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
  const [menuChildren, setMenuChildren] = useState({

  })
  const handleClickMenuChildren = (id) => {
    setMenuChildren(menuList.filter(menu => menu.id === id))
    console.log(menuList.filter(menu => menu.id === id));
  }
  return (
    <InitContext.Provider value={{ isOpenHamburger, setIsOpenHamburger, menuList, setMenuList, coffee, setCoffee, tea, setTea, cakeAndSnack, setCakeAndSnack, another, setAnother, handleClickMenuChildren, setMenuChildren, menuChildren }}>
      {children}
    </InitContext.Provider>
  )
}

export default InitContext;