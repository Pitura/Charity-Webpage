import { FC } from "react";
import Image from "next/image";
import { CustomHeader } from "../../../common";

import { Signature } from "../../../../assets";
import style from "./AboutUs.module.scss";

const AboutUs:FC = () => {
   return (
      <section id="about" className={style.about_us_container}>
         <div className={style.about_us_box}>
            <CustomHeader mainText="O nas" />
            <p>
               Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
            </p>
            <Image src={Signature} alt="signature"/>
         </div>
         <div className={style.about_us_image} >{`.`}</div>
      </section>
   );
}
 
export default AboutUs;