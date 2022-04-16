import { React, useContext } from 'react';
import { Link } from "react-router-dom"
import InitContext from '../store/InitContext'
import AlwaysStory from './AlwaysStory'

function AlwaysStories(alwaysStories) {
  const init = useContext(InitContext)
  return (
    <div className="bg-[#f0f0f0] pb-[80px] pt-[120px] flex justify-center"
    >
      <div className="row">
        <h2 className="title-chuyen text-[24px] font-[600] leading-[34px] mb-[8px] pb-[12px] text-center relative">Always Chuyện</h2>
        <div className="w-[588px] max-w-[100%] mx-auto text-center mb-[24px]">
          <p className="text-[16px] leading-[20px] text-center">Always Coffe là nơi mọi người xích lại gần nhau hơn, đề cao giá trị kết nối con người và chia sẻ thân tình bên những tách cà phê, ly trà đượm hương, truyền cảm hứng về lối sống hiện đại.</p>
        </div>
        <ul className="flex justify-center items-center">
          {init.storyItems.map(storyItem => (
            <Link
              to={storyItem.link}
              className="px-[12px]"
              key={storyItem.id}
              onClick={() => init.setActiveId(storyItem.id)}
            >
              {init.activeId === storyItem.id ? (
                <a href="" className="button-tab-story bg-primary-color">{storyItem.content}</a>
              ) : (
                <a href="" className="button-tab-story hover:bg-primary-color">{storyItem.content}</a>
              )}
            </Link>
          ))}
        </ul>
      </div>
      <div>
        {alwaysStories.map(alwaysStory => (
          <AlwaysStory
            key={alwaysStory.id}
            alwaysStory={alwaysStory}
          />
        ))}
      </div>
    </div>
  )
}
export default AlwaysStories;