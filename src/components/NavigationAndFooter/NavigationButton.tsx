import { FC } from "react";
import Link from "next/link";
import style from './NavigationAndFooter.module.scss';

interface Props {
   link: string;
   execute: () => void;
   state: number;
   index: number;
   text: string;
}

const NavigationButton:FC<Props> = ({link, execute, state, index, text}) => {

   return (
      <li>
         <Link 
            href={link}
            scroll={false}
         >
            <button 
               onClick={execute} 
               className={`${style.navigation_btn} ${state === index ? style.active_button : ''}`}
            >
               {text}
            </button>
         </Link>
      </li>
   );
}
 
export default NavigationButton;