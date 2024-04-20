import { Products } from './data';
import styles from './style.module.css';
import { SideBar } from './SideBar';

export const RiceSession = () => {
  return (
    <>
      <div className={styles.container}>
        <SideBar />
        <section className={styles.products}>
          <div className={styles.list}>
            {Products.map((product) => (
              <div className={`${styles.item} ${styles.stacked}`}>
                <img src={product.image} />
                <div className={styles['product-details']}>
                  <h5 className={styles.title}>{product.title}</h5>
                  <p className={styles.description}>{product.description}</p>
                  <p className={styles.price}>{product.price}</p>
                  <span className={styles.stars}>{product.stars}</span>
                  <span className={styles.reviews}>{product.reviews}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};
