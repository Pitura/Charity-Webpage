import { FC } from "react";
import Link from "next/link";

import style from "./CustomButton.module.scss";

interface Props{
   text: string;
   execute?: () => void;
   redirect?: boolean;
}

const CustomButton:FC<Props> = ({text, execute, redirect}) => {
   return (
      <div 
         className={style.custom_button_style}
         onClick={execute}
      >
         {
            redirect
            ? <Link href="/login">{text}</Link>
            : <span>{text}</span>
         }
      </div>
   );
}
 
export default CustomButton;