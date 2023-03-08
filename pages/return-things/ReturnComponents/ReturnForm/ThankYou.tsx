import { FC } from "react";
import { CustomHeader } from "../../../../src/components/common";

import s from "./ReturnForm.module.scss";

const ThankYou: FC = () => {
  return (
    <section className={s.thankYou__box}>
      <CustomHeader mainText="Dziękujemy za przesłanie formularza. Na maila prześlemy wszelkie informacje o odbiorze." />
    </section>
  );
};

export default ThankYou;
