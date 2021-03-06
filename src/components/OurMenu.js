import React, {useContext} from 'react'
import './Home.css'
import InitContext from '../store/InitContext'
import { Link } from "react-router-dom"
function OurMenu({ourMenu}) {
  const init = useContext(InitContext)
  return (
    <Link to ="/menuChildren" 
    className="menu text-black flex justify-between flex-col flex-col-50-16 mx-[8px] mb-[24px] min-h-[145px]"
    onClick={() =>init.handleClickMenuChildren(ourMenu.id)}
    >
      <div className="flex flex-col items-center">
        <img src={ourMenu.image} alt={ourMenu.name} className="rounded-[10px] box-shadow-custom"/>
      </div>
      <p className="text-[16px] mb-[4px] mt-[12px] font-bold hover:text-primary-color">{ourMenu.name}</p>
      <div className="text-[14px] mb-[10px]">
        <p>{ourMenu.price.toLocaleString()} đ</p>
      </div>
    </Link>
  )
}
export default OurMenu