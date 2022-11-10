import { useState, useEffect } from 'react';

import Logo from '../../assets/logo.svg';
import Cart from '../Cart/Cart';
import Avatar from './Avatar';
import NavigationList from './NavigationList';

import classes from './Header.module.scss';
import BurgerMenu from '../../assets/icon-menu.svg';

const Header = () => {
	const [showMenu, setShowMenu] = useState(false)
	const isMobile = window.innerWidth < 991;



	return (
		<header className={classes.header}>
			{isMobile && <button><img src={BurgerMenu} /></button>}
			<a href="" className={classes.logo}>
				<img src={Logo} alt="sneakers" />
			</a>
			<NavigationList isMobile={isMobile} />
			<div className={classes['account-nav']}>
				<Cart />
				<Avatar />
			</div>
		</header>
	)
}

export default Header;