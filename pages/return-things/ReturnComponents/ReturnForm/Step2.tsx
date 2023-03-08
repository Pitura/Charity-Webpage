import { FC, useState } from "react";
import Image from "next/image";

import s from "./ReturnForm.module.scss";
import { ArrowDown } from "../../../../src/assets";

interface Props{
   setBags: (num:number) => void,
   bags: number,
}

const Step2:FC<Props> = ({setBags, bags}) => {

   const [toggleList, setToggleList] = useState<boolean>(false);

   return (
      <div className={s.stepTwo__box}>
         <h2>
            Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
         </h2>
         <div className={s.stepTwo__boxItems}>
            <p>
               Liczba 60l worków: 
            </p>
            <button onClick={() => setToggleList(!toggleList)} className={s.main_btn}>
               {`- wybierz - (${bags})`}
               <Image src={ArrowDown} alt="arrow" className={toggleList ? s.rotateArrow : ''}/>
            </button>
            <div className={`${s.stepTwo__absoluteBox} ${toggleList ? s.stepTwo__absoluteBox_active : ''}`}>
               <button onClick={() => `${setBags(1)} ${setToggleList(false)}`}>1</button>
               <button onClick={() => `${setBags(2)} ${setToggleList(false)}`}>2</button>
               <button onClick={() => `${setBags(3)} ${setToggleList(false)}`}>3</button>
               <button onClick={() => `${setBags(4)} ${setToggleList(false)}`}>4</button>
               <button onClick={() => `${setBags(5)} ${setToggleList(false)}`}>5</button>
            </div>
         </div>
      </div>
   );
}
 
export default Step2;