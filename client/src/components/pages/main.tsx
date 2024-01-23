import React, { useState } from "react";
import TextInput from "../reusable/TextInput";
import Button from "../reusable/Button";
import PromptBox from "../reusable/PromptBox";
import Sidebar from "../reusable/Sidebar";
import { getHaiku, reviewHaiku } from "../../apiCalls/haikuApis";
import { getPromptHistory } from "../../apiCalls/promptsHistoryApis";

interface msgType {
  "text": string;
  "sender":string
}
const Main: React.FC = () => {
  const [prompt, setPrompt] = useState("");
  const [isInputDisabled, setInputDisabled] = useState(false);

  const handleInputChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value;
    setPrompt(val);
  };
  const [msgs, setMsgs] = useState<msgType[]>([]);

  /*** Callback for review haiku API call  */
  const promptSubmitCallback = (msg) => {
    setMsgs(prev => [...prev, {
      "text": msg.promptResponse,
      "sender": "model"
    }])
  }
  
  /*** Send button click handler */
  const handleSendButtonClick = () => {
    if(prompt.length > 500){
      alert("Please enter only upto 500 characters long haiku for review");
      return;
    }
    setMsgs((prevmsgs) => {
      return [...prevmsgs, {
        text: prompt == "" ? "Generate a haiku for me" : prompt,
        sender: "user"
      }]
    })
    setPrompt("");
    if(prompt.trim() === ""){
      getHaiku(promptSubmitCallback);
    } else {
      reviewHaiku(prompt, promptSubmitCallback);
    }

  };

  /*** Render messages in the prompt */
  const renderPromptMessages = (promptChats) => {
    const promptObject = [{
      "sender": "user",
      "text": promptChats[0].prompt || ""
    }, 
    { "text": unescape(promptChats[0].model_response) || "",
      "sender": "model"
    }
]
    setMsgs(promptObject);
    setInputDisabled(true);

  }

  /*** Click Handler for prompt on sidebar */
  const handlePromptClick = (id) => {
    getPromptHistory(id, renderPromptMessages);
  };

  /*** Click Handler for new prompt */
  const handleNewchatClick = () => {
    setInputDisabled(false);
    setMsgs([]);
  }

  return (
    <div className=" bg-white h-full w-full flex flex-col">
      <div className="flex-grow min-h-0">
        <div className="h-full flex relative">
          <Sidebar handlePromptClick={(id) => handlePromptClick(id)} handleNewchatClick={handleNewchatClick}
/>
          <div className="flex-grow">
            <div className="w-full h-full flex">
              <div className="mx-auto lg:w-[48rem] w-full h-full flex flex-col">
                <div className="flex-grow min-h-0 pb-4 pt-8 px-5 lg:px-0">
                  {msgs.length ? 
                    <div className="h-full flex flex-col overflow-y-auto">
                      {msgs.map((item, index) => {
                        return (
                          <PromptBox
                            key={index}
                            type={item["sender"]}
                            response={item["text"]}
                          />
                        );
                      })}
                    </div>
                    : <div className="h-full w-full flex text-4xl italic justify-center items-center">Type a haiku to review or generate one </div>
}
                </div>
                <div className="pt-4 pb-4 flex justify-center items-center relative px-5 lg:px-0">
                  <TextInput disabled={isInputDisabled} handleChange={handleInputChange} value={prompt} />
                  <div className="absolute bottom-6 lg:right-2 right-7">
                    <Button disabled={isInputDisabled} handleButtonClick={handleSendButtonClick} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;