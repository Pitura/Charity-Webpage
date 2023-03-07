import { FC, FormEvent, useState } from "react";
import Link from "next/link";
import { CustomHeader, FormInput } from "../../src/components/common";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../src/db/firebase-config";
import { useRouter } from "next/router";

import style from "./login.module.scss";

const Login:FC = () => {

   const router = useRouter();

   const [loginData, setLoginData] = useState<any>({
      email: '',
      password: ''
   })

   const handleLogin = async (e:FormEvent) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, loginData.email, loginData.password)
         .then((userCredential) => {
            const user = userCredential.user;
            sessionStorage.setItem('user', loginData.email);
            sessionStorage.setItem('id', user.uid);
            router.reload();
         })
         .catch((err) => {
            console.error(err);
         })
      router.push('/');
   }

   return (
      <section className={style.login_container}>
         <div className={style.login_box}>
            <CustomHeader mainText="Zaloguj się"/>
            <form onSubmit={(e) => handleLogin(e)}>
               <div className={style.inputs_box}>
                  <FormInput 
                     label="Wpisz E-mail"
                     errorMessage="Wprowadź poprawny adres email"
                     onChange={(e:FormEvent) => setLoginData({...loginData, email: (e.target as HTMLInputElement).value})}
                     value={`${loginData.email}`}
                     type="email"
                     name="email"
                     pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  />
                  <FormInput 
                     label="Wpisz hasło"
                     errorMessage="Wprowadź poprawne hasło"
                     onChange={(e:FormEvent) => setLoginData({...loginData, password: (e.target as HTMLInputElement).value})}
                     value={`${loginData.password}`}
                     type="password"
                     name="password"
                     pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
                  />
               </div>
               <div className={style.button_box}>
                  <Link href="/register">
                     <input type="button" value="Załóż konto"/>
                  </Link>
                  <input type="submit" value="Zaloguj się" disabled={!(loginData.email.length > 2 && loginData.password.length > 7)}/>
               </div>
            </form>
         </div>
      </section>
   );
}
 
export default Login;