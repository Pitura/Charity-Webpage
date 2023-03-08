import { FC } from "react";

import s from "./ReturnForm.module.scss";

interface Props {
   pick1: () => void,
   pick2: () => void,
   pick3: () => void,
   pick4: () => void,
   pick5: () => void,
   state1: boolean,
   state2: boolean,
   state3: boolean,
   state4: boolean,
   state5: boolean,
}

const Step1:FC<Props> = ({pick1, pick2, pick3, pick4, pick5, state1, state2, state3, state4, state5}) => {

   return (
      <div className={s.stepOne__box}>
         <h2>Zaznacz co chcesz oddać:</h2> 
         <label htmlFor="option1">
            <input type="checkbox" name="option1" checked={state1} onChange={pick1}/>
            ubrania, które nadają się do ponownego użycia
         </label>
         <label htmlFor="option2">
            <input type="checkbox" name="option2" checked={state2} onChange={pick2}/>
            ubrania, do wyrzucenia
         </label>
         <label htmlFor="option3">
            <input type="checkbox" name="option3" checked={state3} onChange={pick3}/>
            zabawki
         </label>
         <label htmlFor="option4">
            <input type="checkbox" name="option4" checked={state4} onChange={pick4}/>
            książki
         </label>
         <label htmlFor="option5">
            <input type="checkbox" name="option5" checked={state5} onChange={pick5}/>
            inne
         </label>
      </div>
   );
}
 
export default Step1;