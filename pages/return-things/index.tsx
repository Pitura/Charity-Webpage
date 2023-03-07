import { FC } from "react";
import { Contact } from "../../src/components/common";
import { ReturnHeader } from "./ReturnComponents";

import s from "./ReturnThings.module.scss";

const ReturnThings:FC = () => {
   return (
      <section className={s.returnThings__container}>
         <ReturnHeader />
         <Contact />
      </section>
   );
}
 
export default ReturnThings;