import { FC } from "react";
import Image from "next/image";
import { CustomButton, CustomHeader } from "../../../common";
import style from "./MainSection.module.scss";
import { Shirt, Magnifier, Basket, Refresh } from "../../../../assets";

const MainSection:FC = () => {
   return (
      <section id="info" className={style.main_section_container}>
         <div className={style.statistics_box}>
            <div className={style.statistic}>
               <h3>10</h3>
               <h4>Oddanych worków</h4>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat  volutpat.
               </p>
            </div>
            <div className={style.statistic}>
               <h3>5</h3>
               <h4>Wspartych organizacji</h4>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat  volutpat.
               </p>
            </div>
            <div className={style.statistic}>
               <h3>7</h3>
               <h4>Zorganizowanych zbiórek</h4>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat  volutpat.
               </p>
            </div>
         </div>
         <CustomHeader mainText="Wystarczą 4 proste kroki"/>
         <div className={style.manual_box}>
            <div className={style.manual_step}>
               <Image src={Shirt} alt="shirt"/>
               <p>Wybierz rzeczy</p>
               <div className={style.border_bottom_div} />
               <p>ubrania, zabawki, sprzęt i inne</p>
            </div>
            <div className={style.manual_step}>
               <Image src={Basket} alt="basket"/>
               <p>Spakuj je</p>
               <div className={style.border_bottom_div} />
               <p>skorzystaj z worków na śmieci</p>
            </div>
            <div className={style.manual_step}>
               <Image src={Magnifier} alt="shirt"/>
               <p>Zdecyduj komu chcesz pomóc</p>
               <div className={style.border_bottom_div} />
               <p>wybierz zaufane miejsce</p>
            </div>
            <div className={style.manual_step}>
               <Image src={Refresh} alt="shirt"/>
               <p>Zamów kuriera</p>
               <div className={style.border_bottom_div} />
               <p>kurier przyjedzie w dogodnym terminie</p>
            </div>
         </div>
         <CustomButton text="Oddaj rzeczy" redirect={true}/>
      </section>
   );
}

export default MainSection;