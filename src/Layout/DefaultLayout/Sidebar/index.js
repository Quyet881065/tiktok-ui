import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss"
import config from "~/config";
import Menu, { MenuItem } from "./Menu";
import SuggestedAcounts from "~/components/SuggestedAcounts";
import { HomeIcon, HomeActiveIcon, UserGroupIcon, UserGroupActiveIcon, LiveIcon, LiveActiveIcon } from '~/components/Icon'
function Sidebar() {
    const cx = classNames.bind(styles)
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For Your" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon />} activeIcon={<UserGroupActiveIcon />} />
                <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
           <SuggestedAcounts label='Suggested Acounts'/>
           <SuggestedAcounts label='Following Acounts'/>
        </aside>
    )
}

export default Sidebar;