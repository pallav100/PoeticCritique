import React from "react";
import SmartToyRoundedIcon from '@mui/icons-material/SmartToyRounded';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
interface PromptBoxProps {
  type: string;
  response: string;
}

const PromptBox: React.FC<PromptBoxProps> = (props: PromptBoxProps) => {
  return (
    <div className="flex pb-8">
      <div>
        {props.type === "model" ? (
         <SmartToyRoundedIcon className="text-orange-500"/>
        ) : (
          <Person2RoundedIcon className="text-2xl text-green-600" />
        )}
      </div>
      <div className="flex flex-col pl-2">
        <h3 className="font-bold text-start">
          {props.type === "model" ? "PoeticCritique" : "You"}
        </h3>
        <div className="mt-2">
        <pre className="whitespace-pre-wrap">{props.response}</pre>
        </div>
       
      </div>
    </div>
  );
};
export default PromptBox;
