import React, { useContext, useState } from 'react'
import InitContext from '../store/InitContext'
import { IoTrashOutline } from "react-icons/io5";

function CartDetail() {
  const init = useContext(InitContext)
  const itemsPrice = init.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  const onAdd = (item) => {
    const exist = init.cartItems.find(x => x.id === item.id)
    if (exist) {
      init.setCartItems(init.cartItems.map(x => x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x))
    } else {
      init.setCartItems([...init.cartItems, { ...item, qty: 1 }])
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
      );
    }
  }

  const onDelete = (item) => {
    init.setCartItems(init.cartItems.filter((x) => x.id !== item.id));
  }
  return (
    <div className="bg-[#f0f0f0] pb-[80px] pt-[120px] ">

      {init.cartItems.length === 0 &&
        (<div className="pt-[120px] mx-auto flex flex-col justify-center items-center">
          <div>
            <img src="https://freepikpsd.com/file/2019/10/empty-cart-png-Transparent-Images.png" alt="Empty Cart" />
          </div>
          <p className="text-[24px] my-[16px] mx-auto">Chưa có sản phẩm trong giỏ hàng của bạn.</p>
          <button className="mt-[12px] flex justify-center items-center bg-[#e57905] text-white font-semibold text-[16px] rounded-[12px] py-[12px] px-[36px] my-[36px] box-shadow-custom hover:opacity-[0.8]">
            <p>
              Mua Sắm Ngay
            </p>
          </button>
        </div>)
      }
      {
        init.cartItems.length !== 0 &&
        (
          <div className="flex justify-center items-center">
            <div className="h-[100%] rounded-[16px] row">
              <div className="mb-[24px] text-[18px]">
                GIỎ HÀNG ({init.cartItems.length} sản phẩm)
              </div>
              {init.cartItems.map((item) => (
                <div key={item.id}>
                  <div className="flex py-[20px] bg-[#fff]">
                    <div className="flex basis-[8%] justify-center items-center ">

                    </div>
                    <div className="p-0 flex justify-center items-center basis-[16%]">
                      <a href="">
                        <img src={item.image} alt={item.name} className="" />
                      </a>
                    </div>
                    <div className="basis-[68%] flex">
                      <div className="flex basis-[65%] px-[20px] py-[10px] flex-col justify-between">
                        <div className="w-[100%] font-semibold hover:text-primary-color">
                          <a>{item.name}</a>
                        </div>
                        <div>
                          <h2 className="font-bold hover:text-primary-color">{item.price.toLocaleString()}</h2>
                        </div>
                      </div>
                      <div className="flex basis-[35%] m-auto justify-center items-center">
                        <div className="flex-[2] px-[10px]">
                          <div className="h-[30px] border-E0E rounded-[5px] flex justify-center items-center ">
                            <button
                              className="px-[6px] text-[30px] leading-[30px] hover:text-primary-color"
                              onClick={() => onRemove(item)}
                            >
                              -
                            </button>
                            <h2>{item.qty}</h2>
                            <button
                              className="px-[6px] text-[24px] leading-[30px] hover:text-primary-color"
                              onClick={() => onAdd(item)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="flex flex-[3] items-center justify-center">
                          <h2 className="text-[16px] text-primary-color font-bold">{(item.price * item.qty).toLocaleString()} đ</h2>
                        </div>
                      </div>
                    </div>
                    <div
                      className="flex basis-[8%] items-center justify-center cursor-pointer"
                      onClick={() => onDelete(item)}
                    >
                      <a className="text-[24px] hover:text-primary-color">
                        <IoTrashOutline />
                      </a>
                    </div>
                  </div>
                  <div className="border-b-custom-95 flex items-center justify-center mx-auto">

                  </div>
                </div>
              ))}

            </div>
          </div>
        )
      }
    </div>
  )
}
export default CartDetail;
