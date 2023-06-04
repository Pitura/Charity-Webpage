import { FC, FormEvent, useState } from "react";
import Link from "next/link";
import { CustomHeader, FormInput } from "../../src/components/common";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../src/db/firebase-config";
import { useRouter } from "next/router";

import style from "./login.module.scss";

const Login: FC = () => {
  
  const router = useRouter();

  const [errorMsg, setErrorMsg] = useState<boolean>(false);
  const [loginData, setLoginData] = useState<any>({
    email: "",
    password: "",
  });

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(
        auth,
        loginData.email,
        loginData.password
      );
      sessionStorage.setItem("user", loginData.email);
    } catch (err) {
      console.error("Error:", err);
      setErrorMsg(true);
      return;
    }
    router.push("/#home");
  };

  return (
    <section className={style.login_container}>
      <div className={style.login_box}>
        <CustomHeader mainText="Zaloguj się" />
        <form onSubmit={(e) => handleLogin(e)}>
          <div className={style.inputs_box}>
            <div className={style.readyAcc}>
              <span>Jeśli nie chcesz tworzyć konta:</span>
              <span>test@gmail.com // test123!</span>
            </div>
            <FormInput
              label="Wpisz E-mail"
              errorMessage="Wprowadź poprawny adres email"
              onChange={(e: FormEvent) =>
                setLoginData({
                  ...loginData,
                  email: (e.target as HTMLInputElement).value,
                })
              }
              value={`${loginData.email}`}
              type="email"
              name="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            />
            <FormInput
              label="Wpisz hasło"
              errorMessage="Wprowadź poprawne hasło"
              onChange={(e: FormEvent) =>
                setLoginData({
                  ...loginData,
                  password: (e.target as HTMLInputElement).value,
                })
              }
              value={`${loginData.password}`}
              type="password"
              name="password"
              pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^<>&*])[a-zA-Z0-9!@#$%^<>&*]{8,20}$"
            />
          </div>
          {errorMsg && (
            <p className={style.error_msg}>E-mail lub hasło nieprawidłowe!</p>
          )}
          <div className={style.button_box}>
            <Link href="/register">
              <input type="button" value="Załóż konto" />
            </Link>
            <input
              type="submit"
              value="Zaloguj się"
              disabled={
                !(loginData.email.length > 2 && loginData.password.length > 7)
              }
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
