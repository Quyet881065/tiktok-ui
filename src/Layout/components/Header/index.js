import { useEffect, useState } from 'react';
import styles from './Header.module.scss'
import classNames from 'classnames/bind';
import images from '~/assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faCircleXmark, faCloudUpload, faCoins, faEarthAsia, faEllipsisVertical, faGear, faKeyboard, faMagnifyingGlass, faMessage, faSignIn, faSignOut, faSpinner, faUser } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

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
   const [searchResult, setSearchResult] = useState([])
   const currentUser = true;
   useEffect(() => {
      setTimeout(() => {
         setSearchResult([])
      }, 2000)
   }, [])
   const handleMenuChange = (menuItem) => {

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
         <div className={cx('logo')}>
            <img src={images.logo} alt='Tiktok' />
         </div>
         <HeadlessTippy
            interactive
            visible={searchResult.length > 0}
            render={(attrs) => (
               <div className={cx('search-result')} tabIndex='-1' {...attrs}>
                  <PopperWrapper>
                     <h4 className={cx('search-title')}>Accounts</h4>
                     <AccountItem />
                     <AccountItem />
                     <AccountItem />
                  </PopperWrapper>
               </div>
            )}
         >
            <div className={cx('search')}>
               <input placeholder='Search accounts and videos' spellCheck={false} />
               <button className={cx('clear')}>
                  <FontAwesomeIcon icon={faCircleXmark} />
               </button>
               <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
               <button className={cx('search-btn')}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
               </button>
            </div>
         </HeadlessTippy>
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
                  <img src='https://vntime.org/wp-content/uploads/2020/04/100-%E1%BA%A2nh-n%E1%BB%81n-m%C3%A1y-t%C3%ADnh-%C4%91%E1%BA%B9p-nh%E1%BA%A5t-c%C3%B3-link-t%E1%BA%A3i-v%E1%BB%81-tr%E1%BB%B1c-ti%E1%BA%BFp-768x576.jpeg' className={cx('user-avatar')} alt='nguyen van a' />
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