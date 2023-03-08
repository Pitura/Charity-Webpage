import { FC, FormEvent, useState } from "react";
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

   return (
      <section className={s.returnForm__container}>
         <div className={s.returnForm__contentBox}>
            {
               step === 6
               ? <ThankYou />
               : <main className={s.returnForm__contentBox_main}>
                  {
                     step < 5 &&
                     <p>
                        {
                           `Krok ${step}/4`
                        }
                     </p>
                  }
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
                     <Step2 
                        bags={bagsNo}
                        setBags={setBagsNo}
                     />
                  }
                  {
                     step === 3 &&
                     <Step3 
                        localization={helpLocalization}
                        setLocalization={setHelpLocalization}
                        whoToHelp={whoDoIHelp}
                        setWhoToHelp={setWhoDoIHelp}
                        setOrganization={(e:FormEvent) => setOrganization((e.target as HTMLInputElement).value)}
                        organization={organization}
                     />
                  }
                  {
                     step === 4 &&
                     <Step4 
                        street={(e:FormEvent) => setPickupData({...pickupData, street : (e.target as HTMLInputElement).value})}
                        city={(e:FormEvent) => setPickupData({...pickupData, city : (e.target as HTMLInputElement).value})}
                        postal={(e:FormEvent) => setPickupData({...pickupData, postal : (e.target as HTMLInputElement).value})}
                        phone={(e:FormEvent) => setPickupData({...pickupData, phone : (e.target as HTMLInputElement).value})}
                        date={(e:FormEvent) => setPickupData({...pickupData, date : (e.target as HTMLInputElement).value})}
                        time={(e:FormEvent) => setPickupData({...pickupData, time : (e.target as HTMLInputElement).value})}
                        courierInfo={(e:FormEvent) => setPickupData({...pickupData, courierInfo : (e.target as HTMLInputElement).value})}
                        streetValue={pickupData.street}
                        cityValue={pickupData.city}
                        postalValue={pickupData.postal}
                        phoneValue={pickupData.phone}
                        dateValue={pickupData.date}
                        timeValue={pickupData.time}
                        courierInfoValue={pickupData.courierInfo}
                     />
                  }
                  {
                     step === 5 &&
                     <Summation 
                        state1={usableClothes}
                        state2={nonUsableClothes}
                        state3={toys}
                        state4={books}
                        state5={other}
                        bags={bagsNo}
                        whoToHelp={whoDoIHelp}
                        organization={organization}
                        localization={helpLocalization}
                        streetValue={pickupData.street}
                        cityValue={pickupData.city}
                        postalValue={pickupData.postal}
                        phoneValue={pickupData.phone}
                        dateValue={pickupData.date}
                        timeValue={pickupData.time}
                        courierInfoValue={pickupData.courierInfo}
                     />
                  }
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
               </main>
            }
         </div>
      </section>
   );
}
 
export default ReturnForm;