import { FC } from "react";
import { CustomHeader } from "../../../common";

import style from "./Contact.module.scss";

const Contact:FC = () => {
   return (
      <section className={style.contact_container}>
         <div className={style.contact_box}>
            <CustomHeader mainText="Skontaktuj się z nami"/>
            <form 
               action=""
               className={style.contact_form}
            >
               <div className={style.input_box}>
                  <div>
                     <label htmlFor="text" className={style.label_style}>
                        Wpisz swoje imię
                     </label>
                     <input 
                        required
                        type="text" 
                        name="text" 
                        placeholder="Kuba"
                        className={style.input_style}
                     />
                  </div>
                  <div>
                     <label htmlFor="email" className={style.label_style}>
                        Wpisz swój email
                     </label>
                     <input 
                        required
                        type="email" 
                        name="email" 
                        placeholder="test@email.pl"
                        className={style.input_style}
                     />
                  </div>
               </div>
               <label htmlFor="textarea" className={style.label_style}>
                  Wpisz swoją wiadomość
               </label>
               <textarea 
                  name="textarea" 
                  required
                  className={style.textarea_style}
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
               ></textarea>
               <input type="submit" name="button" value="Wyślij" className={style.submit_button}/>
            </form>
         </div>
      </section>
   );
}
 
export default Contact;