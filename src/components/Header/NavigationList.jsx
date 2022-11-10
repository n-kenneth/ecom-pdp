import classes from './NavigationList.module.scss';

const NavigationList = ({ isMobile }) => {
	return (
		<nav className={isMobile ? classes['mobile-menu'] : ''}>
			<ul className={classes.navigation}>
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