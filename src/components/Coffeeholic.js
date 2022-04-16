import { React, useContext } from 'react';
import { Link } from "react-router-dom"
import InitContext from '../store/InitContext'
import AlwaysStories from './AlwaysStories';
function Coffeeholic() {
  const init = useContext(InitContext)
  init.setAlwaysStories(init.coffeeholic)
  return (
    <div className="bg-[#f0f0f0] pb-[80px] pt-[120px] flex justify-center"
    >
      <div className="flex flex-col justify-center items-center">
        <AlwaysStories
          alwaysStories={init.alwaysStories}
        />
      </div>
    </div>
  )
}
export default Coffeeholic;