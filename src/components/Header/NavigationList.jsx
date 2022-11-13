import classes from './NavigationList.module.scss';
import CloseIcon from '../../assets/icon-close.svg';

const NavigationList = ({ isMobile, showMenu, closeMenu }) => {
	let navClasses = isMobile ? classes['mobile-menu'] : '';
	navClasses += showMenu ? ` ${classes.open}` : '';

	return (
		<nav>
			{showMenu && <div className={classes.backdrop} onClick={closeMenu}></div>}
			<ul className={`${classes.navigation} ${navClasses}`}>
				{isMobile && <li><button className={classes['close-button']} onClick={closeMenu}><img src={CloseIcon} /></button></li>}
				<li><a href="">Collections</a></li>
				<li><a href="">Men</a></li>
				<li><a href="">Women</a></li>
				<li><a href="">About</a></li>
				<li><a href="">Contact</a></li>
			</ul>
		</nav>
	)
}

export default NavigationList;