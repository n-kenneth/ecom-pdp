import { useState, useContext } from 'react';

import Logo from '../../assets/logo.svg';
import Cart from '../Cart/Cart';
import Avatar from './Avatar';
import NavigationList from './NavigationList';

import classes from './Header.module.scss';
import BurgerMenu from '../../assets/icon-menu.svg';
import WindowContext from '../../context/WindowContext';

const Header = () => {
	const [showMenu, setShowMenu] = useState(false)
	const { isMobile } = useContext(WindowContext);
	
	return (
		<header className={classes.header}>
			{isMobile && <button className={classes['burger-menu']} onClick={() => setShowMenu(true)}><img src={BurgerMenu} alt="Burger Menu" /></button>}
			<a href="" className={classes.logo}>
				<img src={Logo} alt="sneakers" />
			</a>
			<NavigationList isMobile={isMobile} showMenu={showMenu} closeMenu={() => setShowMenu(false) } />
			<div className={classes['account-nav']}>
				<Cart />
				<Avatar />
			</div>
		</header>
	)
}

export default Header;