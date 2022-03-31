import React, { createContext, useState } from 'react'
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
      id: 18,
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
      image: 'https://product.hstatic.net/1000075078/product/chocolate-ice-blended_183602_400x400_142587be6f4f4dd0885ba746fd4a8c1a_large.jpg',
      name: 'Chocolate Đá Xay',
      price: 58000,
      type: 'Các Món Khác',
    },
    {
      id: 45,
      image: 'https://product.hstatic.net/1000075078/product/matchadaxay_622077_400x400_5c617ff524e64e638ad7c868613a832b_large.jpg',
      name: 'Matcha Đá Xay',
      price: 58000,
      type: 'Các Món Khác',
    },
    {
      id: 46,
      image: 'https://product.hstatic.net/1000075078/product/chocolate-da_877186_400x400_30a43c54fe484ecfbd606937604ef351_large.jpg',
      name: 'Chocolate Đá',
      price: 58000,
      type: 'Các Món Khác',
    },
    {
      id: 47,
      image: 'https://product.hstatic.net/1000075078/product/matcha-latte-da_083173_400x400_5725292025844c5da25a91d6e9b05a4b_large.jpg',
      name: 'Matcha Latte Đá',
      price: 58000,
      type: 'Các Món Khác',
    },
  ])
  const [menuList, setMenuList] = useState([
    {
      id: 0,
      image: 'https://product.hstatic.net/1000075078/product/ca-phe-den-da_6e25255ae31c4f3bbbb502f77e2c100d_large.jpg',
      name: 'Cà Phê Đen Đá',
      price: 29000,
      type: 'Cà Phê',
    },
    {
      id: 1,
      image: 'https://product.hstatic.net/1000075078/product/caramel-macchiato-da_fa2503073e5c4f7a98516f1c9d39253b_large.jpg',
      name: 'Caramel Macchiato Đá',
      price: 49000,
      type: 'Cà Phê',
    },
    {
      id: 2,
      image: 'https://product.hstatic.net/1000075078/product/tra-sua-mac-ca_377522_400x400_123ab6b1593d4e5c83776a54f6862bbd_large.jpg',
      name: 'Trà Sữa Mắc Ca Trân Châu Trắng',
      price: 49000,
      type: 'Trà',
    },
    {
      id: 3,
      image: 'https://product.hstatic.net/1000075078/product/tra-sen_905594_400x400_c82fd1b3786d45f380cf4c15e9af7ab9_large.jpg',
      name: 'Trà Hạt Sen Đá',
      price: 45000,
      type: 'Trà',
    },
    {
      id: 4,
      image: 'https://product.hstatic.net/1000075078/product/banh-mi-vn-thit-nguoi_5e777a62ef2841bd9a5baf85c6970166_large.jpg',
      name: 'Bánh Mì VN Thịt Nguội',
      price: 29000,
      type: 'Bánh & Snack',
    },
    {
      id: 5,
      image: 'https://product.hstatic.net/1000075078/product/croissant-trung-muoi_880850_400x400_0d8d5e787de8423cb0e60455651a17ee_large.jpg',
      name: 'Croissant Trứng Muối',
      price: 35000,
      type: 'Bánh & Snack',
    },
    {
      id: 6,
      image: 'https://product.hstatic.net/1000075078/product/mousse-gau-chocolate_e25675d96c504dacb88f4e56a54ab48b_large.jpg',
      name: 'Mousse Gấu Chocolate',
      price: 39000,
      type: 'Bánh & Snack',
    },
    {
      id: 7,
      image: 'https://product.hstatic.net/1000075078/product/chanh-sa-da-xay_170980_400x400_2c8af8d0cfff43b78a93924d28a1215f_large.jpg',
      name: 'Chanh Sả Đá Xay',
      price: 49000,
      type: 'Các Món Khác',
    },
    {
      id: 8,
      image: 'https://product.hstatic.net/1000075078/product/daovietquat_033985_400x400_20bfc56b971c47dca8734514a4765675_large.jpg',
      name: 'Đào Việt Quất Đá Xay',
      price: 58000,
      type: 'Các Món Khác',
    },
  ])
  const [ourMenu, setOurMenu] = useState(
    [
    {
      id: 0,
      image: 'https://product.hstatic.net/1000075078/product/ca-phe-den-da_6e25255ae31c4f3bbbb502f77e2c100d_large.jpg',
      name: 'Cà Phê Đen Đá',
      price: 29000,
      type: 'Cà Phê',
    },
    {
      id: 1,
      image: 'https://product.hstatic.net/1000075078/product/caramel-macchiato-da_fa2503073e5c4f7a98516f1c9d39253b_large.jpg',
      name: 'Caramel Macchiato Đá',
      price: 49000,
      type: 'Cà Phê',
    },
    {
      id: 2,
      image: 'https://product.hstatic.net/1000075078/product/tra-sua-mac-ca_377522_400x400_123ab6b1593d4e5c83776a54f6862bbd_large.jpg',
      name: 'Trà Sữa Mắc Ca Trân Châu Trắng',
      price: 49000,
      type: 'Trà',
    },
    {
      id: 3,
      image: 'https://product.hstatic.net/1000075078/product/tra-sen_905594_400x400_c82fd1b3786d45f380cf4c15e9af7ab9_large.jpg',
      name: 'Trà Hạt Sen Đá',
      price: 45000,
      type: 'Trà',
    },
    {
      id: 4,
      image: 'https://product.hstatic.net/1000075078/product/banh-mi-vn-thit-nguoi_5e777a62ef2841bd9a5baf85c6970166_large.jpg',
      name: 'Bánh Mì VN Thịt Nguội',
      price: 29000,
      type: 'Bánh & Snack',
    },
    {
      id: 5,
      image: 'https://product.hstatic.net/1000075078/product/croissant-trung-muoi_880850_400x400_0d8d5e787de8423cb0e60455651a17ee_large.jpg',
      name: 'Croissant Trứng Muối',
      price: 35000,
      type: 'Bánh & Snack',
    },
    {
      id: 6,
      image: 'https://product.hstatic.net/1000075078/product/mousse-gau-chocolate_e25675d96c504dacb88f4e56a54ab48b_large.jpg',
      name: 'Mousse Gấu Chocolate',
      price: 39000,
      type: 'Bánh & Snack',
    },
    {
      id: 7,
      image: 'https://product.hstatic.net/1000075078/product/chanh-sa-da-xay_170980_400x400_2c8af8d0cfff43b78a93924d28a1215f_large.jpg',
      name: 'Chanh Sả Đá Xay',
      price: 49000,
      type: 'Các Món Khác',
    },
    {
      id: 8,
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
      id: 0,
      image: 'https://product.hstatic.net/1000075078/product/tra-nhan-da_484810_400x400_446acb3ad76a48d38a98855cd7be54cd_large.jpg',
      name: 'Trà Long Nhãn Hạt Chia',
      price: 45000,
      type: 'Trà',
    },
    {
      id: 1,
      image: 'https://product.hstatic.net/1000075078/product/nhan-hat-chia--nong_140427_400x400_dffc402ff03b4558999950a750c0973d_large.jpg',
      name: 'Trà Long Nhãn Hạt Chia Nóng',
      price: 51000,
      type: 'Trà',
    },
    {
      id: 2,
      image: 'https://product.hstatic.net/1000075078/product/tra-sen_905594_400x400_c82fd1b3786d45f380cf4c15e9af7ab9_large.jpg',
      name: 'Trà Hạt Sen Đá',
      price: 45000,
      type: 'Trà',
    },
    {
      id: 3,
      image: 'https://product.hstatic.net/1000075078/product/tra-sen-nong_025153_400x400_b7b0ec5844c546d2a6d139a65be8aa0a_large.jpg',
      name: 'Trà Hạt Sen Nóng',
      price: 51000,
      type: 'Trà',
    },
    {
      id: 4,
      image: 'https://product.hstatic.net/1000075078/product/tra-dao-cam-xa_668678_400x400_207c526c987c4026877ebae748c62afd_large.jpg',
      name: 'Trà Đào Cam Sả Đá',
      price: 45000,
      type: 'Trà',
    },
    {
      id: 5,
      image: 'https://product.hstatic.net/1000075078/product/tdcs-nong_288997_400x400_75f2d80e0db2442e9ab752689cbf1001_large.jpg',
      name: 'Trà Đào Cam Sả Nóng',
      price: 51000,
      type: 'Trà',
    },
    {
      id: 6,
      image: 'https://product.hstatic.net/1000075078/product/caramel-macchiato-da_fa2503073e5c4f7a98516f1c9d39253b_large.jpg',
      name: 'Caramel Macchiato Đá',
      price: 49000,
      type: 'Trà',
    },
    {
      id: 7,
      image: 'https://product.hstatic.net/1000075078/product/hong-tra-latte_618293_400x400_8e7d0a023bfb4537913425ec6048e59b_large.jpg',
      name: 'Hồng Trà Latte Macchiato',
      price: 54000,
      type: 'Trà',
    },
    {
      id: 8,
      image: 'https://product.hstatic.net/1000075078/product/hong-tra-sua-nong_941687_400x400_dfe4a7a23ecd4ca49822fc553909828a_large.jpg',
      name: 'Hồng Trà Sữa Nóng',
      price: 54000,
      type: 'Trà',
    },
    {
      id: 9,
      image: 'https://product.hstatic.net/1000075078/product/hong-tra-sua-tran-chau_326977_400x400_30c57e67d1104ae4b7313cf5d40f3e87_large.jpg',
      name: 'Hồng Trà Sữa Trân Châu',
      price: 54000,
      type: 'Trà',
    },
    {
      id: 10,
      image: 'https://product.hstatic.net/1000075078/product/tra-den-matchiato_430281_400x400_88f47618a6b84c2d9ad633d3298fb390_large.jpg',
      name: 'Trà Đen Macchiato',
      price: 49000,
      type: 'Trà',
    },
    {
      id: 11,
      image: 'https://product.hstatic.net/1000075078/product/tra-sua-mac-ca_377522_400x400_123ab6b1593d4e5c83776a54f6862bbd_large.jpg',
      name: 'Trà Sữa Mắc Ca Trân Châu Trắng',
      price: 49000,
      type: 'Trà',
    },
  ])
  const [cakeAndSnack, setCakeAndSnack] = useState([
    {
      id: 0,
      image: 'https://product.hstatic.net/1000075078/product/banhmique_056830_400x400_8b3112e96ce949be82b70c4b4ab994c2_large.jpg',
      name: 'Bánh Mì Que Pate',
      price: 12000,
      type: 'Bánh & Snack',
    },
    {
      id: 1,
      image: 'https://product.hstatic.net/1000075078/product/banh-mi-vn-thit-nguoi_5e777a62ef2841bd9a5baf85c6970166_large.jpg',
      name: 'Bánh Mì VN Thịt Nguội',
      price: 29000,
      type: 'Bánh & Snack',
    },
    {
      id: 2,
      image: 'https://product.hstatic.net/1000075078/product/cha-bong-pho-mai_204282_400x400_8ff5f28305f547c287685bb01a8836fd_large.jpg',
      name: 'Chà Bông Phô Mai',
      price: 32000,
      type: 'Bánh & Snack',
    },
    {
      id: 3,
      image: 'https://product.hstatic.net/1000075078/product/croissant-trung-muoi_880850_400x400_0d8d5e787de8423cb0e60455651a17ee_large.jpg',
      name: 'Croissant Trứng Muối',
      price: 35000,
      type: 'Bánh & Snack',
    },
    {
      id: 4,
      image: 'https://product.hstatic.net/1000075078/product/mochi-kem-dua-dua_f94d5cd4b40a4377937dcf84033d678e_large.jpg',
      name: 'Mochi Kem Dừa Dứa',
      price: 19000,
      type: 'Bánh & Snack',
    },
    {
      id: 5,
      image: 'https://product.hstatic.net/1000075078/product/mochi-kem-phuc-bon-tu_894faa8a39fb43e0828f2125f6c1e8f9_large.jpg',
      name: 'Mochi Kem Phúc Bồn Tử',
      price: 19000,
      type: 'Bánh & Snack',
    },
    {
      id: 6,
      image: 'https://product.hstatic.net/1000075078/product/mochi-kem-viet-quat_1072f38b098d4213889c25128a02bce6_large.jpg',
      name: 'Mochi Kem Việt Quất',
      price: 19000,
      type: 'Bánh & Snack',
    },
    {
      id: 7,
      image: 'https://product.hstatic.net/1000075078/product/mochi-kem-xoai_f402331583f942819b39a8fa2528d9a2_large.jpg',
      name: 'Mochi Kem Xoài',
      price: 19000,
      type: 'Bánh & Snack',
    },
    {
      id: 8,
      image: 'https://product.hstatic.net/1000075078/product/mousse-gau-chocolate_e25675d96c504dacb88f4e56a54ab48b_large.jpg',
      name: 'Mousse Gấu Chocolate',
      price: 39000,
      type: 'Bánh & Snack',
    },
    {
      id: 9,
      image: 'https://product.hstatic.net/1000075078/product/5d92fbc79e12b47db8cabbd0_chanh-day_994413_400x400_333c9a63c0f74d41a11333c637127328_large.jpg',
      name: 'Mousse Passion Cheese',
      price: 29000,
      type: 'Bánh & Snack',
    },
    {
      id: 10,
      image: 'https://product.hstatic.net/1000075078/product/mousse-red-velvet_e732a3a0ffa44f589c8455ab75bc0f60_large.jpg',
      name: 'Mousse Red Velvet',
      price: 29000,
      type: 'Bánh & Snack',
    },
    {
      id: 11,
      image: 'https://product.hstatic.net/1000075078/product/mousse-tiramisu_d396a927d9ba4af284450066bd391148_large.jpg',
      name: 'Mousse Tiramisu',
      price: 32000,
      type: 'Bánh & Snack',
    },
    {
      id: 12,
      image: 'https://product.hstatic.net/1000075078/product/mit-say_666228_400x400_062954ca87384c13ab5044766afbec56_large.jpg',
      name: 'Mít Sấy',
      price: 20000,
      type: 'Bánh & Snack',
    },
  ])
  const [another, setAnother] = useState([
    {
      id: 0,
      image: 'https://product.hstatic.net/1000075078/product/cf-da-xay-_1__158038_400x400_aee86b1c0779491f8c2778ddadf41f15_large.jpg',
      name: 'Cà Phê Đá Xay',
      price: 58000,
      type: 'Các Món Khác',
    },
    {
      id: 1,
      image: 'https://product.hstatic.net/1000075078/product/chanh-sa-da-xay_170980_400x400_2c8af8d0cfff43b78a93924d28a1215f_large.jpg',
      name: 'Chanh Sả Đá Xay',
      price: 49000,
      type: 'Các Món Khác',
    },
    {
      id: 2,
      image: 'https://product.hstatic.net/1000075078/product/chocolate-ice-blended_183602_400x400_142587be6f4f4dd0885ba746fd4a8c1a_large.jpg',
      name: 'Chocolate Đá Xay',
      price: 58000,
      type: 'Các Món Khác',
    },
    {
      id: 3,
      image: 'https://product.hstatic.net/1000075078/product/cookies_da_xay_f8296fb5c1ee492fabfe0969ab1fc43b_large.jpg',
      name: 'Cookie Đá Xay',
      price: 58000,
      type: 'Các Món Khác',
    },
    {
      id: 4,
      image: 'https://product.hstatic.net/1000075078/product/daovietquat_033985_400x400_20bfc56b971c47dca8734514a4765675_large.jpg',
      name: 'Đào Việt Quất Đá Xay',
      price: 58000,
      type: 'Các Món Khác',
    },
    {
      id: 5,
      image: 'https://product.hstatic.net/1000075078/product/matchadaxay_622077_400x400_5c617ff524e64e638ad7c868613a832b_large.jpg',
      name: 'Matcha Đá Xay',
      price: 58000,
      type: 'Các Món Khác',
    },
    {
      id: 6,
      image: 'https://product.hstatic.net/1000075078/product/sinh-to-viet-quoc_145138_400x400_ab271b0cd8be42089cd7e25f985c273e_large.jpg',
      name: 'Sinh Tố Việt Quất',
      price: 58000,
      type: 'Các Món Khác',
    },
    {
      id: 7,
      image: 'https://product.hstatic.net/1000075078/product/chocolate-ice-blended_183602_400x400_142587be6f4f4dd0885ba746fd4a8c1a_large.jpg',
      name: 'Chocolate Đá Xay',
      price: 58000,
      type: 'Các Món Khác',
    },
    {
      id: 8,
      image: 'https://product.hstatic.net/1000075078/product/matchadaxay_622077_400x400_5c617ff524e64e638ad7c868613a832b_large.jpg',
      name: 'Matcha Đá Xay',
      price: 58000,
      type: 'Các Món Khác',
    },
    {
      id: 9,
      image: 'https://product.hstatic.net/1000075078/product/chocolate-da_877186_400x400_30a43c54fe484ecfbd606937604ef351_large.jpg',
      name: 'Chocolate Đá',
      price: 58000,
      type: 'Các Món Khác',
    },
    {
      id: 10,
      image: 'https://product.hstatic.net/1000075078/product/matcha-latte-da_083173_400x400_5725292025844c5da25a91d6e9b05a4b_large.jpg',
      name: 'Matcha Latte Đá',
      price: 58000,
      type: 'Các Món Khác',
    },
  ])
  const [menuChildren, setMenuChildren] = useState([

  ])
  const handleClickMenuChildren = (id) => {
    setMenuChildren(menuList.filter(menu => menu.id === id))
  }
  const navItems = [
    { id: 0, content: 'Tất Cả', link: '/menu', contentItems: [], },
    { id: 1, content: 'Cà Phê', link: '/coffee', contentItems: ['Cà Phê Việt Nam', 'Cà Phê Máy', 'Cold Brew'], },
    { id: 2, content: 'Trà', link: '/tea', contentItems: ['Trà Trái Cây', 'Trà Sữa Macchiato',] },
    { id: 3, content: 'Bánh & Snack', link: '/cakeAndSnack', contentItems: ['Bánh Mặn', 'Bánh Ngọt', 'Snack'], },
    { id: 4, content: 'Món Khác', link: '/another', contentItems: ['Đá Xay', 'Matcha - Sô cô la',], },
  ]
  const [cartItems, setCartItems] = useState([])

  const onAdd = (menuChildren) => {
    const exist = cartItems.find(x => x.id === menuChildren.id)
    if(exist) {
      setCartItems(cartItems.map(x => x.id === x.menuChildren.id ? {...exist, qty: exist.qty + 1} : x))
    } else {
      setCartItems([...cartItems, {...menuChildren, qty: 1}])
    }
  }

  const onRemove = (menuChildren) => {
    const exist = cartItems.find((x) => x.id === menuChildren.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== menuChildren.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === menuChildren.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <InitContext.Provider value={{ isOpenHamburger, setIsOpenHamburger, menuList, setMenuList, coffee, setCoffee, tea, setTea, cakeAndSnack, setCakeAndSnack, another, setAnother, handleClickMenuChildren, setMenuChildren, menuChildren, initMenu, setInitMenu, ourMenu, setOurMenu, activeId, setActiveId, cartItems, setCartItems, navItems, onAdd, onRemove,  }}>
      {children}
    </InitContext.Provider>
  )
}

export default InitContext;