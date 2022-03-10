import React, { useContext } from 'react'
import OurMenu from './OurMenu'
import InitContext from '../store/InitContext'
import { Link } from "react-router-dom";
function OurMenuList({ ourMenuList }) {
  const init = useContext(InitContext)
  return (
    <div className="row">
      <div className="flex justify-start text-[20px] mb-[24px] mx-[18px] font-semibold text-white">
      </div>
      <div className="flex flex-col md:flex-row flex-wrap mb-[24px]">
        {ourMenuList.map(ourMenu => (
          <OurMenu
            key={ourMenu.id}
            ourMenu={ourMenu}
          />
        ))}
      </div>
    </div>
  )
}
export default OurMenuList