import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from 'react-scroll';

import { Facebook, Instagram } from "../../assets";
import style from './NavigationAndFooter.module.scss';

interface Props {
   children: any;
}

const NavigationAndFooter:FC<Props> = ({children}) => {
   const [activeButton, setActiveButton] = useState<number>(1);
   console.log(children);
   return (
      <>
         <nav className={style.navigation_box}>
            <div>
               <Link
                  href="login"
               >
                  <button className={style.acc_management_btn}>
                     Zaloguj
                  </button>
               </Link>
               <Link
                  href="register"
               >
                  <button className={style.acc_management_btn}>
                     Załóż konto
                  </button>
               </Link>
            </div>
            <ul>
               <li>
                  <ScrollLink
                     to="home"
                     smooth={true}
                     offset={0}
                     duration={500}
                     delay={500}
                     isDynamic={true}
                  >
                     <button 
                        onClick={() => setActiveButton(1)} 
                        className={`${style.navigation_btn} ${activeButton === 1 ? style.active_button : ''}`}
                     >
                        Start
                     </button>
                  </ScrollLink>
               </li>
               <li>
                  <ScrollLink
                        to="info"
                        smooth={true}
                        offset={-50}
                        duration={500}
                        isDynamic={true}
                     >
                     <button 
                        onClick={() => setActiveButton(2)} 
                        className={`${style.navigation_btn} ${activeButton === 2 ? style.active_button : ''}`}
                     >
                        O co Chodzi
                     </button>
                  </ScrollLink>
               </li>
               <li>
                  <ScrollLink
                     to="about"
                     smooth={true}
                     offset={-50}
                     duration={500}
                     isDynamic={true}
                  >
                     <button 
                        onClick={() => setActiveButton(3)} 
                        className={`${style.navigation_btn} ${activeButton === 3 ? style.active_button : ''}`}
                     >
                        O nas
                     </button>
                  </ScrollLink>
               </li>
               <li>
                  <ScrollLink
                     to="who"
                     smooth={true}
                     offset={0}
                     duration={500}
                     isDynamic={true}
                  >
                     <button 
                        onClick={() => setActiveButton(4)} 
                        className={`${style.navigation_btn} ${activeButton === 4 ? style.active_button : ''}`}
                     >
                        Fundacja i organizacje
                     </button>
                  </ScrollLink>
               </li>
               <li>
                  <ScrollLink
                     to="contact"
                     smooth={true}
                     offset={0}
                     duration={500}
                     isDynamic={true}
                  >
                     <button 
                        onClick={() => setActiveButton(5)} 
                        className={`${style.navigation_btn} ${activeButton === 5 ? style.active_button : ''}`}
                     >
                        Kontakt
                     </button>
                  </ScrollLink>
               </li>
            </ul>
         </nav>
         {children}
         <footer className={style.footer_box}>
            <p>Copyright by Coders Lab</p>
            <div>
               <Image src={Facebook} alt="facebook"/>
               <Image src={Instagram} alt="instagram"/>
            </div>
         </footer>
      </>
   );
}
 
export default NavigationAndFooter;