import PropTypes from 'prop-types'
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper'
import MenuItem from './MenuItem';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss'
import Header from './Header';
import { useState } from 'react';
const cx = classNames.bind(styles)

const defaultFn = ()=>{}
function Menu({ children, items = [], hideOnClick= false , onChange=defaultFn}) {
    const [history, setHistory] = useState([{ data: items }])
    const curent = history[history.length - 1]
    const renderItems = ()=>{
        return curent.data.map((item,index)=>{
            const isParent = !!item.children
            return (
                <MenuItem 
                  key={index}
                  data={item}
                  onClick={()=>{
                    if(isParent){
                       setHistory(prev => [...prev, item.children])
                    }else{
                        onChange(item)
                    }
                  }}   
                />
            )
        })
    }

    const handleBack = ()=> {
        setHistory((prev)=> prev.slice(0, prev.length-1))
    }

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex='-1' {...attrs}>
            <PopperWrapper className={cx('menu-propper')}>
                {history.length > 1 && <Header title={curent.title} onBack={handleBack} />}
               <div className={cx('menu-body')}> {renderItems()}</div>
            </PopperWrapper>
        </div>
    )

    const handleResetMenu = ()=> {
        setHistory(prev => prev.slice(0,1))
    }

return (
    <Tippy
        offset={[12,8]}
        delay={[0, 1000]}
        hideOnClick={hideOnClick}
        placement='bottom-end'
        interactive
        render={renderResult}
        onHide={handleResetMenu}
    >
        {children}
    </Tippy>
);
}

Menu.prototype = {
    children: PropTypes.node.string,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
}

export default Menu;