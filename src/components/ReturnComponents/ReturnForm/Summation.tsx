import { FC } from "react";
import Image from "next/image";

import s from "./ReturnForm.module.scss";
import { Refresh, Shirt } from "../../../../src/assets";

interface Props{
   state1: boolean,
   state2: boolean,
   state3: boolean,
   state4: boolean,
   state5: boolean,
   bags: number,
   localization: string,
   whoToHelp: string,
   organization: string,
   streetValue: string,
   cityValue: string,
   postalValue: string,
   phoneValue: string,
   dateValue: string,
   timeValue: string,
   courierInfoValue: string,
}

const Summation:FC<Props> = ({state1, state2, state3, state4, state5, bags, localization, whoToHelp, organization, streetValue, cityValue, postalValue, phoneValue, dateValue, timeValue, courierInfoValue}) => {

   const returnBags = (num:number) => {
      var nounBag;
      switch (num) {
         case 0 :
            nounBag = 'worków'
            break;
         case 1 :
            nounBag = 'worek'
            break;
         case 5 :
            nounBag = 'worków'
            break;
         default :
            nounBag = 'worki'
            break;
      }
      return `${num} ${nounBag}`
   }
   const returnItems = () => {
      return `${state1 ? 'ubrania w dobrym stanie, ' : ''}${state2 ? 'ubrania w złym stanie, ' : ''}${state3 ? 'zabawki, ' : ''}${state4 ? 'książki, ' : ''}${state5 ? 'inne, ' : ''}`
   }

   return (
      <section className={s.summation__box}>
         <h2>Podsumowanie Twojej darowizny</h2>
         <header className={s.summation__header}>
            <h3>Oddajesz:</h3>
            <div>
               <Image src={Shirt} alt="t-shirt"/>
               <span>{`${returnBags(bags)}, ${returnItems()}${whoToHelp}${organization ? `, ${organization}` : ''}`}</span>
            </div>
            <div>
               <Image src={Refresh} alt="refresh"/>
               <span>Dla lokalizacji: {localization}</span>
            </div>
         </header>
         <div className={s.summation__columns}>
            <div className={s.summation__columns_column}>
               <h3>Adres odbioru:</h3>
               <div>
                  <p>Ulica</p>
                  <span>{streetValue}</span>
               </div>
               <div>
                  <p>Miasto</p>
                  <span>{cityValue}</span>
               </div>
               <div>
                  <p>Kod pocztowy</p>
                  <span>{postalValue}</span>
               </div>
               <div>
                  <p>Numer telefonu</p>
                  <span>{phoneValue}</span>
               </div>
            </div>
            <div className={s.summation__columns_column}>
               <h3>Termin odbioru:</h3>
               <div>
                  <p>Data</p>
                  <span>{dateValue}</span>
               </div>
               <div>
                  <p>Godzina</p>
                  <span>{timeValue}</span>
               </div>
               <div>
                  <p>Uwagi dla kuriera</p>
                  <span>{courierInfoValue}</span>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Summation;