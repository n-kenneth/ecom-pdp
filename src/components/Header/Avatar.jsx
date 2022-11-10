import avatar from '../../assets/image-avatar.png';

import classes from './Avatar.module.scss';

const Avatar = () => {
	return (
		<div className={classes.avatar}>
			<a href="">
				<img src={avatar} />
			</a>
		</div>
	)
}

export default Avatar;