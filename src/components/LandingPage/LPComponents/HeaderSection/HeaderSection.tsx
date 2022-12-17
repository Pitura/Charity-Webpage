import { FC } from "react";
import { CustomButton, CustomHeader } from "../../../common";
import style from "./HeaderSection.module.scss";

const HeaderSection:FC = () => {
   return (
      <div className={style.header_section_container}>
         <div className={style.header_content}>
            <CustomHeader mainText="Zacznij pomagać!" secondaryText="Oddaj niechciane rzeczy w zaufane ręce"/>
            <div className={style.button_box}>
               <CustomButton text="Oddaj rzeczy"/>
               <CustomButton text="Zorganizuj zbiórkę"/>
            </div>
         </div>
      </div>
   );
}
 
export default HeaderSection;