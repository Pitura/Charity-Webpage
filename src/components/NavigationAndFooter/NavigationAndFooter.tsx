import { FC, useState, useEffect } from "react";
import NavigationButton from "./NavigationButton";
import Image from "next/image";
import Link from "next/link";
import { auth } from "../../db/firebase-config";
import { signOut } from "firebase/auth";

import style from './NavigationAndFooter.module.scss';
import { Facebook, Instagram } from "../../assets";

interface Props {
   children: any;
}

const NavigationAndFooter:FC<Props> = ({children}) => {

   const [activeButton, setActiveButton] = useState<number>(0);
   const [burgerOpen, setBurgerOpen] = useState<boolean>(false);
   const [userLogged, setUserLogged] = useState<string>('')
   
   useEffect(() => {
      setUserLogged(sessionStorage.getItem('user') || '')
   }, [])

   return (
      <>
         <button 
            onClick={() => setBurgerOpen(!burgerOpen)}
            className={`
               ${burgerOpen ? style.burger_closed : style.burger_open} 
               ${style.nav_hamburger_button}
            `}
         >
            <div />
            <div />
            <div />
         </button>
         <nav className={`
            ${burgerOpen ? style.mobile_nav_open : ''} 
            ${style.navigation_box} 
            `}
         >
            <div>
               <div>
                  {
                     userLogged &&
                     userLogged
                  }
               </div>
               {
                  userLogged
                  ? <Link href="/">
                     <button 
                        onClick={() => `${sessionStorage.clear()} ${setUserLogged('')} ${signOut(auth)}`}
                        className={style.acc_management_btn}
                     >
                        Wyloguj
                     </button>
                  </Link>
                  : <>
                        <Link
                           href="login"
                           scroll
                        >
                           <button 
                              onClick={() => setActiveButton(0)}
                              className={style.acc_management_btn}
                           >
                              Zaloguj
                           </button>
                        </Link>
                        <Link
                           href="register"
                        >
                           <button 
                              onClick={() => setActiveButton(0)}
                              className={style.acc_management_btn}
                           >
                              Załóż konto
                           </button>
                        </Link>
                     </>
               }
            </div>
            <ul>
               <NavigationButton 
                  link= "/#home"
                  id= "home"
                  execute={() => setActiveButton(1)}
                  state= {activeButton}
                  index= {1}
                  text= 'Start'
               />
               <NavigationButton 
                  link= "/#info"
                  id= "info"
                  execute={() => setActiveButton(2)}
                  state= {activeButton}
                  index= {2}
                  text= 'O co Chodzi'
               />
               <NavigationButton 
                  link= "/#about"
                  id= "about"
                  execute={() => setActiveButton(3)}
                  state= {activeButton}
                  index= {3}
                  text= 'O nas'
               />
               <NavigationButton 
                  link= "/#who"
                  id= "who"
                  execute={() => setActiveButton(4)}
                  state= {activeButton}
                  index= {4}
                  text= 'Fundacja i organizacje'
               />
               <NavigationButton 
                  link= "/#contact"
                  id= "contact"
                  execute={() => setActiveButton(5)}
                  state= {activeButton}
                  index= {5}
                  text= 'Kontakt'
               />
            </ul>
         </nav>

         {children}

         <footer className={style.footer_box}>
            <p>Copyright by Coders Lab</p>
            <div>
               <Link
                  href='https://www.facebook.com'
               >
                  <Image src={Facebook} alt="facebook" />
               </Link>
               <Link
                  href='https://www.instagram.com/'
               >
                  <Image src={Instagram} alt="instagram"/>
               </Link>
            </div>
         </footer>
      </>
   );
}
 
export default NavigationAndFooter;