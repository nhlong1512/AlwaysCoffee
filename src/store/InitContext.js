import React, { createContext, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
// Initiate Context
const InitContext = createContext();
// Provide Context
export const ProviderContext = ({ children }) => {
  const [isOpenHamburger, setIsOpenHamburger] = useState(false)
  const [activeId, setActiveId] = useState(0)
  const [initMenu, setInitMenu] = useState([
    {
      id: 0,
      image: 'https://product.hstatic.net/1000075078/product/bac-siu-da_9bf82220a1a54847aa7357de541e7552_large.jpg',
      name: 'Bạc Sỉu Đá',
      price: 29000,
      type: 'Cà Phê',

    },
    {
      id: 1,
      image: 'https://product.hstatic.net/1000075078/product/ca-phe-den-da_6e25255ae31c4f3bbbb502f77e2c100d_large.jpg',
      name: 'Cà Phê Đen Đá',
      price: 29000,
      type: 'Cà Phê',
    },
    {
      id: 2,
      image: 'https://product.hstatic.net/1000075078/product/ca-phe-sua-da_b00c53d18cd84144a164790323106a2f_large.jpg',
      name: 'Cà Phê Sữa Đá',
      price: 29000,
      type: 'Cà Phê',
    },
    {
      id: 3,
      image: 'https://product.hstatic.net/1000075078/product/mocha-da_538820_400x400_73100250cb904ad0aad79a36a59aeea7_large.jpg',
      name: 'Mocha Đá',
      price: 49000,
      type: 'Cà Phê',
    },
    {
      id: 4,
      image: 'https://product.hstatic.net/1000075078/product/espressonong_612688_400x400_8fdb6dc2f37a4445b43a7ce3ee4aebb0_large.jpg',
      name: 'Espresso Nóng',
      price: 40000,
      type: 'Cà Phê',
    },
    {
      id: 5,
      image: 'https://product.hstatic.net/1000075078/product/cfdenda-espressoda_185438_400x400_bc9c244c3c644eccb3edad8578569126_large.jpg',
      name: 'Espresso Đá',
      price: 45000,
      type: 'Cà Phê',
    },
    {
      id: 6,
      image: 'https://product.hstatic.net/1000075078/product/cappuccino_621532_400x400_67c12956866c442585a6d47d0771a978_large.jpg',
      name: 'Cappuccino Nóng',
      price: 49000,
      type: 'Cà Phê',
    },
    {
      id: 7,
      image: 'https://product.hstatic.net/1000075078/product/capu-da_487470_400x400_e11f07c213814171b07a5801722e3bb3_large.jpg',
      name: 'Cappuccino Đá',
      price: 49000,
      type: 'Cà Phê',
    },
    {
      id: 8,
      image: 'https://product.hstatic.net/1000075078/product/americano-nong-app_652009_400x400_c4cc077adacd4340bb41a6e1e4710a95_large.jpg',
      name: 'Americano Nóng',
      price: 40000,
      type: 'Cà Phê',
    },
    {
      id: 9,
      image: 'https://product.hstatic.net/1000075078/product/latte-da_438410_400x400_a48fbcd0a33f4ceba1803acbbe1292f4_large.jpg',
      name: 'Latte Đá',
      price: 49000,
      type: 'Cà Phê',
    },
    {
      id: 10,
      image: 'https://product.hstatic.net/1000075078/product/caramel-macchiato-da_fa2503073e5c4f7a98516f1c9d39253b_large.jpg',
      name: 'Caramel Macchiato Đá',
      price: 49000,
      type: 'Cà Phê',
    },
    {
      id: 11,
      image: 'https://product.hstatic.net/1000075078/product/latte_851143_400x400_7305aaa080df4202a26dedf898e7196b_large.jpg',
      name: 'Latte Nóng',
      price: 49000,
      type: 'Cà Phê',
    },
    {
      id: 12,
      image: 'https://product.hstatic.net/1000075078/product/tra-nhan-da_484810_400x400_446acb3ad76a48d38a98855cd7be54cd_large.jpg',
      name: 'Trà Long Nhãn Hạt Chia',
      price: 45000,
      type: 'Trà',
    },
    {
      id: 13,
      image: 'https://product.hstatic.net/1000075078/product/nhan-hat-chia--nong_140427_400x400_dffc402ff03b4558999950a750c0973d_large.jpg',
      name: 'Trà Long Nhãn Hạt Chia Nóng',
      price: 51000,
      type: 'Trà',
    },
    {
      id: 14,
      image: 'https://product.hstatic.net/1000075078/product/tra-sen_905594_400x400_c82fd1b3786d45f380cf4c15e9af7ab9_large.jpg',
      name: 'Trà Hạt Sen Đá',
      price: 45000,
      type: 'Trà',
    },
    {
      id: 15,
      image: 'https://product.hstatic.net/1000075078/product/tra-sen-nong_025153_400x400_b7b0ec5844c546d2a6d139a65be8aa0a_large.jpg',
      name: 'Trà Hạt Sen Nóng',
      price: 51000,
      type: 'Trà',
    },
    {
      id: 16,
      image: 'https://product.hstatic.net/1000075078/product/tra-dao-cam-xa_668678_400x400_207c526c987c4026877ebae748c62afd_large.jpg',
      name: 'Trà Đào Cam Sả Đá',
      price: 45000,
      type: 'Trà',
    },
    {
      id: 17,
      image: 'https://product.hstatic.net/1000075078/product/tdcs-nong_288997_400x400_75f2d80e0db2442e9ab752689cbf1001_large.jpg',
      name: 'Trà Đào Cam Sả Nóng',
      price: 51000,
      type: 'Trà',
    },
    {
      id: 10,
      image: 'https://product.hstatic.net/1000075078/product/caramel-macchiato-da_fa2503073e5c4f7a98516f1c9d39253b_large.jpg',
      name: 'Caramel Macchiato Đá',
      price: 49000,
      type: 'Trà',
    },
    {
      id: 19,
      image: 'https://product.hstatic.net/1000075078/product/hong-tra-latte_618293_400x400_8e7d0a023bfb4537913425ec6048e59b_large.jpg',
      name: 'Hồng Trà Latte Macchiato',
      price: 54000,
      type: 'Trà',
    },
    {
      id: 20,
      image: 'https://product.hstatic.net/1000075078/product/hong-tra-sua-nong_941687_400x400_dfe4a7a23ecd4ca49822fc553909828a_large.jpg',
      name: 'Hồng Trà Sữa Nóng',
      price: 54000,
      type: 'Trà',
    },
    {
      id: 21,
      image: 'https://product.hstatic.net/1000075078/product/hong-tra-sua-tran-chau_326977_400x400_30c57e67d1104ae4b7313cf5d40f3e87_large.jpg',
      name: 'Hồng Trà Sữa Trân Châu',
      price: 54000,
      type: 'Trà',
    },
    {
      id: 22,
      image: 'https://product.hstatic.net/1000075078/product/tra-den-matchiato_430281_400x400_88f47618a6b84c2d9ad633d3298fb390_large.jpg',
      name: 'Trà Đen Macchiato',
      price: 49000,
      type: 'Trà',
    },
    {
      id: 23,
      image: 'https://product.hstatic.net/1000075078/product/tra-sua-mac-ca_377522_400x400_123ab6b1593d4e5c83776a54f6862bbd_large.jpg',
      name: 'Trà Sữa Mắc Ca Trân Châu Trắng',
      price: 49000,
      type: 'Trà',
    },
    {
      id: 24,
      image: 'https://product.hstatic.net/1000075078/product/banhmique_056830_400x400_8b3112e96ce949be82b70c4b4ab994c2_large.jpg',
      name: 'Bánh Mì Que Pate',
      price: 12000,
      type: 'Bánh & Snack',
    },
    {
      id: 25,
      image: 'https://product.hstatic.net/1000075078/product/banh-mi-vn-thit-nguoi_5e777a62ef2841bd9a5baf85c6970166_large.jpg',
      name: 'Bánh Mì VN Thịt Nguội',
      price: 29000,
      type: 'Bánh & Snack',
    },
    {
      id: 26,
      image: 'https://product.hstatic.net/1000075078/product/cha-bong-pho-mai_204282_400x400_8ff5f28305f547c287685bb01a8836fd_large.jpg',
      name: 'Chà Bông Phô Mai',
      price: 32000,
      type: 'Bánh & Snack',
    },
    {
      id: 27,
      image: 'https://product.hstatic.net/1000075078/product/croissant-trung-muoi_880850_400x400_0d8d5e787de8423cb0e60455651a17ee_large.jpg',
      name: 'Croissant Trứng Muối',
      price: 35000,
      type: 'Bánh & Snack',
    },
    {
      id: 28,
      image: 'https://product.hstatic.net/1000075078/product/mochi-kem-dua-dua_f94d5cd4b40a4377937dcf84033d678e_large.jpg',
      name: 'Mochi Kem Dừa Dứa',
      price: 19000,
      type: 'Bánh & Snack',
    },
    {
      id: 29,
      image: 'https://product.hstatic.net/1000075078/product/mochi-kem-phuc-bon-tu_894faa8a39fb43e0828f2125f6c1e8f9_large.jpg',
      name: 'Mochi Kem Phúc Bồn Tử',
      price: 19000,
      type: 'Bánh & Snack',
    },
    {
      id: 30,
      image: 'https://product.hstatic.net/1000075078/product/mochi-kem-viet-quat_1072f38b098d4213889c25128a02bce6_large.jpg',
      name: 'Mochi Kem Việt Quất',
      price: 19000,
      type: 'Bánh & Snack',
    },
    {
      id: 31,
      image: 'https://product.hstatic.net/1000075078/product/mochi-kem-xoai_f402331583f942819b39a8fa2528d9a2_large.jpg',
      name: 'Mochi Kem Xoài',
      price: 19000,
      type: 'Bánh & Snack',
    },
    {
      id: 32,
      image: 'https://product.hstatic.net/1000075078/product/mousse-gau-chocolate_e25675d96c504dacb88f4e56a54ab48b_large.jpg',
      name: 'Mousse Gấu Chocolate',
      price: 39000,
      type: 'Bánh & Snack',
    },
    {
      id: 33,
      image: 'https://product.hstatic.net/1000075078/product/5d92fbc79e12b47db8cabbd0_chanh-day_994413_400x400_333c9a63c0f74d41a11333c637127328_large.jpg',
      name: 'Mousse Passion Cheese',
      price: 29000,
      type: 'Bánh & Snack',
    },
    {
      id: 34,
      image: 'https://product.hstatic.net/1000075078/product/mousse-red-velvet_e732a3a0ffa44f589c8455ab75bc0f60_large.jpg',
      name: 'Mousse Red Velvet',
      price: 29000,
      type: 'Bánh & Snack',
    },
    {
      id: 35,
      image: 'https://product.hstatic.net/1000075078/product/mousse-tiramisu_d396a927d9ba4af284450066bd391148_large.jpg',
      name: 'Mousse Tiramisu',
      price: 32000,
      type: 'Bánh & Snack',
    },
    {
      id: 36,
      image: 'https://product.hstatic.net/1000075078/product/mit-say_666228_400x400_062954ca87384c13ab5044766afbec56_large.jpg',
      name: 'Mít Sấy',
      price: 20000,
      type: 'Bánh & Snack',
    },
    {
      id: 37,
      image: 'https://product.hstatic.net/1000075078/product/cf-da-xay-_1__158038_400x400_aee86b1c0779491f8c2778ddadf41f15_large.jpg',
      name: 'Cà Phê Đá Xay',
      price: 58000,
      type: 'Các Món Khác',
    },
    {
      id: 38,
      image: 'https://product.hstatic.net/1000075078/product/chanh-sa-da-xay_170980_400x400_2c8af8d0cfff43b78a93924d28a1215f_large.jpg',
      name: 'Chanh Sả Đá Xay',
      price: 49000,
      type: 'Các Món Khác',
    },
    {
      id: 39,
      image: 'https://product.hstatic.net/1000075078/product/chocolate-ice-blended_183602_400x400_142587be6f4f4dd0885ba746fd4a8c1a_large.jpg',
      name: 'Chocolate Đá Xay',
      price: 58000,
      type: 'Các Món Khác',
    },
    {
      id: 40,
      image: 'https://product.hstatic.net/1000075078/product/cookies_da_xay_f8296fb5c1ee492fabfe0969ab1fc43b_large.jpg',
      name: 'Cookie Đá Xay',
      price: 58000,
      type: 'Các Món Khác',
    },
    {
      id: 41,
      image: 'https://product.hstatic.net/1000075078/product/daovietquat_033985_400x400_20bfc56b971c47dca8734514a4765675_large.jpg',
      name: 'Đào Việt Quất Đá Xay',
      price: 58000,
      type: 'Các Món Khác',
    },
    {
      id: 42,
      image: 'https://product.hstatic.net/1000075078/product/matchadaxay_622077_400x400_5c617ff524e64e638ad7c868613a832b_large.jpg',
      name: 'Matcha Đá Xay',
      price: 58000,
      type: 'Các Món Khác',
    },
    {
      id: 43,
      image: 'https://product.hstatic.net/1000075078/product/sinh-to-viet-quoc_145138_400x400_ab271b0cd8be42089cd7e25f985c273e_large.jpg',
      name: 'Sinh Tố Việt Quất',
      price: 58000,
      type: 'Các Món Khác',
    },
    {
      id: 44,
      image: 'https://product.hstatic.net/1000075078/product/chocolate-da_877186_400x400_30a43c54fe484ecfbd606937604ef351_large.jpg',
      name: 'Chocolate Đá',
      price: 58000,
      type: 'Các Món Khác',
    },
    {
      id: 45,
      image: 'https://product.hstatic.net/1000075078/product/matcha-latte-da_083173_400x400_5725292025844c5da25a91d6e9b05a4b_large.jpg',
      name: 'Matcha Latte Đá',
      price: 58000,
      type: 'Các Món Khác',
    },
  ])
  const [menuList, setMenuList] = useState([
    {
      id: 0,
      image: 'https://product.hstatic.net/1000075078/product/bac-siu-da_9bf82220a1a54847aa7357de541e7552_large.jpg',
      name: 'Bạc Sỉu Đá',
      price: 29000,
      type: 'Cà Phê',

    },
    {
      id: 1,
      image: 'https://product.hstatic.net/1000075078/product/ca-phe-den-da_6e25255ae31c4f3bbbb502f77e2c100d_large.jpg',
      name: 'Cà Phê Đen Đá',
      price: 29000,
      type: 'Cà Phê',
    },
    {
      id: 2,
      image: 'https://product.hstatic.net/1000075078/product/ca-phe-sua-da_b00c53d18cd84144a164790323106a2f_large.jpg',
      name: 'Cà Phê Sữa Đá',
      price: 29000,
      type: 'Cà Phê',
    },
    {
      id: 3,
      image: 'https://product.hstatic.net/1000075078/product/mocha-da_538820_400x400_73100250cb904ad0aad79a36a59aeea7_large.jpg',
      name: 'Mocha Đá',
      price: 49000,
      type: 'Cà Phê',
    },
    {
      id: 4,
      image: 'https://product.hstatic.net/1000075078/product/espressonong_612688_400x400_8fdb6dc2f37a4445b43a7ce3ee4aebb0_large.jpg',
      name: 'Espresso Nóng',
      price: 40000,
      type: 'Cà Phê',
    },
    {
      id: 5,
      image: 'https://product.hstatic.net/1000075078/product/cfdenda-espressoda_185438_400x400_bc9c244c3c644eccb3edad8578569126_large.jpg',
      name: 'Espresso Đá',
      price: 45000,
      type: 'Cà Phê',
    },
    {
      id: 6,
      image: 'https://product.hstatic.net/1000075078/product/cappuccino_621532_400x400_67c12956866c442585a6d47d0771a978_large.jpg',
      name: 'Cappuccino Nóng',
      price: 49000,
      type: 'Cà Phê',
    },
    {
      id: 7,
      image: 'https://product.hstatic.net/1000075078/product/capu-da_487470_400x400_e11f07c213814171b07a5801722e3bb3_large.jpg',
      name: 'Cappuccino Đá',
      price: 49000,
      type: 'Cà Phê',
    },
    {
      id: 8,
      image: 'https://product.hstatic.net/1000075078/product/americano-nong-app_652009_400x400_c4cc077adacd4340bb41a6e1e4710a95_large.jpg',
      name: 'Americano Nóng',
      price: 40000,
      type: 'Cà Phê',
    },
    {
      id: 9,
      image: 'https://product.hstatic.net/1000075078/product/latte-da_438410_400x400_a48fbcd0a33f4ceba1803acbbe1292f4_large.jpg',
      name: 'Latte Đá',
      price: 49000,
      type: 'Cà Phê',
    },
    {
      id: 10,
      image: 'https://product.hstatic.net/1000075078/product/caramel-macchiato-da_fa2503073e5c4f7a98516f1c9d39253b_large.jpg',
      name: 'Caramel Macchiato Đá',
      price: 49000,
      type: 'Cà Phê',
    },
    {
      id: 11,
      image: 'https://product.hstatic.net/1000075078/product/latte_851143_400x400_7305aaa080df4202a26dedf898e7196b_large.jpg',
      name: 'Latte Nóng',
      price: 49000,
      type: 'Cà Phê',
    },
    {
      id: 12,
      image: 'https://product.hstatic.net/1000075078/product/tra-nhan-da_484810_400x400_446acb3ad76a48d38a98855cd7be54cd_large.jpg',
      name: 'Trà Long Nhãn Hạt Chia',
      price: 45000,
      type: 'Trà',
    },
    {
      id: 13,
      image: 'https://product.hstatic.net/1000075078/product/nhan-hat-chia--nong_140427_400x400_dffc402ff03b4558999950a750c0973d_large.jpg',
      name: 'Trà Long Nhãn Hạt Chia Nóng',
      price: 51000,
      type: 'Trà',
    },
    {
      id: 14,
      image: 'https://product.hstatic.net/1000075078/product/tra-sen_905594_400x400_c82fd1b3786d45f380cf4c15e9af7ab9_large.jpg',
      name: 'Trà Hạt Sen Đá',
      price: 45000,
      type: 'Trà',
    },
    {
      id: 15,
      image: 'https://product.hstatic.net/1000075078/product/tra-sen-nong_025153_400x400_b7b0ec5844c546d2a6d139a65be8aa0a_large.jpg',
      name: 'Trà Hạt Sen Nóng',
      price: 51000,
      type: 'Trà',
    },
    {
      id: 16,
      image: 'https://product.hstatic.net/1000075078/product/tra-dao-cam-xa_668678_400x400_207c526c987c4026877ebae748c62afd_large.jpg',
      name: 'Trà Đào Cam Sả Đá',
      price: 45000,
      type: 'Trà',
    },
    {
      id: 17,
      image: 'https://product.hstatic.net/1000075078/product/tdcs-nong_288997_400x400_75f2d80e0db2442e9ab752689cbf1001_large.jpg',
      name: 'Trà Đào Cam Sả Nóng',
      price: 51000,
      type: 'Trà',
    },
    {
      id: 10,
      image: 'https://product.hstatic.net/1000075078/product/caramel-macchiato-da_fa2503073e5c4f7a98516f1c9d39253b_large.jpg',
      name: 'Caramel Macchiato Đá',
      price: 49000,
      type: 'Trà',
    },
    {
      id: 19,
      image: 'https://product.hstatic.net/1000075078/product/hong-tra-latte_618293_400x400_8e7d0a023bfb4537913425ec6048e59b_large.jpg',
      name: 'Hồng Trà Latte Macchiato',
      price: 54000,
      type: 'Trà',
    },
    {
      id: 20,
      image: 'https://product.hstatic.net/1000075078/product/hong-tra-sua-nong_941687_400x400_dfe4a7a23ecd4ca49822fc553909828a_large.jpg',
      name: 'Hồng Trà Sữa Nóng',
      price: 54000,
      type: 'Trà',
    },
    {
      id: 21,
      image: 'https://product.hstatic.net/1000075078/product/hong-tra-sua-tran-chau_326977_400x400_30c57e67d1104ae4b7313cf5d40f3e87_large.jpg',
      name: 'Hồng Trà Sữa Trân Châu',
      price: 54000,
      type: 'Trà',
    },
    {
      id: 22,
      image: 'https://product.hstatic.net/1000075078/product/tra-den-matchiato_430281_400x400_88f47618a6b84c2d9ad633d3298fb390_large.jpg',
      name: 'Trà Đen Macchiato',
      price: 49000,
      type: 'Trà',
    },
    {
      id: 23,
      image: 'https://product.hstatic.net/1000075078/product/tra-sua-mac-ca_377522_400x400_123ab6b1593d4e5c83776a54f6862bbd_large.jpg',
      name: 'Trà Sữa Mắc Ca Trân Châu Trắng',
      price: 49000,
      type: 'Trà',
    },
    {
      id: 24,
      image: 'https://product.hstatic.net/1000075078/product/banhmique_056830_400x400_8b3112e96ce949be82b70c4b4ab994c2_large.jpg',
      name: 'Bánh Mì Que Pate',
      price: 12000,
      type: 'Bánh & Snack',
    },
    {
      id: 25,
      image: 'https://product.hstatic.net/1000075078/product/banh-mi-vn-thit-nguoi_5e777a62ef2841bd9a5baf85c6970166_large.jpg',
      name: 'Bánh Mì VN Thịt Nguội',
      price: 29000,
      type: 'Bánh & Snack',
    },
    {
      id: 26,
      image: 'https://product.hstatic.net/1000075078/product/cha-bong-pho-mai_204282_400x400_8ff5f28305f547c287685bb01a8836fd_large.jpg',
      name: 'Chà Bông Phô Mai',
      price: 32000,
      type: 'Bánh & Snack',
    },
    {
      id: 27,
      image: 'https://product.hstatic.net/1000075078/product/croissant-trung-muoi_880850_400x400_0d8d5e787de8423cb0e60455651a17ee_large.jpg',
      name: 'Croissant Trứng Muối',
      price: 35000,
      type: 'Bánh & Snack',
    },
    {
      id: 28,
      image: 'https://product.hstatic.net/1000075078/product/mochi-kem-dua-dua_f94d5cd4b40a4377937dcf84033d678e_large.jpg',
      name: 'Mochi Kem Dừa Dứa',
      price: 19000,
      type: 'Bánh & Snack',
    },
    {
      id: 29,
      image: 'https://product.hstatic.net/1000075078/product/mochi-kem-phuc-bon-tu_894faa8a39fb43e0828f2125f6c1e8f9_large.jpg',
      name: 'Mochi Kem Phúc Bồn Tử',
      price: 19000,
      type: 'Bánh & Snack',
    },
    {
      id: 30,
      image: 'https://product.hstatic.net/1000075078/product/mochi-kem-viet-quat_1072f38b098d4213889c25128a02bce6_large.jpg',
      name: 'Mochi Kem Việt Quất',
      price: 19000,
      type: 'Bánh & Snack',
    },
    {
      id: 31,
      image: 'https://product.hstatic.net/1000075078/product/mochi-kem-xoai_f402331583f942819b39a8fa2528d9a2_large.jpg',
      name: 'Mochi Kem Xoài',
      price: 19000,
      type: 'Bánh & Snack',
    },
    {
      id: 32,
      image: 'https://product.hstatic.net/1000075078/product/mousse-gau-chocolate_e25675d96c504dacb88f4e56a54ab48b_large.jpg',
      name: 'Mousse Gấu Chocolate',
      price: 39000,
      type: 'Bánh & Snack',
    },
    {
      id: 33,
      image: 'https://product.hstatic.net/1000075078/product/5d92fbc79e12b47db8cabbd0_chanh-day_994413_400x400_333c9a63c0f74d41a11333c637127328_large.jpg',
      name: 'Mousse Passion Cheese',
      price: 29000,
      type: 'Bánh & Snack',
    },
    {
      id: 34,
      image: 'https://product.hstatic.net/1000075078/product/mousse-red-velvet_e732a3a0ffa44f589c8455ab75bc0f60_large.jpg',
      name: 'Mousse Red Velvet',
      price: 29000,
      type: 'Bánh & Snack',
    },
    {
      id: 35,
      image: 'https://product.hstatic.net/1000075078/product/mousse-tiramisu_d396a927d9ba4af284450066bd391148_large.jpg',
      name: 'Mousse Tiramisu',
      price: 32000,
      type: 'Bánh & Snack',
    },
    {
      id: 36,
      image: 'https://product.hstatic.net/1000075078/product/mit-say_666228_400x400_062954ca87384c13ab5044766afbec56_large.jpg',
      name: 'Mít Sấy',
      price: 20000,
      type: 'Bánh & Snack',
    },
    {
      id: 37,
      image: 'https://product.hstatic.net/1000075078/product/cf-da-xay-_1__158038_400x400_aee86b1c0779491f8c2778ddadf41f15_large.jpg',
      name: 'Cà Phê Đá Xay',
      price: 58000,
      type: 'Các Món Khác',
    },
    {
      id: 38,
      image: 'https://product.hstatic.net/1000075078/product/chanh-sa-da-xay_170980_400x400_2c8af8d0cfff43b78a93924d28a1215f_large.jpg',
      name: 'Chanh Sả Đá Xay',
      price: 49000,
      type: 'Các Món Khác',
    },
    {
      id: 39,
      image: 'https://product.hstatic.net/1000075078/product/chocolate-ice-blended_183602_400x400_142587be6f4f4dd0885ba746fd4a8c1a_large.jpg',
      name: 'Chocolate Đá Xay',
      price: 58000,
      type: 'Các Món Khác',
    },
    {
      id: 40,
      image: 'https://product.hstatic.net/1000075078/product/cookies_da_xay_f8296fb5c1ee492fabfe0969ab1fc43b_large.jpg',
      name: 'Cookie Đá Xay',
      price: 58000,
      type: 'Các Món Khác',
    },
    {
      id: 41,
      image: 'https://product.hstatic.net/1000075078/product/daovietquat_033985_400x400_20bfc56b971c47dca8734514a4765675_large.jpg',
      name: 'Đào Việt Quất Đá Xay',
      price: 58000,
      type: 'Các Món Khác',
    },
    {
      id: 42,
      image: 'https://product.hstatic.net/1000075078/product/matchadaxay_622077_400x400_5c617ff524e64e638ad7c868613a832b_large.jpg',
      name: 'Matcha Đá Xay',
      price: 58000,
      type: 'Các Món Khác',
    },
    {
      id: 43,
      image: 'https://product.hstatic.net/1000075078/product/sinh-to-viet-quoc_145138_400x400_ab271b0cd8be42089cd7e25f985c273e_large.jpg',
      name: 'Sinh Tố Việt Quất',
      price: 58000,
      type: 'Các Món Khác',
    },
    {
      id: 44,
      image: 'https://product.hstatic.net/1000075078/product/chocolate-da_877186_400x400_30a43c54fe484ecfbd606937604ef351_large.jpg',
      name: 'Chocolate Đá',
      price: 58000,
      type: 'Các Món Khác',
    },
    {
      id: 45,
      image: 'https://product.hstatic.net/1000075078/product/matcha-latte-da_083173_400x400_5725292025844c5da25a91d6e9b05a4b_large.jpg',
      name: 'Matcha Latte Đá',
      price: 58000,
      type: 'Các Món Khác',
    },
  ])
  const [ourMenu, setOurMenu] = useState([
    {
      id: 1,
      image: 'https://product.hstatic.net/1000075078/product/ca-phe-den-da_6e25255ae31c4f3bbbb502f77e2c100d_large.jpg',
      name: 'Cà Phê Đen Đá',
      price: 29000,
      type: 'Cà Phê',

    },
    {
      id: 10,
      image: 'https://product.hstatic.net/1000075078/product/caramel-macchiato-da_fa2503073e5c4f7a98516f1c9d39253b_large.jpg',
      name: 'Caramel Macchiato Đá',
      price: 49000,
      type: 'Cà Phê',

    },
    {
      id: 23,
      image: 'https://product.hstatic.net/1000075078/product/tra-sua-mac-ca_377522_400x400_123ab6b1593d4e5c83776a54f6862bbd_large.jpg',
      name: 'Trà Sữa Mắc Ca Trân Châu Trắng',
      price: 49000,
      type: 'Trà',

    },
    {
      id: 14,
      image: 'https://product.hstatic.net/1000075078/product/tra-sen_905594_400x400_c82fd1b3786d45f380cf4c15e9af7ab9_large.jpg',
      name: 'Trà Hạt Sen Đá',
      price: 45000,
      type: 'Trà',

    },
    {
      id: 25,
      image: 'https://product.hstatic.net/1000075078/product/banh-mi-vn-thit-nguoi_5e777a62ef2841bd9a5baf85c6970166_large.jpg',
      name: 'Bánh Mì VN Thịt Nguội',
      price: 29000,
      type: 'Bánh & Snack',

    },
    {
      id: 27,
      image: 'https://product.hstatic.net/1000075078/product/croissant-trung-muoi_880850_400x400_0d8d5e787de8423cb0e60455651a17ee_large.jpg',
      name: 'Croissant Trứng Muối',
      price: 35000,
      type: 'Bánh & Snack',

    },
    {
      id: 32,
      image: 'https://product.hstatic.net/1000075078/product/mousse-gau-chocolate_e25675d96c504dacb88f4e56a54ab48b_large.jpg',
      name: 'Mousse Gấu Chocolate',
      price: 39000,
      type: 'Bánh & Snack',

    },
    {
      id: 38,
      image: 'https://product.hstatic.net/1000075078/product/chanh-sa-da-xay_170980_400x400_2c8af8d0cfff43b78a93924d28a1215f_large.jpg',
      name: 'Chanh Sả Đá Xay',
      price: 49000,
      type: 'Các Món Khác',

    },
    {
      id: 41,
      image: 'https://product.hstatic.net/1000075078/product/daovietquat_033985_400x400_20bfc56b971c47dca8734514a4765675_large.jpg',
      name: 'Đào Việt Quất Đá Xay',
      price: 58000,
      type: 'Các Món Khác',

    },
  ])
  const [coffee, setCoffee] = useState([
    {
      id: 0,
      image: 'https://product.hstatic.net/1000075078/product/bac-siu-da_9bf82220a1a54847aa7357de541e7552_large.jpg',
      name: 'Bạc Sỉu Đá',
      price: 29000,
      type: 'Cà Phê',
    },
    {
      id: 1,
      image: 'https://product.hstatic.net/1000075078/product/ca-phe-den-da_6e25255ae31c4f3bbbb502f77e2c100d_large.jpg',
      name: 'Cà Phê Đen Đá',
      price: 29000,
      type: 'Cà Phê',
    },
    {
      id: 2,
      image: 'https://product.hstatic.net/1000075078/product/ca-phe-sua-da_b00c53d18cd84144a164790323106a2f_large.jpg',
      name: 'Cà Phê Sữa Đá',
      price: 29000,
      type: 'Cà Phê',
    },
    {
      id: 3,
      image: 'https://product.hstatic.net/1000075078/product/mocha-da_538820_400x400_73100250cb904ad0aad79a36a59aeea7_large.jpg',
      name: 'Mocha Đá',
      price: 49000,
      type: 'Cà Phê',
    },
    {
      id: 4,
      image: 'https://product.hstatic.net/1000075078/product/espressonong_612688_400x400_8fdb6dc2f37a4445b43a7ce3ee4aebb0_large.jpg',
      name: 'Espresso Nóng',
      price: 40000,
      type: 'Cà Phê',
    },
    {
      id: 5,
      image: 'https://product.hstatic.net/1000075078/product/cfdenda-espressoda_185438_400x400_bc9c244c3c644eccb3edad8578569126_large.jpg',
      name: 'Espresso Đá',
      price: 45000,
      type: 'Cà Phê',
    },
    {
      id: 6,
      image: 'https://product.hstatic.net/1000075078/product/cappuccino_621532_400x400_67c12956866c442585a6d47d0771a978_large.jpg',
      name: 'Cappuccino Nóng',
      price: 49000,
      type: 'Cà Phê',
    },
    {
      id: 7,
      image: 'https://product.hstatic.net/1000075078/product/capu-da_487470_400x400_e11f07c213814171b07a5801722e3bb3_large.jpg',
      name: 'Cappuccino Đá',
      price: 49000,
      type: 'Cà Phê',
    },
    {
      id: 8,
      image: 'https://product.hstatic.net/1000075078/product/americano-nong-app_652009_400x400_c4cc077adacd4340bb41a6e1e4710a95_large.jpg',
      name: 'Americano Nóng',
      price: 40000,
      type: 'Cà Phê',
    },
    {
      id: 9,
      image: 'https://product.hstatic.net/1000075078/product/latte-da_438410_400x400_a48fbcd0a33f4ceba1803acbbe1292f4_large.jpg',
      name: 'Latte Đá',
      price: 49000,
      type: 'Cà Phê',
    },
    {
      id: 10,
      image: 'https://product.hstatic.net/1000075078/product/caramel-macchiato-da_fa2503073e5c4f7a98516f1c9d39253b_large.jpg',
      name: 'Caramel Macchiato Đá',
      price: 49000,
      type: 'Cà Phê',
    },
    {
      id: 11,
      image: 'https://product.hstatic.net/1000075078/product/latte_851143_400x400_7305aaa080df4202a26dedf898e7196b_large.jpg',
      name: 'Latte Nóng',
      price: 49000,
      type: 'Cà Phê',
    },
  ])
  const [tea, setTea] = useState([
    {
      id: 12,
      image: 'https://product.hstatic.net/1000075078/product/tra-nhan-da_484810_400x400_446acb3ad76a48d38a98855cd7be54cd_large.jpg',
      name: 'Trà Long Nhãn Hạt Chia',
      price: 45000,
      type: 'Trà',
    },
    {
      id: 13,
      image: 'https://product.hstatic.net/1000075078/product/nhan-hat-chia--nong_140427_400x400_dffc402ff03b4558999950a750c0973d_large.jpg',
      name: 'Trà Long Nhãn Hạt Chia Nóng',
      price: 51000,
      type: 'Trà',
    },
    {
      id: 14,
      image: 'https://product.hstatic.net/1000075078/product/tra-sen_905594_400x400_c82fd1b3786d45f380cf4c15e9af7ab9_large.jpg',
      name: 'Trà Hạt Sen Đá',
      price: 45000,
      type: 'Trà',
    },
    {
      id: 15,
      image: 'https://product.hstatic.net/1000075078/product/tra-sen-nong_025153_400x400_b7b0ec5844c546d2a6d139a65be8aa0a_large.jpg',
      name: 'Trà Hạt Sen Nóng',
      price: 51000,
      type: 'Trà',
    },
    {
      id: 16,
      image: 'https://product.hstatic.net/1000075078/product/tra-dao-cam-xa_668678_400x400_207c526c987c4026877ebae748c62afd_large.jpg',
      name: 'Trà Đào Cam Sả Đá',
      price: 45000,
      type: 'Trà',
    },
    {
      id: 17,
      image: 'https://product.hstatic.net/1000075078/product/tdcs-nong_288997_400x400_75f2d80e0db2442e9ab752689cbf1001_large.jpg',
      name: 'Trà Đào Cam Sả Nóng',
      price: 51000,
      type: 'Trà',
    },
    {
      id: 10,
      image: 'https://product.hstatic.net/1000075078/product/caramel-macchiato-da_fa2503073e5c4f7a98516f1c9d39253b_large.jpg',
      name: 'Caramel Macchiato Đá',
      price: 49000,
      type: 'Trà',
    },
    {
      id: 19,
      image: 'https://product.hstatic.net/1000075078/product/hong-tra-latte_618293_400x400_8e7d0a023bfb4537913425ec6048e59b_large.jpg',
      name: 'Hồng Trà Latte Macchiato',
      price: 54000,
      type: 'Trà',
    },
    {
      id: 20,
      image: 'https://product.hstatic.net/1000075078/product/hong-tra-sua-nong_941687_400x400_dfe4a7a23ecd4ca49822fc553909828a_large.jpg',
      name: 'Hồng Trà Sữa Nóng',
      price: 54000,
      type: 'Trà',
    },
    {
      id: 21,
      image: 'https://product.hstatic.net/1000075078/product/hong-tra-sua-tran-chau_326977_400x400_30c57e67d1104ae4b7313cf5d40f3e87_large.jpg',
      name: 'Hồng Trà Sữa Trân Châu',
      price: 54000,
      type: 'Trà',
    },
    {
      id: 22,
      image: 'https://product.hstatic.net/1000075078/product/tra-den-matchiato_430281_400x400_88f47618a6b84c2d9ad633d3298fb390_large.jpg',
      name: 'Trà Đen Macchiato',
      price: 49000,
      type: 'Trà',
    },
    {
      id: 23,
      image: 'https://product.hstatic.net/1000075078/product/tra-sua-mac-ca_377522_400x400_123ab6b1593d4e5c83776a54f6862bbd_large.jpg',
      name: 'Trà Sữa Mắc Ca Trân Châu Trắng',
      price: 49000,
      type: 'Trà',
    },
  ])
  const [cakeAndSnack, setCakeAndSnack] = useState([
    {
      id: 24,
      image: 'https://product.hstatic.net/1000075078/product/banhmique_056830_400x400_8b3112e96ce949be82b70c4b4ab994c2_large.jpg',
      name: 'Bánh Mì Que Pate',
      price: 12000,
      type: 'Bánh & Snack',
    },
    {
      id: 25,
      image: 'https://product.hstatic.net/1000075078/product/banh-mi-vn-thit-nguoi_5e777a62ef2841bd9a5baf85c6970166_large.jpg',
      name: 'Bánh Mì VN Thịt Nguội',
      price: 29000,
      type: 'Bánh & Snack',
    },
    {
      id: 26,
      image: 'https://product.hstatic.net/1000075078/product/cha-bong-pho-mai_204282_400x400_8ff5f28305f547c287685bb01a8836fd_large.jpg',
      name: 'Chà Bông Phô Mai',
      price: 32000,
      type: 'Bánh & Snack',
    },
    {
      id: 27,
      image: 'https://product.hstatic.net/1000075078/product/croissant-trung-muoi_880850_400x400_0d8d5e787de8423cb0e60455651a17ee_large.jpg',
      name: 'Croissant Trứng Muối',
      price: 35000,
      type: 'Bánh & Snack',
    },
    {
      id: 28,
      image: 'https://product.hstatic.net/1000075078/product/mochi-kem-dua-dua_f94d5cd4b40a4377937dcf84033d678e_large.jpg',
      name: 'Mochi Kem Dừa Dứa',
      price: 19000,
      type: 'Bánh & Snack',
    },
    {
      id: 29,
      image: 'https://product.hstatic.net/1000075078/product/mochi-kem-phuc-bon-tu_894faa8a39fb43e0828f2125f6c1e8f9_large.jpg',
      name: 'Mochi Kem Phúc Bồn Tử',
      price: 19000,
      type: 'Bánh & Snack',
    },
    {
      id: 30,
      image: 'https://product.hstatic.net/1000075078/product/mochi-kem-viet-quat_1072f38b098d4213889c25128a02bce6_large.jpg',
      name: 'Mochi Kem Việt Quất',
      price: 19000,
      type: 'Bánh & Snack',
    },
    {
      id: 31,
      image: 'https://product.hstatic.net/1000075078/product/mochi-kem-xoai_f402331583f942819b39a8fa2528d9a2_large.jpg',
      name: 'Mochi Kem Xoài',
      price: 19000,
      type: 'Bánh & Snack',
    },
    {
      id: 32,
      image: 'https://product.hstatic.net/1000075078/product/mousse-gau-chocolate_e25675d96c504dacb88f4e56a54ab48b_large.jpg',
      name: 'Mousse Gấu Chocolate',
      price: 39000,
      type: 'Bánh & Snack',
    },
    {
      id: 33,
      image: 'https://product.hstatic.net/1000075078/product/5d92fbc79e12b47db8cabbd0_chanh-day_994413_400x400_333c9a63c0f74d41a11333c637127328_large.jpg',
      name: 'Mousse Passion Cheese',
      price: 29000,
      type: 'Bánh & Snack',
    },
    {
      id: 34,
      image: 'https://product.hstatic.net/1000075078/product/mousse-red-velvet_e732a3a0ffa44f589c8455ab75bc0f60_large.jpg',
      name: 'Mousse Red Velvet',
      price: 29000,
      type: 'Bánh & Snack',
    },
    {
      id: 35,
      image: 'https://product.hstatic.net/1000075078/product/mousse-tiramisu_d396a927d9ba4af284450066bd391148_large.jpg',
      name: 'Mousse Tiramisu',
      price: 32000,
      type: 'Bánh & Snack',
    },
    {
      id: 36,
      image: 'https://product.hstatic.net/1000075078/product/mit-say_666228_400x400_062954ca87384c13ab5044766afbec56_large.jpg',
      name: 'Mít Sấy',
      price: 20000,
      type: 'Bánh & Snack',
    },
  ])
  const [another, setAnother] = useState([
    {
      id: 37,
      image: 'https://product.hstatic.net/1000075078/product/cf-da-xay-_1__158038_400x400_aee86b1c0779491f8c2778ddadf41f15_large.jpg',
      name: 'Cà Phê Đá Xay',
      price: 58000,
      type: 'Các Món Khác',
    },
    {
      id: 38,
      image: 'https://product.hstatic.net/1000075078/product/chanh-sa-da-xay_170980_400x400_2c8af8d0cfff43b78a93924d28a1215f_large.jpg',
      name: 'Chanh Sả Đá Xay',
      price: 49000,
      type: 'Các Món Khác',
    },
    {
      id: 39,
      image: 'https://product.hstatic.net/1000075078/product/chocolate-ice-blended_183602_400x400_142587be6f4f4dd0885ba746fd4a8c1a_large.jpg',
      name: 'Chocolate Đá Xay',
      price: 58000,
      type: 'Các Món Khác',
    },
    {
      id: 40,
      image: 'https://product.hstatic.net/1000075078/product/cookies_da_xay_f8296fb5c1ee492fabfe0969ab1fc43b_large.jpg',
      name: 'Cookie Đá Xay',
      price: 58000,
      type: 'Các Món Khác',
    },
    {
      id: 41,
      image: 'https://product.hstatic.net/1000075078/product/daovietquat_033985_400x400_20bfc56b971c47dca8734514a4765675_large.jpg',
      name: 'Đào Việt Quất Đá Xay',
      price: 58000,
      type: 'Các Món Khác',
    },
    {
      id: 42,
      image: 'https://product.hstatic.net/1000075078/product/matchadaxay_622077_400x400_5c617ff524e64e638ad7c868613a832b_large.jpg',
      name: 'Matcha Đá Xay',
      price: 58000,
      type: 'Các Món Khác',
    },
    {
      id: 43,
      image: 'https://product.hstatic.net/1000075078/product/sinh-to-viet-quoc_145138_400x400_ab271b0cd8be42089cd7e25f985c273e_large.jpg',
      name: 'Sinh Tố Việt Quất',
      price: 58000,
      type: 'Các Món Khác',
    },
    {
      id: 44,
      image: 'https://product.hstatic.net/1000075078/product/chocolate-da_877186_400x400_30a43c54fe484ecfbd606937604ef351_large.jpg',
      name: 'Chocolate Đá',
      price: 58000,
      type: 'Các Món Khác',
    },
    {
      id: 45,
      image: 'https://product.hstatic.net/1000075078/product/matcha-latte-da_083173_400x400_5725292025844c5da25a91d6e9b05a4b_large.jpg',
      name: 'Matcha Latte Đá',
      price: 58000,
      type: 'Các Món Khác',
    },
  ])
  const [initStory, setInitStory] = useState([
    {
      id: 0,
      title: 'CÁCH NHẬN BIẾT HƯƠNG VỊ CÀ PHÊ ROBUSTA NGUYÊN CHẤT DỄ DÀNG NHẤT',
      subtitle: 'Cùng Arabica, Robusta cũng là loại cà phê nổi tiếng được sử dụng phổ biến ở Việt Nam và nhiều nước khác trên thế giới. Với nhiều đặc điểm riêng, không quá khó để có thể nhận ra hương vị của loại cà phê trứ danh này.',
      image: 'https://file.hstatic.net/1000075078/article/thecoffehouse_ca_phe_01_b4adbd88db6e4ca3b7c2c5934d1a1ed9_master.jpg',
      type: 'coffeeholic'
    },
    {
      id: 1,
      title: 'CÁCH PHA CÀ PHÊ PHIN THƠM NGON TRÒN VỊ',
      subtitle: 'Có nhiều cách để pha một ly cà phê ngon, nhưng đối với nhiều người Việt giây phút đợi chờ những giọt cà phê rơi từ chiếc phin đã trở thành nét văn hóa ăn sâu trong tiềm thức. Để tạo nên một ly cà phê phin chuẩn vị, không chỉ cần sự tinh tế trong cách chọn loại cà phê mà còn cả sự tỉ mỉ trong từng bước pha.',
      imgae: 'https://file.hstatic.net/1000075078/article/thecoffeehouse_caphe_2_aacf152c62064c40ab804a66ffc706d1_master.jpg',
      type: 'coffeeholic'
    },
    {
      id: 2,
      title: '8 LỢI ÍCH BẤT NGỜ CỦA CÀ PHÊ COLD BREW',
      subtitle: 'Cold brew là thức uống rất được yêu thích trong thời gian gần đây. Không chỉ có hương thơm đặc trưng và vị lôi cuốn, nó còn có nhiều lợi ích cho sức khỏe. Cùng The Coffee House tìm hiểu 8 lợi ích nổi bật của loại cà phê lạnh siêu hot này. ',
      imgae: 'https://file.hstatic.net/1000075078/article/img_8668_grande-1_accad1e4fa37487881277df2fae1ef4a_master.jpg',
      type: 'coffeeholic'
    },
    {
      id: 3,
      title: 'TẠI SAO CÀ PHÊ CÓ VỊ CHUA?',
      subtitle: 'Nhiều người khi uống cà phê cảm thấy có vị chua thường e ngại rằng cà phê hỏng, kém chất lượng hay gặp các vấn đề trong quá trình pha chế và bảo quản. Tuy nhiên, điều này chưa chính xác. Cả hương vị của Arabica hay Robusta nguyên chất, trải qua quá trình chế biến, rang xay đều có vị chua nhẹ. Vậy nên, cà phê có vị chua chua, vẫn giữ được hương thơm đặc trưng vốn có của nó thì bạn có thể yên tâm đó không phải là cà phê hỏng. The Coffee House sẽ chỉ ra những lý do khiến cà phê có vị chua tự nhiên. ',
      imgae: 'https://file.hstatic.net/1000075078/article/_downloader.la_-61e6d5a3a5d26_7b6959cb5b1e4716a4a60869dae53074_master.jpg',
      type: 'coffeeholic'
    },
    {
      id: 4,
      title: 'KỸ THUẬT TRỒNG CÂY CÀ PHÊ NĂNG SUẤT, CHẤT LƯỢNG CAO',
      subtitle: 'Cà phê sẽ càng ngon khi được trồng ở vùng đất cao nguyên, nơi có khí hậu nhiệt đới nóng ẩm, mưa nhiều, đất đai màu mỡ. Nó có khả năng phát triển tốt ở nơi có nhiều ánh sáng, độ pH lý tưởng ở mức 6 - 6.5, đặc biệt để hạt cà phê cho năng suất và chất lượng cao, cần phải lưu ý các kỹ thuật  trồng trọt sau. ',
      imgae: 'https://file.hstatic.net/1000075078/article/_downloader.la_-61e2dbe1d15cb_f703352d67824cd298ff927cdba56aa9_master.jpg',
      type: 'coffeeholic'
    },
    {
      id: 5,
      title: 'CHỌN NHIỆT ĐỘ NƯỚC ĐỂ PHA TRÀ ĐÚNG CHUẨN CHUYÊN GIA',
      subtitle: 'Tùy thuộc vào từng loại trà, cần sử dụng nước sôi với nhiệt độ tương thích để khi pha chế có thể khơi dậy đầy đủ hương vị thơm ngon của trà. ',
      imgae: 'https://file.hstatic.net/1000075078/article/thecoffeehouse_nuoc_pha_tra_07_4aff69297bfa4bbab42f18b27c2c11f0_master.jpg',
      type: 'teaholic'
    },
    {
      id: 6,
      title: 'CÁCH KHAI ẤM TỬ SA ĐỂ GỢI VỊ NGON CỦA TRÀ',
      subtitle: 'Đối với giới trà đạo đã quá quen thuộc với ấm tử sa vì nó nổi tiếng là loại ấm pha trà ngon bậc nhất. Pha trà bằng ấm tử sa thì hương vị của trà được hấp thụ một cách trọn vẹn và nếu như đã thưởng thức một lần thì thật khó quên. Thế nhưng, để đạt được điều tuyệt vời đó, việc đầu tiên và rất quan trọng đó là phải biết khai ấm tử sa đúng cách. ',
      imgae: 'https://file.hstatic.net/1000075078/article/thecoffeehouse_amtusa_07_e9d40a62b6524ed7b5c3232c5031a493_master.jpg',
      type: 'teaholic'
    },
    {
      id: 7,
      title: 'KHÁC BIỆT CƠ BẢN GIỮA TRÀ XANH VÀ TRÀ ĐEN',
      subtitle: 'Trà xanh và trà đen đều được tạo nên từ lá của cây trà có tên khoa học là Camellia Sinensis. Tuy nhiên, hai loại trà này có những khác biệt rõ rệt về đặc tính, thành phần các chất, cũng như công dụng của nó. ',
      imgae: 'https://file.hstatic.net/1000075078/article/_downloader.la_-61e809d69a53a_f3ffc07df648474987f58d0233790230_master.jpg',
      type: 'teaholic'
    },
    {
      id: 8,
      title: 'BẠN CÓ HIỂU ĐÚNG VỀ TRÀ TƯƠI VÀ TRÀ KHÔ?',
      subtitle: 'Nhắc đến trà là nhắc đến một thế giới sống động, phong phú với đầy những sắc màu, hương vị và đa dạng các thể loại. Trong đó, trà tươi và trà khô là hai loại đối lập nhau về trạng thái. Để bạn có cái nhìn chính xác về hai loại trà này, The Coffee House có những chia sẻ như sau: . ',
      imgae: 'https://file.hstatic.net/1000075078/article/1_24f8b1dda3f3488bacd70cab9accc20a_master.jpg',
      type: 'teaholic'
    },
    {
      id: 9,
      title: 'VĂN HÓA THƯỞNG THỨC CÀ PHÊ CỦA NGƯỜI CHÂU Á',
      subtitle: 'Văn hoá cà phê sẽ phụ thuộc vào những yếu tố liên quan đến “hình thái và phong cách” của làn sóng cà phê mà quốc gia đó chịu ảnh hưởng. Ngoài ra, chính nhịp sống, những đặc điểm riêng của mỗi vùng đất và sở thích, tính cách của những người dân bản địa sẽ quyết định trực tiếp đến văn hoá cà phê. ',
      imgae: 'https://file.hstatic.net/1000075078/article/_downloader.la_-61dfea3c26b86_7a3a3396efc34d0899ef4e8ac516034d_master.jpg',
      type: 'teaholic'
    },
    {
      id: 10,
      title: 'CÁC LOẠI CÀ PHÊ TƯƠNG ỨNG VỚI 12 CUNG HOÀNG ĐẠO',
      subtitle: 'Dương Cưu là những con người nhiệt huyết, nhanh nhẹn, năng động và đầy tham vọng. Vậy nên, một tách Espresso đậm đà với đặc tính pha chế nhanh gọn, tức thì sẽ ngay lập tức mang đến cho Bạch Dương một trải nghiệm hài lòng, sẵn sàng chiến đấu với những thử thách mới.  ',
      imgae: 'https://file.hstatic.net/1000075078/article/_downloader.la_-61d56ddd190dd_82f9f42332e745a6b12b1b02f84f4876_master.jpg',
      type: 'blog'
    },
    {
      id: 11,
      title: '5 MÓN ĂN CỰC NGON ĐƯỢC CHẾ BIẾN ĐƠN GIẢN TỪ CÀ PHÊ',
      subtitle: 'Hương cà phê thơm đặc trưng, vị đắng nhẹ và ngọt ngào khi kết hợp cùng đường, sữa và các nguyên liệu khác đã làm nên những món ăn hấp dẫn mà nhiều người yêu thích. Những món dưới đây thường được những bạn trẻ và các “mẹ đảm” làm vì cực ngon và khá dễ, cùng làm thử tay nghề và thưởng thức với cả nhà nhé.',
      imgae: 'https://file.hstatic.net/1000075078/article/_downloader.la_-61ca8ea1c1b14_3da462b21ff04e15b9d8d8fc69357e9a_master.jpg',
      type: 'blog'
    },
    {
      id: 12,
      title: 'MÊ MẨN CÁC MÓN ĂN TỪ TRÀ XANH',
      subtitle: 'Bên cạnh những thức uống từ trà xanh được yêu thích như Matcha đá xay, Matcha Latte, Trà sữa Matcha thì còn rất nhiều món ăn từ trà xanh khác cực kỳ hấp dẫn và được rất nhiều người yêu thích. Hương thơm dễ chịu, vị đắng ngọt nhẹ nhàng, màu sắc bắt mắt và tươi mát là những đặc trưng cuốn hút rất riêng của các món ăn được chế biến từ trà xanh matcha. Những món dưới đây đã khiến rất nhiều người say đắm, nếu chưa từng thưởng thức thì thử ngay bạn nhé. ',
      imgae: 'https://file.hstatic.net/1000075078/article/blog_892d5f75b50242c2a805a4d5808b2596_master.jpg',
      type: 'blog'
    },
    {
      id: 13,
      title: 'THÓI QUEN ĐỌC SÁCH CỦA NGƯỜI TRẺ',
      subtitle: 'Vốn dĩ người trẻ thích “bay nhảy”, thích sự hiện đại, sôi nổi, năng động và thích trải nghiệm những cái mới. Vậy nên đọc sách tại quán cà phê đã dần trở thành phong cách và xu hướng thịnh hành trong giới trẻ hiện nay.',
      imgae: 'https://file.hstatic.net/1000075078/article/110020568_2721011564839519_1954095004206714116_n_5c329f4c019a4ab49f3b199f8bc7cf81_master.jpg',
      type: 'blog'
    },
    {
      id: 14,
      title: 'SỐNG XANH CÙNG CÀ PHÊ',
      subtitle: '“Sống xanh” là khái niệm sống thân thiện với môi trường, ưu tiên sử dụng nguồn nguyên liệu xanh, những vật dụng, sản phẩm có thể tái chế… từ đó đảm bảo một cuộc sống phát triển bền vững. Khái niệm sống xanh vẫn đang rất nóng và đáng mừng khi có nhiều người ý thức và chung tay đồng hành. ',
      imgae: 'https://file.hstatic.net/1000075078/article/3_84a7b01b11534be8a28b78d26f2b502c_master.jpg',
      type: 'blog'
    },
  ])

  const [coffeeholic, setCoffeeholic] = useState([
    {
      id: 0,
      title: 'CÁCH NHẬN BIẾT HƯƠNG VỊ CÀ PHÊ ROBUSTA NGUYÊN CHẤT DỄ DÀNG NHẤT',
      subtitle: 'Cùng Arabica, Robusta cũng là loại cà phê nổi tiếng được sử dụng phổ biến ở Việt Nam và nhiều nước khác trên thế giới. Với nhiều đặc điểm riêng, không quá khó để có thể nhận ra hương vị của loại cà phê trứ danh này.',
      image: 'https://file.hstatic.net/1000075078/article/thecoffehouse_ca_phe_01_b4adbd88db6e4ca3b7c2c5934d1a1ed9_master.jpg',
      type: 'coffeeholic'
    },
    {
      id: 1,
      title: 'CÁCH PHA CÀ PHÊ PHIN THƠM NGON TRÒN VỊ',
      subtitle: 'Có nhiều cách để pha một ly cà phê ngon, nhưng đối với nhiều người Việt giây phút đợi chờ những giọt cà phê rơi từ chiếc phin đã trở thành nét văn hóa ăn sâu trong tiềm thức. Để tạo nên một ly cà phê phin chuẩn vị, không chỉ cần sự tinh tế trong cách chọn loại cà phê mà còn cả sự tỉ mỉ trong từng bước pha.',
      imgae: 'https://file.hstatic.net/1000075078/article/thecoffeehouse_caphe_2_aacf152c62064c40ab804a66ffc706d1_master.jpg',
      type: 'coffeeholic'
    },
    {
      id: 2,
      title: '8 LỢI ÍCH BẤT NGỜ CỦA CÀ PHÊ COLD BREW',
      subtitle: 'Cold brew là thức uống rất được yêu thích trong thời gian gần đây. Không chỉ có hương thơm đặc trưng và vị lôi cuốn, nó còn có nhiều lợi ích cho sức khỏe. Cùng The Coffee House tìm hiểu 8 lợi ích nổi bật của loại cà phê lạnh siêu hot này. ',
      imgae: 'https://file.hstatic.net/1000075078/article/img_8668_grande-1_accad1e4fa37487881277df2fae1ef4a_master.jpg',
      type: 'coffeeholic'
    },
    {
      id: 3,
      title: 'TẠI SAO CÀ PHÊ CÓ VỊ CHUA?',
      subtitle: 'Nhiều người khi uống cà phê cảm thấy có vị chua thường e ngại rằng cà phê hỏng, kém chất lượng hay gặp các vấn đề trong quá trình pha chế và bảo quản. Tuy nhiên, điều này chưa chính xác. Cả hương vị của Arabica hay Robusta nguyên chất, trải qua quá trình chế biến, rang xay đều có vị chua nhẹ. Vậy nên, cà phê có vị chua chua, vẫn giữ được hương thơm đặc trưng vốn có của nó thì bạn có thể yên tâm đó không phải là cà phê hỏng. The Coffee House sẽ chỉ ra những lý do khiến cà phê có vị chua tự nhiên. ',
      imgae: 'https://file.hstatic.net/1000075078/article/_downloader.la_-61e6d5a3a5d26_7b6959cb5b1e4716a4a60869dae53074_master.jpg',
      type: 'coffeeholic'
    },
    {
      id: 4,
      title: 'KỸ THUẬT TRỒNG CÂY CÀ PHÊ NĂNG SUẤT, CHẤT LƯỢNG CAO',
      subtitle: 'Cà phê sẽ càng ngon khi được trồng ở vùng đất cao nguyên, nơi có khí hậu nhiệt đới nóng ẩm, mưa nhiều, đất đai màu mỡ. Nó có khả năng phát triển tốt ở nơi có nhiều ánh sáng, độ pH lý tưởng ở mức 6 - 6.5, đặc biệt để hạt cà phê cho năng suất và chất lượng cao, cần phải lưu ý các kỹ thuật  trồng trọt sau. ',
      imgae: 'https://file.hstatic.net/1000075078/article/_downloader.la_-61e2dbe1d15cb_f703352d67824cd298ff927cdba56aa9_master.jpg',
      type: 'coffeeholic'
    },
  ])

  const [teaholic, setTeaholic] = useState([
    {
      id: 5,
      title: 'CHỌN NHIỆT ĐỘ NƯỚC ĐỂ PHA TRÀ ĐÚNG CHUẨN CHUYÊN GIA',
      subtitle: 'Tùy thuộc vào từng loại trà, cần sử dụng nước sôi với nhiệt độ tương thích để khi pha chế có thể khơi dậy đầy đủ hương vị thơm ngon của trà. ',
      imgae: 'https://file.hstatic.net/1000075078/article/thecoffeehouse_nuoc_pha_tra_07_4aff69297bfa4bbab42f18b27c2c11f0_master.jpg',
      type: 'teaholic'
    },
    {
      id: 6,
      title: 'CÁCH KHAI ẤM TỬ SA ĐỂ GỢI VỊ NGON CỦA TRÀ',
      subtitle: 'Đối với giới trà đạo đã quá quen thuộc với ấm tử sa vì nó nổi tiếng là loại ấm pha trà ngon bậc nhất. Pha trà bằng ấm tử sa thì hương vị của trà được hấp thụ một cách trọn vẹn và nếu như đã thưởng thức một lần thì thật khó quên. Thế nhưng, để đạt được điều tuyệt vời đó, việc đầu tiên và rất quan trọng đó là phải biết khai ấm tử sa đúng cách. ',
      imgae: 'https://file.hstatic.net/1000075078/article/thecoffeehouse_amtusa_07_e9d40a62b6524ed7b5c3232c5031a493_master.jpg',
      type: 'teaholic'
    },
    {
      id: 7,
      title: 'KHÁC BIỆT CƠ BẢN GIỮA TRÀ XANH VÀ TRÀ ĐEN',
      subtitle: 'Trà xanh và trà đen đều được tạo nên từ lá của cây trà có tên khoa học là Camellia Sinensis. Tuy nhiên, hai loại trà này có những khác biệt rõ rệt về đặc tính, thành phần các chất, cũng như công dụng của nó. ',
      imgae: 'https://file.hstatic.net/1000075078/article/_downloader.la_-61e809d69a53a_f3ffc07df648474987f58d0233790230_master.jpg',
      type: 'teaholic'
    },
    {
      id: 8,
      title: 'BẠN CÓ HIỂU ĐÚNG VỀ TRÀ TƯƠI VÀ TRÀ KHÔ?',
      subtitle: 'Nhắc đến trà là nhắc đến một thế giới sống động, phong phú với đầy những sắc màu, hương vị và đa dạng các thể loại. Trong đó, trà tươi và trà khô là hai loại đối lập nhau về trạng thái. Để bạn có cái nhìn chính xác về hai loại trà này, The Coffee House có những chia sẻ như sau: . ',
      imgae: 'https://file.hstatic.net/1000075078/article/1_24f8b1dda3f3488bacd70cab9accc20a_master.jpg',
      type: 'teaholic'
    },
    {
      id: 9,
      title: 'VĂN HÓA THƯỞNG THỨC CÀ PHÊ CỦA NGƯỜI CHÂU Á',
      subtitle: 'Văn hoá cà phê sẽ phụ thuộc vào những yếu tố liên quan đến “hình thái và phong cách” của làn sóng cà phê mà quốc gia đó chịu ảnh hưởng. Ngoài ra, chính nhịp sống, những đặc điểm riêng của mỗi vùng đất và sở thích, tính cách của những người dân bản địa sẽ quyết định trực tiếp đến văn hoá cà phê. ',
      imgae: 'https://file.hstatic.net/1000075078/article/_downloader.la_-61dfea3c26b86_7a3a3396efc34d0899ef4e8ac516034d_master.jpg',
      type: 'teaholic'
    },
  ])

  const [blog, setBlog] = useState([
    {
      id: 10,
      title: 'CÁC LOẠI CÀ PHÊ TƯƠNG ỨNG VỚI 12 CUNG HOÀNG ĐẠO',
      subtitle: 'Dương Cưu là những con người nhiệt huyết, nhanh nhẹn, năng động và đầy tham vọng. Vậy nên, một tách Espresso đậm đà với đặc tính pha chế nhanh gọn, tức thì sẽ ngay lập tức mang đến cho Bạch Dương một trải nghiệm hài lòng, sẵn sàng chiến đấu với những thử thách mới.  ',
      imgae: 'https://file.hstatic.net/1000075078/article/_downloader.la_-61d56ddd190dd_82f9f42332e745a6b12b1b02f84f4876_master.jpg',
      type: 'blog'
    },
    {
      id: 11,
      title: '5 MÓN ĂN CỰC NGON ĐƯỢC CHẾ BIẾN ĐƠN GIẢN TỪ CÀ PHÊ',
      subtitle: 'Hương cà phê thơm đặc trưng, vị đắng nhẹ và ngọt ngào khi kết hợp cùng đường, sữa và các nguyên liệu khác đã làm nên những món ăn hấp dẫn mà nhiều người yêu thích. Những món dưới đây thường được những bạn trẻ và các “mẹ đảm” làm vì cực ngon và khá dễ, cùng làm thử tay nghề và thưởng thức với cả nhà nhé.',
      imgae: 'https://file.hstatic.net/1000075078/article/_downloader.la_-61ca8ea1c1b14_3da462b21ff04e15b9d8d8fc69357e9a_master.jpg',
      type: 'blog'
    },
    {
      id: 12,
      title: 'MÊ MẨN CÁC MÓN ĂN TỪ TRÀ XANH',
      subtitle: 'Bên cạnh những thức uống từ trà xanh được yêu thích như Matcha đá xay, Matcha Latte, Trà sữa Matcha thì còn rất nhiều món ăn từ trà xanh khác cực kỳ hấp dẫn và được rất nhiều người yêu thích. Hương thơm dễ chịu, vị đắng ngọt nhẹ nhàng, màu sắc bắt mắt và tươi mát là những đặc trưng cuốn hút rất riêng của các món ăn được chế biến từ trà xanh matcha. Những món dưới đây đã khiến rất nhiều người say đắm, nếu chưa từng thưởng thức thì thử ngay bạn nhé. ',
      imgae: 'https://file.hstatic.net/1000075078/article/blog_892d5f75b50242c2a805a4d5808b2596_master.jpg',
      type: 'blog'
    },
    {
      id: 13,
      title: 'THÓI QUEN ĐỌC SÁCH CỦA NGƯỜI TRẺ',
      subtitle: 'Vốn dĩ người trẻ thích “bay nhảy”, thích sự hiện đại, sôi nổi, năng động và thích trải nghiệm những cái mới. Vậy nên đọc sách tại quán cà phê đã dần trở thành phong cách và xu hướng thịnh hành trong giới trẻ hiện nay.',
      imgae: 'https://file.hstatic.net/1000075078/article/110020568_2721011564839519_1954095004206714116_n_5c329f4c019a4ab49f3b199f8bc7cf81_master.jpg',
      type: 'blog'
    },
    {
      id: 14,
      title: 'SỐNG XANH CÙNG CÀ PHÊ',
      subtitle: '“Sống xanh” là khái niệm sống thân thiện với môi trường, ưu tiên sử dụng nguồn nguyên liệu xanh, những vật dụng, sản phẩm có thể tái chế… từ đó đảm bảo một cuộc sống phát triển bền vững. Khái niệm sống xanh vẫn đang rất nóng và đáng mừng khi có nhiều người ý thức và chung tay đồng hành. ',
      imgae: 'https://file.hstatic.net/1000075078/article/3_84a7b01b11534be8a28b78d26f2b502c_master.jpg',
      type: 'blog'
    },
  ])

  const [menuChildren, setMenuChildren] = useLocalStorage('DETAILS_MENU_CHILDREN', [
  ])

  const [alwaysStories, setAlwaysStories] = useState([

  ])
  const handleClickMenuChildren = (id) => {
    setMenuChildren(initMenu.filter(menu => menu.id === id))
  }
  const navItems = [
    { id: 0, content: 'Tất Cả', link: '/menu', contentItems: [], },
    { id: 1, content: 'Cà Phê', link: '/coffee', contentItems: ['Cà Phê Việt Nam', 'Cà Phê Máy', 'Cold Brew'], },
    { id: 2, content: 'Trà', link: '/tea', contentItems: ['Trà Trái Cây', 'Trà Sữa Macchiato',] },
    { id: 3, content: 'Bánh & Snack', link: '/cakeAndSnack', contentItems: ['Bánh Mặn', 'Bánh Ngọt', 'Snack'], },
    { id: 4, content: 'Món Khác', link: '/another', contentItems: ['Đá Xay', 'Matcha - Sô cô la',], },
  ]

  const storyItems = [
    { id: 0, content: 'Coffeeholic', link: '/alwaysCoffeeholic', contentItems: ['#chuyencaphe', '#phacaphe'], },
    { id: 1, content: 'Teaholic', link: '/alwaysTeaholic', contentItems: ['#cauchuyenvetra', '#phatra'], },
    { id: 2, content: 'Blog', link: '/alwaysBlog', contentItems: ['#inthemood', '#review'], },
  ]

  const [cartItems, setCartItems] = useLocalStorage('CART_ITEMS', [
  ])
  const onAdd = (item) => {
    const exist = cartItems.find(x => x.id === item.id)
    if (exist) {
      setCartItems(cartItems.map(x => x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x))
    } else {
      setCartItems([{ ...item, qty: 1, isChecked: false }, ...cartItems])
    }
  }

  const onRemove = (item) => {
    const exist = cartItems.find((x) => x.id === item.id);
    if (exist.qty === 1) {
      return;
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      )
    }
  }

  return (
    <InitContext.Provider value={{ isOpenHamburger, setIsOpenHamburger, menuList, setMenuList, coffee, setCoffee, tea, setTea, cakeAndSnack, setCakeAndSnack, another, setAnother, handleClickMenuChildren, setMenuChildren, menuChildren, initMenu, setInitMenu, ourMenu, setOurMenu, activeId, setActiveId, cartItems, setCartItems, navItems, onAdd, onRemove, storyItems, alwaysStories, setAlwaysStories, initStory, setInitStory, coffeeholic, setCoffeeholic, teaholic, setTeaholic, blog, setBlog }}>
      {children}
    </InitContext.Provider>
  )
}

export default InitContext;