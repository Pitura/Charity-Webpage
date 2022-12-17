import { FC, useState } from "react";
import { CustomHeader } from "../../../common";
import WhoCarousel from "./WhoCarousel";

import style from "./WhoDoWeHelp.module.scss";

const WhoDoWeHelp:FC = () => {
   const [display, setDisplay] = useState<string>('fund');
   return (
      <section id="who" className={style.who_container}>
         <CustomHeader mainText="Komu pomagamy?"/>
         <div className={style.who_buttons_box}>
            <button 
               onClick={() => setDisplay('fund')}
               className={`${style.who_button} ${display === 'fund' ? style.active : ''}`}
            >
               Fundacjom
            </button>
            <button 
               onClick={() => setDisplay('org')}
               className={`${style.who_button} ${display === 'org' ? style.active : ''}`}
            >
               Organizacjom pozarządowym
            </button>
            <button 
               onClick={() => setDisplay('loc')}
               className={`${style.who_button} ${display === 'loc' ? style.active : ''}`}
            >
               Lokalnym zbiórkom
            </button>
         </div>
         <div className={style.who_carousel_box}>
            {
               display === 'fund' &&
               <WhoCarousel 
                  description="
                     W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                  "
                  current_display={display}
               />
            }
            {
               display === 'org' &&
               <WhoCarousel 
                  description="
                     Organizations Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                  "
                  current_display={display}
               />
            }
            {
               display === 'loc' &&
               <WhoCarousel 
                  description="
                     Locals Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                  "
                  current_display={display}
               />
            }
         </div>
      </section>
   );
}
 
export default WhoDoWeHelp;