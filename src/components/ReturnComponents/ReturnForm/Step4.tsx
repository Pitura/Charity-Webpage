import { FC, FormEvent } from "react";

import s from "./ReturnForm.module.scss";

interface Props{
   street: (e:FormEvent) => void,
   city: (e:FormEvent) => void,
   postal: (e:FormEvent) => void,
   phone: (e:FormEvent) => void,
   date: (e:FormEvent) => void,
   time: (e:FormEvent) => void,
   courierInfo: (e:FormEvent) => void,
   streetValue: string,
   cityValue: string,
   postalValue: string,
   phoneValue: string,
   dateValue: string,
   timeValue: string,
   courierInfoValue: string,
}

const Step4:FC<Props> = ({street, city, postal, phone, date, time, courierInfo, streetValue, cityValue, postalValue, phoneValue, dateValue, timeValue, courierInfoValue }) => {
   return (
      <div className={s.stepFour__box}>
         <h2>
            Podaj adres oraz termin odbioru rzecz przez kuriera
         </h2>
         <div className={s.stepFour__inputBox}>
            <div className={s.stepFour__inputBox_column}>
               <h3>
                  Adres odbioru:
               </h3>
               <div>
                  <p>Ulica</p>
                  <input type="text" required pattern="" placeholder="Zamiejska 3/24" 
                     onChange={street} value={streetValue}
                  />
               </div>
               <div>
                  <p>Miasto</p>
                  <input type="text" required pattern="[A-Z][a-z]" placeholder="Sosnowiec" 
                     onChange={city} value={cityValue}
                  />
               </div>
               <div>
                  <p>Kod pocztowy</p>
                  <input type="text" required pattern="[0-9][0-9]-[0-9][0-9][0-9]" placeholder="00-001" 
                     onChange={postal} value={postalValue}
                  />
               </div>
               <div>
                  <p>Numer telefonu</p>
                  <input type="text" required pattern="[0-9]{3}([., -]?)[0-9]{3}\1[0-9]{3}" placeholder="123 456 789" 
                     onChange={phone} value={phoneValue}
                  />
               </div>
            </div>
            <div className={s.stepFour__inputBox_column}>
               <h3>
                  Termin odbioru:
               </h3>
               <div>
                  <p>Data</p>
                  <input type="text" required pattern="[0-3][0-9]([., -]?)[0-1][0-9]\1[0-9]{4}" placeholder="01.01.1991" 
                     onChange={date} value={dateValue}
                  />
               </div>
               <div>
                  <p>Godzina</p>
                  <input type="text" required pattern="[0-9][0-9]:[0-9][0-9]" placeholder="23:23" 
                     onChange={time} value={timeValue}
                  />
               </div>
               <div>
                  <p>Uwagi dla kuriera</p>
                  <textarea onChange={courierInfo} value={courierInfoValue}/>
               </div>
            </div>
         </div>
      </div>
   );
}
 
export default Step4;