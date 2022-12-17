import { FC } from 'react';

import style from './CustomHeader.module.scss';
import { Decoration } from '../../../assets';
import Image from 'next/image';

interface Props {
   mainText: string;
   secondaryText?: string;
}

const CustomHeader:FC<Props> = ({mainText, secondaryText}) => {
   return (
      <div className={style.custom_header_box}>
         <div className={style.custom_header_style}>
            <h2>
               {mainText}
            </h2>
            <h2>
               {secondaryText}
            </h2>
         </div>
         <Image src={Decoration} alt="header decoration"/>
      </div>
   );
}
 
export default CustomHeader;