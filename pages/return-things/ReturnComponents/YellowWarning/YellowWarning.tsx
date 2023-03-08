import { FC } from "react";

import s from "./YellowWarning.module.scss";

interface Props{
   step: number,
}

const YellowWarning:FC<Props> = ({step}) => {
   return (
      <section className={s.yellowWarning__container}>
         <div className={s.yellowWarning__container_box}>
            <h3>
               Ważne!
            </h3>
            {
               step === 1 &&
               <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
            }
            {
               step === 2 &&
               <p>Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.</p>
            }
            {
               step === 3 &&
               <p>Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</p>
            }
            {
               step === 4 &&
               <p>Podaj adres oraz termin odbioru rzeczy.</p>
            }
         </div>
      </section>
   );
}
 
export default YellowWarning;