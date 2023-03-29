import { FC } from "react";
import { Link as ScrollLink } from 'react-scroll';
import Link from "next/link";
import { useRouter } from "next/router";
import style from './NavigationAndFooter.module.scss';

interface Props {
   link: string;
   id: string;
   execute: () => void;
   state: number;
   index: number;
   text: string;
}

const NavigationButton:FC<Props> = ({link, execute, state, index, text, id}) => {
   const isHomePath = useRouter().pathname === '/';

   return (
      <li>
         {isHomePath && (
               <ScrollLink
                  to={id}
                  smooth={true}
                  offset={0}
                  duration={1000}
               >
                  <button 
                     onClick={execute} 
                     className={`${style.navigation_btn} ${state === index ? style.active_button : ''}`}
                  >
                     {text}
                  </button>
               </ScrollLink>
            ) || (
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
            )
         }
      </li>
   );
}
 
export default NavigationButton;