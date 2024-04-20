import EkiaLogo from '../../assets/images/ekia-logo.png';
import style from './style.module.css';

export function Logo(props) {
  return (
    <a href='#/dasboard' className={style.logo}>
      <img src={EkiaLogo} />
    </a>
  );
}
