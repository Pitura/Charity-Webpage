import { FC } from "react";

import style from "./CustomButton.module.scss";

interface Props{
   text: string;
   execute?: () => void;
}

const CustomButton:FC<Props> = ({text, execute}) => {
   return (
      <div 
         className={style.custom_button_style}
         onClick={execute}
      >
         {text}
      </div>
   );
}
 
export default CustomButton;