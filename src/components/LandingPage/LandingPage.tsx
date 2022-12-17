import { FC } from "react";

import style from './LandingPage.module.scss';
import { AboutUs, HeaderSection, MainSection } from "./LPComponents";

const LandingPage:FC = () => {
   return (
      <div className={style.container}>
         <HeaderSection />
         <MainSection />
         <AboutUs />
      </div>
   );
}

export default LandingPage;