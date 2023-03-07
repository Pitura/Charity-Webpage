import { FC, FormEvent, useState } from "react";
import Image from "next/image";

import s from "./FormInput.module.scss";
import { Eye, EyeSlash } from "../../../assets";

interface Props {
   label: string,
   errorMessage: string,
   onChange: (e:FormEvent) => void,
   value: string,
   type: string,
   name: string,
   pattern: string,
   textbox?: boolean,
}

const FormInput:FC<Props> = ({label, errorMessage, onChange, value, type, name, pattern, textbox}) => {

   const [showPass, setShowPass] = useState<boolean>(false);

   const textAreaError = value.length < 20 || value.length > 120;

   return (
         <div className={s.input__style} style={{marginTop: textbox ? '20px' : '0'}}>
            {
               textbox
               ?
               <textarea
                  className={`${s.input__style_input} ${s.input__style_textbox}
                     ${
                        textbox && value.length > 0 &&
                        (textAreaError
                        ? s.colorRed 
                        : ''
                     )}
                  `}
                  name={name}
                  onChange={onChange}
                  value={value}
               />
               :
               <input
                  className={`${s.input__style_input}`}
                  name={name}
                  type={showPass ? 'text' : type}
                  onChange={onChange}
                  value={value}
                  pattern={pattern}
                  autoComplete='off'
               />
            }
            {
               type === 'password' &&
               <Image src={showPass ? EyeSlash : Eye} alt="eye" className={s.input__style_icon} onClick={() => setShowPass(!showPass)}/>
            }
            <label className={`${s.input__style_label} ${value.length > 0 ? s.input__style_labelActive : ''}`}>{label}</label>
            <span className={`${s.input__style_error} 
                     ${
                        textbox && value.length > 0 &&
                        (textAreaError
                        ? s.input__style_textboxError 
                        : ''
                     )}`
                  }
            >
               {errorMessage}
            </span>
         </div>
   );
}

export default FormInput;