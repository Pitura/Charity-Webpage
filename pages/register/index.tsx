import { FC } from "react";
import Link from "next/link";
import { CustomHeader } from "../../src/components/common";

import style from "./register.module.scss";

const Register:FC = () => {
   return (
      <section className={style.register_container}>
         <div className={style.register_box}>
            <CustomHeader mainText="Załóż konto"/>
            <form>
               <div className={style.inputs_box}>
                  <div>
                     <label htmlFor="email">Email</label>
                     <input type="email" required/>
                  </div>
                  <div>
                     <label htmlFor="password">Hasło</label>
                     <input type="password" />
                  </div>
                  <div>
                     <label htmlFor="password">Powtórz hasło</label>
                     <input type="password" />
                  </div>
               </div>
               <div className={style.button_box}>
                  <Link href="/login">
                     <input type="button" value="Zaloguj się" />
                  </Link>
                  <input type="submit" value="Załóż konto"/>
               </div>
            </form>
         </div>
      </section>
   );
}
 
export default Register;