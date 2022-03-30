import React, { useContext, useState } from 'react'
import InitContext from '../store/InitContext'

function CartDetail() {
  const init = useContext(InitContext)
  {console.log(init.cartItems)}
  return (
    <div>
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
        (<div className="pt-[120px] mx-auto flex flex-col justify-center items-center">
          <p className="text-[24px] my-[16px] mx-auto">Có sản phẩm</p>
          <button className="mt-[12px] flex justify-center items-center bg-[#e57905] text-white font-semibold text-[16px] rounded-[12px] py-[12px] px-[36px] my-[36px] box-shadow-custom hover:opacity-[0.8]">
            <p>
              Mua Sắm Ngay
            </p>
          </button>
        </div>)
      }
    </div>
  )
}
export default CartDetail;
