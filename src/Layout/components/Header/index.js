import styles from './Header.module.scss'
import classNames from 'classnames/bind';
import images from '~/assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faCloudUpload, faCoins, faEarthAsia, faEllipsisVertical, faGear, faKeyboard, faMessage, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import Search from '../Search';
import { Link } from 'react-router-dom';
import config from '~/config'

const cx = classNames.bind(styles)
const MENU_ITEMS = [
   {
      icon: <FontAwesomeIcon icon={faEarthAsia} />,
      title: 'English',
      children: {
         title: 'Language',
         data: [
            {
               code: 'en',
               title: 'Enghlish',
            },
            {
               code: 'vi',
               title: 'Tieng Viet',
            },
            {
               code: 'en',
               title: 'Enghlish',
            },
            {
               code: 'vi',
               title: 'Tieng Viet',
            },
            {
               code: 'en',
               title: 'Enghlish',
            },
            {
               code: 'vi',
               title: 'Tieng Viet',
            },
            {
               code: 'en',
               title: 'Enghlish',
            },
            {
               code: 'vi',
               title: 'Tieng Viet',
            },
            {
               code: 'en',
               title: 'Enghlish',
            },
            {
               code: 'vi',
               title: 'Tieng Viet',
            },
            {
               code: 'en',
               title: 'Enghlish',
            },
            {
               code: 'vi',
               title: 'Tieng Viet',
            },
            {
               code: 'en',
               title: 'Enghlish',
            },
            {
               code: 'vi',
               title: 'Tieng Viet',
            },
         ]
      }
   },
   {
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
      title: 'Feedback end help',
      to: '/feedback'
   },
   {
      icon: <FontAwesomeIcon icon={faKeyboard} />,
      title: 'Keyboard shortcuts'
   },
]
function Header() {
   const currentUser = true;
   const handleMenuChange = (menuItem) => {
      //   switch(menuItem.type){
      //    case 'language':
      //       break;
      //       default:
      //   }
   }
   const userMenu = [
      {
         icon: <FontAwesomeIcon icon={faUser} />,
         title: 'View Profile',
         to : '/view'
      },
      {
         icon: <FontAwesomeIcon icon={faCoins} />,
         title: 'Get coins',
         to: '/coins'
      },
      {
         icon: <FontAwesomeIcon icon={faGear} />,
         title: 'Settings',
         to:'/setting'
      },
      ...MENU_ITEMS,
      {
         icon: <FontAwesomeIcon icon={faSignOut} />,
         title: 'Log out',
         to:'/logout',
         separate:true,
      }
   ]
   return <header className={cx('wrapper')}>
      <div className={cx('inner')}>
          <Link to= {config.routes.home} className={cx('logo-link')}> <img src={images.logo} alt='Tiktok' /></Link>
          <Search/>
         <div className={cx('actions')}>
            {currentUser ? (
               <>
                  <Tippy delay={[0, 300]} content='Update video' placement='bottom'>
                     <button className={cx('action-btn')}>
                        <FontAwesomeIcon icon={faCloudUpload} />
                     </button>
                  </Tippy>
                  <button className={cx('action-btn')}>
                     <FontAwesomeIcon icon={faMessage} />
                  </button>
               </>
            ) :
               (
                  <>
                     <Button text>
                        Upload
                     </Button>
                     <Button primary>
                        Login
                     </Button>

                  </>
               )
            }
            <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
               {currentUser ? (
                  <Image src='https://vntime.org/wp-content/uploads/2020/04/100-%E1%BA%A2nh-n%E1%BB%81n-m%C3%A1y-t%C3%ADnh-%C4%91%E1%BA%B9p-nh%E1%BA%A5t-c%C3%B3-link-t%E1%BA%A3i-v%E1%BB%81-tr%E1%BB%B1c-ti%E1%BA%BFp-768x576.jpeg'
                   className={cx('user-avatar')} 
                   alt='nguyen van a'
                   fallback='https://fullstack.edu.vn/assets/f8-icon-lV2rGpF0.png' />
               ) : (
                  <button className={cx('more-btn')}>
                     <FontAwesomeIcon icon={faEllipsisVertical} />
                  </button>
               )}
            </Menu>
         </div>
      </div>
   </header>;
}

export default Header;