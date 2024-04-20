import { Children } from 'react';
import { combineClasses } from '../../../util/format';
export const CustomButton = (props) => {
  const classNames = {
    primary: 'accountBtn',
    secondary: 'seeBtn',
    outline: 'btnLogin',
  };
  const className = classNames[props.type] || classNames.primary;
  const classes = combineClasses(className, props.className);
  return props.onClick ? (
    <button onClick={props.onClick} className={classes}>
      {props.text}
    </button>
  ) : (
    <a href='#' className={classes}>
      {props.text}
    </a>
  );
};
