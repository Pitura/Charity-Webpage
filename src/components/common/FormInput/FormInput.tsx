import { FC, FormEvent } from "react";

import s from "./FormInput.module.scss";

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

   return (
         <div className={s.input__style}>
            {
               textbox
               ?
               <textarea
                  className={`${s.input__style_input} ${s.input__style_textbox}`}
                  name={name}
                  onChange={onChange}
                  value={value}
               />
               :
               <input
                  className={`${s.input__style_input}`}
                  name={name}
                  type={type}
                  onChange={onChange}
                  value={value}
                  pattern={pattern}
               />
            }
            <label className={`${s.input__style_label} ${value.length > 0 ? s.input__style_labelActive : ''}`}>{label}</label>
            <span className={`${s.input__style_error} 
                     ${
                        textbox && value.length > 0 &&
                        ((value.length < 20 || value.length > 120) 
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