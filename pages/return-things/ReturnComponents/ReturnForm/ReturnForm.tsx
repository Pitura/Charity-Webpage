import { FC } from "react";

import s from "./ReturnForm.module.scss";

interface Props{
   step: number,
}

const ReturnForm:FC<Props> = ({step}) => {
   return (
      <section className={s.returnForm__container}>
         <div className={s.returnForm__contentBox}>
            123
         </div>
      </section>
   );
}
 
export default ReturnForm;