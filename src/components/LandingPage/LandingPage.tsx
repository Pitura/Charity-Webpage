import { FC } from "react";

import style from './LandingPage.module.scss';
import { AboutUs, HeaderSection, MainSection, WhoDoWeHelp, Contact } from "./LPComponents";

const LandingPage:FC = () => {
   return (
      <div className={style.container}>
         <HeaderSection />
         <MainSection />
         <AboutUs />
         <WhoDoWeHelp />
         <Contact />
      </div>
   );
}

export default LandingPage;