import { React, useContext } from 'react';
import { Link } from "react-router-dom"
import InitContext from '../store/InitContext'
function AlwaysStory({alwaysStory}) {
  const init = useContext(InitContext)
  return (
    <div className="bg-[#f0f0f0] pb-[80px] pt-[120px] flex justify-center"
    >
      <div>
        <img src={alwaysStory.image} alt="" />
      </div>
      <div>{alwaysStory.title}</div>
      <div>{alwaysStory.subtitle}</div>
    </div>
  )
}
export default AlwaysStory;