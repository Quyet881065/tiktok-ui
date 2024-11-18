import classNames from "classnames/bind";
import styles from './Button.module.scss'
import { Link } from "react-router-dom";
const cx = classNames.bind(styles)
function Button({ to, href, primary, leftIcon, rightIcon, rounded = false, text = false, disabled = false, outline = false, small = false, large = false, className, children, onClick, ...passProp }) {
    let Component = 'button';
    const props = { onClick, ...passProp }
    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }
    // Remove event listener when btn disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function' ){
            delete props[key]
        }
    })
}
const classess = cx('wrapper', {
    [className]: className,
    primary,
    outline,
    text,
    small,
    large,
    disabled,
    rounded
})
return (
    <Component className={classess} {...props}>
        {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
        <span className={cx('title')}>{children}</span>
        {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Component>
);
}

export default Button;