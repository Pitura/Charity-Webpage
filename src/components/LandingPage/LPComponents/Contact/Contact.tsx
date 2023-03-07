import { FC, FormEvent, useState } from "react";
import { CustomHeader, FormInput } from "../../../common";

import style from "./Contact.module.scss";

const Contact:FC = () => {

   const [msgData, setMsgData] = useState<any>({
      name: '',
      email: '',
      message: '',
   });

   console.log(msgData);
   console.log(msgData.name.length > 0 && msgData.email.length > 0 && msgData.message.length > 0);

   const handleSubmit = (e:FormEvent) => {
      e.preventDefault();
      console.log('Test form sub');
   }

   //pass pattern
   //pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,

   return (
      <section id="contact" className={style.contact__container}>
         <div className={style.contact__box}>
            <CustomHeader mainText="Skontaktuj się z nami"/>
            <form 
               onSubmit={(e) => handleSubmit(e)}
               className={style.contact__form}
            >
               <div className={style.input_box}>
                  <FormInput 
                     label="Wpisz swoje imię"
                     errorMessage="Imię nie powinno zawierać znaków specjalnych i mieścić się od 3 do 16 znaków"
                     onChange={(e:FormEvent) => setMsgData({...msgData, name: (e.target as HTMLInputElement).value})}
                     value={`${msgData.name}`}
                     type="text"
                     name="name"
                     pattern="^[A-Za-z0-9]{3,16}$"
                  />
                  <FormInput 
                     label="Wpisz swój email"
                     errorMessage="Wprowadź poprawny adres email"
                     onChange={(e:FormEvent) => setMsgData({...msgData, email: (e.target as HTMLInputElement).value})}
                     value={`${msgData.email}`}
                     type="email"
                     name="email"
                     pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  />
               </div>
               <FormInput 
                     label="Wpisz swoją wiadomość"
                     errorMessage="Wiadomość musi zawierać od 20 do 120 znaków"
                     onChange={(e:FormEvent) => setMsgData({...msgData, message: (e.target as HTMLInputElement).value})}
                     value={`${msgData.message}`}
                     type="textarea"
                     name="message"
                     pattern="^[A-Za-z0-9]{10,120}$"
                     textbox={true}
                  />
               <input disabled={!(msgData.name.length > 0 && msgData.email.length > 0 && msgData.message.length > 0)} type="submit" name="button" value="Wyślij" className={style.submit_button}/>
            </form>
         </div>
      </section>
   );
}

export default Contact;