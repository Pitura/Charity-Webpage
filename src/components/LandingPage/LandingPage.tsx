import { FC } from "react";
import { AboutUs, HeaderSection, MainSection, WhoDoWeHelp } from "./LPComponents";
import { Contact } from "../common";

import style from './LandingPage.module.scss';

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