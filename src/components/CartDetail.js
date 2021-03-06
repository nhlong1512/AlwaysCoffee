import React, { useContext, useEffect, useState } from 'react'
import InitContext from '../store/InitContext'
import { IoTrashOutline } from "react-icons/io5";
import { Link } from "react-router-dom"

function CartDetail() {
  const init = useContext(InitContext)

  // const [isCheckedAll, setIsCheckedAll] = useState(false)

  const onAdd = (item) => {
    const exist = init.cartItems.find(x => x.id === item.id)
    if (exist) {
      init.setCartItems(init.cartItems.map(x => x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x))
    } else {
      init.setCartItems([{ ...item, qty: 1, isChecked: false }, ...init.cartItems])
    }
  }

  const onRemove = (item) => {
    const exist = init.cartItems.find((x) => x.id === item.id);
    if (exist.qty === 1) {
      return;
    } else {
      init.setCartItems(
        init.cartItems.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      )
    }
  }

  const onDelete = (item) => {
    init.setCartItems(init.cartItems.filter((x) => x.id !== item.id));
  }

  //Handle On Checked All
  // const handleOnCheckedAll = () => {
  //   setIsCheckedAll(!isCheckedAll)
  // }

  // const handleOnCheckedAllToOnChecked = () => {
  //   if (isCheckedAll === true) {
  //     init.setCartItems(prev => prev.map(item => item.isChecked === false ? { ...item, isChecked: !item.isChecked } : item))
  //   }
  //   else {
  //     if (init.cartItems.find(x => x.isChecked === false) === undefined) {
  //       init.setCartItems(prev => prev.map(item => item.isChecked === true ? { ...item, isChecked: !item.isChecked } : item))
  //     }
  //   }
  // }

  // useEffect(() => {
  //   handleOnCheckedAllToOnChecked();
  // }, [isCheckedAll])

  // Handle On Checked Children
  const handleOnChecked = (id) => {
    init.setCartItems(prev => prev.map(x => x.id === id ? { ...x, isChecked: !x.isChecked } : x)
    )
  }

  // function handleOnCheckedToOnCheckedAll() {
  //   let flag = true;
  //   if (init.cartItems.length === 0) flag = false;
  //   for (let i = 0; i < init.cartItems.length; i++) {
  //     if (init.cartItems[i].isChecked === false) {
  //       flag = false;
  //     }
  //   }
  //   return flag;
  // }

  // useEffect(() => {
  //   setIsCheckedAll(handleOnCheckedToOnCheckedAll());
  // }, [init.cartItems])


  const itemsPrice = init.cartItems.reduce((a, c) => c.isChecked ? (a + c.qty * c.price) : a, 0)

  return (
    <div
      className="bg-[#f0f0f0] pb-[80px] pt-[120px] flex justify-center"
      onAdd={onAdd}
      onRemove={onRemove}
    >
      {init.cartItems.length === 0 &&
        (<div className="pt-[120px] mx-auto flex flex-col justify-center items-center">
          <div>
            <img src="https://freepikpsd.com/file/2019/10/empty-cart-png-Transparent-Images.png" alt="Empty Cart" />
          </div>
          <p className="text-[24px] my-[16px] mx-auto">Ch??a c?? s???n ph???m trong gi??? h??ng c???a b???n.</p>
          <button className="mt-[12px] flex justify-center items-center bg-[#e57905] text-white font-semibold text-[16px] rounded-[12px] py-[12px] px-[36px] my-[36px] box-shadow-custom hover:opacity-[0.8]">
            <p>
              Mua S???m Ngay
            </p>
          </button>
        </div>)
      }
      {
        init.cartItems.length !== 0 &&
        (
          <div>
            <div className="row mb-[16px] text-[20px]">
              GI??? H??NG ({init.cartItems.length} s???n ph???m)
            </div>
            <div className="row flex justify-center">
              {/* Section Detail Cart */}
              <div className="w-[66.666%] rounded-[8px]">
                <div className="flex mb-[16px] rounded-[8px] py-[10px] bg-[#fff]">
                  <div className="flex basis-[8%] justify-center items-center ">
                    {/* <input
                      type="checkbox"
                      className="checkbox-add-cart"
                    /> */}
                  </div>
                  <div className="flex basis-[59%] font-medium">
                    T???t C??? S???n Ph???m ({init.cartItems.length} s???n ph???m)
                  </div>
                  <div className="flex basis-[15%] font-medium">
                    S??? L?????ng
                  </div>
                  <div className="flex basis-[17%] font-medium">
                    Th??nh Ti???n
                  </div>
                </div>
                <div className="bg-[#fff] rounded-[8px]">
                  {init.cartItems.map((item) => (
                    <div
                      key={item.id}
                    >
                      <div className="flex py-[20px]">
                        <div className="flex basis-[8%] justify-center items-center ">
                          <input
                            type="checkbox"
                            className="checkbox-add-cart"
                            checked={item.isChecked}
                            onClick={() => handleOnChecked(item.id)}
                          />
                        </div>
                        <Link to="/menuChildren"
                          className="p-0 flex justify-center items-center basis-[16%]"
                          onClick={() => init.handleClickMenuChildren(item.id)}
                        >
                          <div className="cursor-pointer">
                            <img src={item.image} alt={item.name} className="" />
                          </div>
                        </Link>
                        <div className="basis-[68%] flex">
                          <div className="flex basis-[60%] px-[20px] py-[10px] flex-col justify-between">
                            <Link to="/menuChildren"
                              className="w-[100%] font-semibold hover:text-primary-color"
                              onClick={() => init.handleClickMenuChildren(item.id)}
                            >
                              <div className="cursor-pointer">{item.name}</div>
                            </Link>
                            <div>
                              <h2 className="font-bold ">{item.price.toLocaleString()} ??</h2>
                            </div>
                          </div>
                          <div className="flex basis-[40%] m-auto justify-center items-center">
                            <div className="flex-[2] px-[10px]">
                              <div className="h-[30px] border-E0E rounded-[5px] flex justify-center items-center ">
                                <button
                                  className="px-[6px] text-[30px] leading-[30px] hover:text-primary-color flex justify-center items-center text-center m-auto"
                                  onClick={() => onRemove(item)}
                                >
                                  -
                                </button>
                                <input type="text"
                                  value={item.qty}
                                  className="px-[4px] w-[30px] flex justify-center items-center text-center border-E0E-x h-[100%]"
                                />
                                <button
                                  className="px-[6px] text-[24px] leading-[30px] hover:text-primary-color"
                                  onClick={() => onAdd(item)}
                                >
                                  +
                                </button>
                              </div>
                            </div>
                            <div className="flex flex-[3] items-center justify-center">
                              <h2 className="text-[16px] text-primary-color font-bold">{(item.price * item.qty).toLocaleString()} ??</h2>
                            </div>
                          </div>
                        </div>
                        <div
                          className="flex basis-[8%] items-center justify-center cursor-pointer"
                          onClick={() => onDelete(item)}
                        >
                          <div className="text-[24px] hover:text-primary-color cursor-pointer">
                            <IoTrashOutline />
                          </div>
                        </div>
                      </div>
                      <div className="border-product"></div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Section Payment */}
              <div className="w-[33.333%] pl-[24px] ">
                <div className="bg-[#fff] rounded-[8px] pt-[12px] pb-[12px] sticky top-[90px]">
                  <div className="priceTotal">
                    <div className="flex text-[16px] px-[16px] py-[12px]">
                      <div className="flex justify-start items-center basis-[65%]">Th??nh Ti???n</div>
                      <div className="flex basis-[35%] justify-end items-center">{itemsPrice.toLocaleString()} ??</div>
                    </div>
                    <div className="border-product"></div>
                    <div className="text-[16px] flex px-[16px] py-[12px]">
                      <div className="flex justify-start items-center basis-[65%] font-semibold">
                        T???ng S??? Ti???n (G???m VAT)
                      </div>
                      <div className="flex basis-[35%] justify-end items-center">
                        <span className="text-[22px] text-primary-color font-semibold">{itemsPrice.toLocaleString()} ??</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="px-[16px]">
                      <button className="w-[100%] mb-[10px] bg-primary-color rounded-[8px] py-[10px] px-[20px] hover:opacity-[0.8]">
                        <span className="text-[18px] text-white font-semibold">
                          THANH TO??N
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}
export default CartDetail;


