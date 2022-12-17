import { FC } from "react";
import Image from "next/image";

import { CustomHeader } from "../../../common";

import style from "./HeaderSection.module.scss";

const HeaderSection:FC = () => {
   return (
      <div className={style.header_section_container}>
         <div className={style.header_content}>
            <CustomHeader mainText="Zacznij pomagać!" secondaryText="Oddaj niechciane rzeczy w zaufane ręce"/>
            <div className={style.button_box}>
               <button className={style.button_style}>
                  Oddaj rzeczy
               </button>
               <button className={style.button_style}>
                  Zorganizuj zbiórkę
               </button>
            </div>
         </div>
      </div>
   );
}
 
export default HeaderSection;