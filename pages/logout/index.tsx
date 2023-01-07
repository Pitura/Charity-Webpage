import { FC } from "react";
import Link from "next/link";
import { CustomHeader } from "../../src/components/common";

import style from './logout.module.scss';

const Logout:FC = () => {
   return (
      <section className={style.logout_container}>
         <CustomHeader mainText="Wylogowanie nastąpiło pomyślnie!"/>
         <Link href="/">
            <button className={style.button_box}>
               Strona główna
            </button>
         </Link>
      </section>
   );
}
 
export default Logout;