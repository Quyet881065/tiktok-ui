import classNames from "classnames/bind";
import styles from './Account.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles)
function AccountItem() {
    return (  
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://vntime.org/wp-content/uploads/2020/04/100-%E1%BA%A2nh-n%E1%BB%81n-m%C3%A1y-t%C3%ADnh-%C4%91%E1%BA%B9p-nh%E1%BA%A5t-c%C3%B3-link-t%E1%BA%A3i-v%E1%BB%81-tr%E1%BB%B1c-ti%E1%BA%BFp-768x576.jpeg" alt="" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/> 
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;