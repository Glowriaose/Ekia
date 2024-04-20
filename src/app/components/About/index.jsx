import { FiTruck } from 'react-icons/fi';
import { BsCurrencyDollar } from 'react-icons/bs';
import { CiPercent } from 'react-icons/ci';
import { BiHeadphone } from 'react-icons/bi';
import style from './style.module.css';

export const About = () => {
  <section className={style.products}>
    <div className={style.list}>
      <div className={`${style.item} ${style.stacked}`}>
        <div className={style.icon}>
          <img src={FiTruck} />
        </div>

        <div className={style['product-details']}>
          <h5 className={style.title}>Free Shipping </h5>
          <h5 className={style.title}>Order bove $1000</h5>
        </div>
      </div>
      <div className={`${style.item} ${style.stacked}`}>
        <div className={style.icon}>
          <img src={BsCurrencyDollar} />
        </div>

        <div className={style['product-details']}>
          <h5 className={style.title}>Return and Refund </h5>
          <h5 className={style.title}>Money Back Guarenty</h5>
        </div>
      </div>
      <div className={`${style.item} ${style.stacked}`}>
        <div className={style.icon}>
          <img src={CiPercent} />
        </div>

        <div className={style['product-details']}>
          <h5 className={style.title}>Member Discount </h5>
          <h5 className={style.title}>On every order</h5>
        </div>
      </div>

      <div className={`${style.item} ${style.stacked}`}>
        <div className={style.icon}>
          <img src={BiHeadphone} />
        </div>

        <div className={style['product-details']}>
          <h5 className={style.title}>Customer Support </h5>
          <h5 className={style.title}>Every Time Call Supports</h5>
        </div>
      </div>
    </div>
  </section>;
};
