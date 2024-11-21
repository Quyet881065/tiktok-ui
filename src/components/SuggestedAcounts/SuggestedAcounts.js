import PropTypes from 'prop-types'
import classNames from "classnames/bind";
import styles from './SuggestedAcounts.module.scss'
import AcountItem from './AcountItem';
const cx = classNames.bind(styles)
function SuggestedAcounts({label}) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AcountItem/>
            <AcountItem/>
            <p className={cx('more-btn')}>See all</p>
        </div>
    );
}

SuggestedAcounts.prototype = {
  label : PropTypes.string.isRequired,
}

export default SuggestedAcounts;