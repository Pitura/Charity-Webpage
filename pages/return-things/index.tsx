import { FC, useState } from "react";
import { Contact } from "../../src/components/common";
import { ReturnForm, ReturnHeader } from "./ReturnComponents";
import YellowWarning from "./ReturnComponents/YellowWarning/YellowWarning";

import s from "./ReturnThings.module.scss";


const ReturnThings:FC = () => {
   
   const [step, setStep] = useState<number>(1);

   return (
      <section className={s.returnThings__container}>
         <ReturnHeader />
         {
            step < 5 &&
            <YellowWarning step={step} />
         }
         <ReturnForm 
            step={step} 
            stepForward={() => setStep(step + 1)} 
            stepBack={() => setStep(step - 1)}
         />
         <Contact />
      </section>
   );
}
 
export default ReturnThings;