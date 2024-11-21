import PropTypes from 'prop-types'
import classNames from 'classnames/bind';
import styles from './SuggestedAcounts.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../Popper';
import AcountPreview from './AcountPreview';
const cx = classNames.bind(styles)
function AcountItem() {

    const renderPreview = prop =>{
        return (
            <div className={cx('preview')} tabIndex="-1" {...prop}>
                 <PopperWrapper>
                    <AcountPreview></AcountPreview>
                 </PopperWrapper>
            </div>
        )
    }

    return (
        <Tippy
            offset={[-30,0]}
            interactive
            placement='bottom'
            delay={[800,0]}
            render={renderPreview}>
            <div className={cx('acount-item')}>
                <img className={cx('avatar')} src='https://vntime.org/wp-content/uploads/2020/04/100-%E1%BA%A2nh-n%E1%BB%81n-m%C3%A1y-t%C3%ADnh-%C4%91%E1%BA%B9p-nh%E1%BA%A5t-c%C3%B3-link-t%E1%BA%A3i-v%E1%BB%81-tr%E1%BB%B1c-ti%E1%BA%BFp-768x576.jpeg' alt='' />
                <div className={cx('item-info')}>
                    <p className={cx('nickname')}>
                        <strong>nguyenvana</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </p>
                    <p className={cx('name')}>Nguyen Van A</p>
                </div>
            </div>
        </Tippy>
    );
}

export default AcountItem;