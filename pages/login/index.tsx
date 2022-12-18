import { FC } from "react";
import { CustomHeader } from "../../src/components/common";

import style from "./login.module.scss";

const Login:FC = () => {
   return (
      <section className={style.login_container}>
         <div className={style.login_box}>
            <CustomHeader mainText="Zaloguj się"/>
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
               </div>
               <div className={style.button_box}>
                  <input type="button" value="Załóż konto"/>
                  <input type="submit" value="Zaloguj się"/>
               </div>
            </form>
         </div>
      </section>
   );
}
 
export default Login;