import React, { useContext } from 'react'
import OurMenu from './OurMenu'
function OurMenuList({ ourMenuList }) {
  return (
    <div className="row mt-[12px]">
      <div className="flex flex-col md:flex-row flex-wrap">
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