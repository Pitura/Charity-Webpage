import { FC } from "react";
import { CustomHeader } from "../../../../src/components/common";

import s from "./ReturnHeader.module.scss";

const ReturnHeader: FC = () => {
  return(
    <section className={s.returnHeader__container}>
      <div className={s.returnHeader__contentBox}>
        <CustomHeader mainText={`Oddaj rzeczy których już nie chcesz POTRZEBUJĄCYM`} />
        <h3 className={s.returnHeader__contentBox_h3}>
          Wystarczą 4 proste kroki:
        </h3>
        <div className={s.returnHeader__contentBox_info}>
          <div className={s.returnHeader__contentBox_square}>
            <div className={s.returnHeader__contentBox_squareContent}>
              <h4>1</h4>
              <p>Wybierz rzeczy</p>
            </div>
          </div>
          <div className={s.returnHeader__contentBox_square}>
            <div className={s.returnHeader__contentBox_squareContent}>
              <h4>2</h4>
              <p>Spakuj worki</p>
            </div>
          </div>
          <div className={s.returnHeader__contentBox_square}>
            <div className={s.returnHeader__contentBox_squareContent}>
              <h4>3</h4>
              <p>Wybierz fundację</p>
            </div>
          </div>
          <div className={s.returnHeader__contentBox_square}>
            <div className={s.returnHeader__contentBox_squareContent}>
              <h4>4</h4>
              <p>Zamów kuriera</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default ReturnHeader;
