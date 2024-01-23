import React, { useEffect, useState } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { getPromptsList } from "../../apiCalls/promptsHistoryApis";


export const Sidebar: React.FC<{ handlePromptClick: (id: any) => void, handleNewchatClick:  (id: any) => void;}> = ({handlePromptClick, handleNewchatClick}: { handlePromptClick: (id: any) => void, handleNewchatClick:  (id: any) => void;}) => {
  const[ promptsList, setPomptsList] = useState([]);
  const apiCallback = (prompts) => {
    setPomptsList(prompts);
  };
  
  useEffect(() => {
    getPromptsList(apiCallback);
  }, []);
  console.log(promptsList);
  return (
    <div className="sidebar lg:w-[260px] bg-gray-900 border-r text-white flex flex-col">
      <div className="p-4 flex justify-between">
        <h1 className="text-3xl">PoeticCritique</h1>
        <button onClick={handleNewchatClick}>
          <AddCircleOutlineIcon/>
        </button>
      </div>
      <div className="flex-grow min-h-0">
        <div className="text-start mt-5 font-semibold pl-4 text-lg">Your Prompt History</div>
        <div className="h-full overflow-y-auto py-4 px-3">
        {promptsList.map((p) => 
          <div id={p.ID} className="truncate mt-4 hover:bg-gray-700 hover:cursor-pointer py-2 px-2" onClick={(e) => handlePromptClick(e.currentTarget.id)}>
            {p.prompt}
          </div>
        )}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
