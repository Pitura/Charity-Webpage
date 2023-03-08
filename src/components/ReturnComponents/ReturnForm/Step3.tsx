import { FC, FormEvent, useState } from "react";
import Image from "next/image";

import s from "./ReturnForm.module.scss";
import { ArrowDown } from "../../../../src/assets";

interface Props{
   localization: string,
   setLocalization: (i:string) => void,
   whoToHelp: string,
   setWhoToHelp: (i: string) => void,
   setOrganization: (e:FormEvent) => void,
   organization: string,
}

const Step3:FC<Props> = ({localization, setLocalization, whoToHelp, setWhoToHelp, setOrganization, organization}) => {

   const [toggleList, setToggleList] = useState<boolean>(false);

   return (
      <div className={s.stepThree__box}>
         <div className={s.stepThree__boxItems}>
            <h2>Lokalizacja:</h2>
            <button onClick={() => setToggleList(!toggleList)} className={s.main_btn}>
               {`- wybierz - ${localization ? `(${localization})` : ''}`}
               <Image src={ArrowDown} alt="arrow" className={toggleList ? s.rotateArrow : ''}/>
            </button>
            <div className={`${s.stepThree__absoluteBox} ${toggleList ? s.stepThree__absoluteBox_active : ''}`}>
               <button onClick={() => `${setLocalization('Poznań')} ${setToggleList(false)}`}>Poznań</button>
               <button onClick={() => `${setLocalization('Warszawa')} ${setToggleList(false)}`}>Warszawa</button>
               <button onClick={() => `${setLocalization('Kraków')} ${setToggleList(false)}`}>Kraków</button>
               <button onClick={() => `${setLocalization('Wrocław')} ${setToggleList(false)}`}>Wrocław</button>
               <button onClick={() => `${setLocalization('Katowice')} ${setToggleList(false)}`}>Katowice</button>
            </div>
         </div>
         <div className={s.stepThree__boxItems}>
            <h3>Komu chcesz pomóc?</h3>
            <div className={s.stepThree__boxItems_helpBtns}>
               <button onClick={() => setWhoToHelp('dzieciom')} className={`${whoToHelp === 'dzieciom' ? s.helpBtn_active : ''}`}>dzieciom</button>
               <button onClick={() => setWhoToHelp('samotnym matkom')} className={`${whoToHelp === 'samotnym matkom' ? s.helpBtn_active : ''}`}>samotnym matkom</button>
               <button onClick={() => setWhoToHelp('bezdomnym')} className={`${whoToHelp === 'bezdomnym' ? s.helpBtn_active : ''}`}>bezdomnym</button>
               <button onClick={() => setWhoToHelp('niepełnosprawnym')} className={`${whoToHelp === 'niepełnosprawnym' ? s.helpBtn_active : ''}`}>niepełnosprawnym</button>
               <button onClick={() => setWhoToHelp('osobom starszym')} className={`${whoToHelp === 'osobom starszym' ? s.helpBtn_active : ''}`}>osobom starszym</button>
            </div>
         </div>
         <div className={s.stepThree__boxItems}>
            <div>
               <h3>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h3>
               <input type="text" onChange={setOrganization} className={s.input__enterOrganization} value={organization}/>
            </div>
         </div>
      </div>
   );
}

export default Step3;