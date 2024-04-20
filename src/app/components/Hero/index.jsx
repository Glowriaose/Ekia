import style from './style.module.css';
import { Products } from './data';

export const Hero = () => {
  return (
    <div>
      <section className={style.products}>
        <h2>Product Features</h2>
        <div className={style.list}>
          {Products.map((product) => (
            <div className={`${style.item} ${style.stacked}`}>
              <img src={product.image} />
              <div className={style['product-details']}>
                <h5 className={style.title}>{product.title}</h5>
                <p className={style.description}>
                  {product.newPrice}
                  <span>
                    <s className={style.stars}> {product.oldPrice}</s>
                  </span>
                </p>
                <button>{product.cart}</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
