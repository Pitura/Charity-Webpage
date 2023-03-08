import { FC, useState, useEffect } from "react";
import Link from "next/link";

import style from "./CustomButton.module.scss";

interface Props{
   text: string;
   execute?: () => void;
   redirect?: boolean;
}

const CustomButton:FC<Props> = ({text, execute, redirect}) => {

   const [userLoggedIn, setUserLoggedIn] = useState<string>('');

   useEffect(() => {
      setUserLoggedIn(sessionStorage.getItem('user') || '')
   },[])

   return (
      <div 
         className={style.custom_button_style}
         onClick={execute}
      >
         {
            redirect
            ? <Link href={`${userLoggedIn.length > 1 ? '/return-things' : "/login"}`}>{text}</Link>
            : <span>{text}</span>
         }
      </div>
   );
}
 
export default CustomButton;