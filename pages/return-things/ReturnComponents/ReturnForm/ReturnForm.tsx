import { FC, useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Summation from "./Summation";
import ThankYou from "./ThankYou";

import s from "./ReturnForm.module.scss";

interface Props{
   step: number,
   stepForward: () => void,
   stepBack: () => void,
}

const ReturnForm:FC<Props> = ({step, stepForward, stepBack }) => {

   const [usableClothes, setUsableClothes] = useState<boolean>(false);
   const [nonUsableClothes, setNonUsableClothes] = useState<boolean>(false);
   const [toys, setToys] = useState<boolean>(false);
   const [books, setBooks] = useState<boolean>(false);
   const [other, setOther] = useState<boolean>(false);
   const [bagsNo, setBagsNo] = useState<number>(0);
   const [helpLocalization, setHelpLocalization] = useState('');
   const [whoDoIHelp, setWhoDoIHelp] = useState<string>('');
   const [organization, setOrganization] = useState<string>('');
   const [pickupData, setPickupData] = useState<any>({
      street: '',
      city: '',
      postal: '',
      phone: '',
      date: '',
      time: '',
      courierInfo: '',
   })

   console.log(usableClothes,nonUsableClothes,toys,books,other)

   return (
      <section className={s.returnForm__container}>
         <div className={s.returnForm__contentBox} style={{justifyContent: step === 6 ? 'center' : 'space-between'}}>
            {
               step === 6
               ? <ThankYou />
               : <>
                  {
                     step < 5 &&
                     <p>
                        {
                           `Krok ${step}/4`
                        }
                     </p>
                  }
                  <main className={s.returnForm__contentBox_main}>
                     {
                        step === 1 &&
                        <Step1 
                           pick1={() => setUsableClothes(!usableClothes)}
                           pick2={() => setNonUsableClothes(!nonUsableClothes)}
                           pick3={() => setToys(!toys)}
                           pick4={() => setBooks(!books)}
                           pick5={() => setOther(!other)}
                           state1={usableClothes}
                           state2={nonUsableClothes}
                           state3={toys}
                           state4={books}
                           state5={other}
                        />
                     }
                     {
                        step === 2 &&
                        <Step2 />
                     }
                     {
                        step === 3 &&
                        <Step3 />
                     }
                     {
                        step === 4 &&
                        <Step4 />
                     }
                     {
                        step === 5 &&
                        <Summation />
                     }
                  </main>
                  <div className={s.returnForm__btnBox}>
                     {
                        step > 1 &&
                        <button className={s.returnForm__btn} onClick={stepBack}>
                           Wstecz
                        </button>
                     }
                     <button className={s.returnForm__btn} onClick={stepForward}>
                        {
                           step < 5
                           ? 'Dalej'
                           : 'Potwierdzam'
                        }
                     </button>
                  </div>
               </>
            }
         </div>
      </section>
   );
}
 
export default ReturnForm;