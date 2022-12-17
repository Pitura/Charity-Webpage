import { FC } from "react";

import style from './LandingPage.module.scss';
import { HeaderSection } from "./LPComponents";

const LandingPage:FC = () => {
   return (
      <div className={style.container}>
         <HeaderSection />
      </div>
   );
}
 
export default LandingPage;